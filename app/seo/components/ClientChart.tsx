'use client'

import dynamic from 'next/dynamic'

const SEOChart = dynamic(() => import('./Charts').then(mod => mod.SEOChart), {
  ssr: false
})

export function ClientChart({ data }: { data: any[] }) {
  return <SEOChart data={data} />
} 