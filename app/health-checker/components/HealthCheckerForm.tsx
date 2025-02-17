'use client'

import { useState } from 'react'
import { checkWebsiteHealth } from '../actions/checkWebsiteHealth'
import LighthouseReport from './LighthouseReport'

type Report = {
  scores: {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
  }
  auditResults: {
    performance: any[]
    accessibility: any[]
    bestPractices: any[]
    seo: any[]
  }
}

export default function HealthCheckerForm() {
  const [url, setUrl] = useState('')
  const [report, setReport] = useState<Report | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await checkWebsiteHealth(url)
      setReport(result)
    } catch (err) {
      setError('Failed to fetch report. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="bg-zinc-300/75 dark:bg-zinc-900/95 rounded-lg shadow-md p-4 mb-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your website URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
            className="w-full px-3 py-2 border dark:text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {loading ? 'Checking...' : 'Check Website Health'}
        </button>
      </form>
      {error && <p className="text-red-600 text-sm dark:text-red-400">{error}</p>}
      {report && <LighthouseReport report={report} />}
    </div>
  )
}

