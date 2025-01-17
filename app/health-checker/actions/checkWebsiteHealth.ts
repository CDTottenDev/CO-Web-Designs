'use server'

const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY

interface AuditRef {
  id: string;
  weight: number;
}

interface Audit {
  score: number;
  title: string;
  description: string;
}

export async function checkWebsiteHealth(url: string) {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url
  )}&key=${API_KEY}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch Lighthouse report')
    }

    const { categories, audits } = data.lighthouseResult

    const scores = {
      performance: Math.round(categories.performance.score * 100),
      accessibility: Math.round(categories.accessibility.score * 100),
      bestPractices: Math.round(categories['best-practices'].score * 100),
      seo: Math.round(categories.seo.score * 100),
    }

    const auditResults = {
      performance: getAuditResults(audits, categories.performance.auditRefs),
      accessibility: getAuditResults(audits, categories.accessibility.auditRefs),
      bestPractices: getAuditResults(audits, categories['best-practices'].auditRefs),
      seo: getAuditResults(audits, categories.seo.auditRefs),
    }

    return { scores, auditResults }
  } catch (error) {
    console.error('Error fetching Lighthouse report:', error)
    throw new Error('Failed to fetch Lighthouse report')
  }
}

function getAuditResults(audits: Record<string, Audit>, auditRefs: AuditRef[]) {
  return auditRefs
    .map(({ id, weight }) => ({
      id,
      weight,
      score: audits[id].score,
      title: audits[id].title,
      description: audits[id].description,
    }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5)
}


