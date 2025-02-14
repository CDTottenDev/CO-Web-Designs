'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

interface DataPoint {
  month: string
  withSEO: number
  withoutSEO: number
}

export function SEOChart({ data }: { data: DataPoint[] }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="withSEO" 
          stroke="#8884d8" 
          fill="#8884d8" 
        />
        <Area 
          type="monotone" 
          dataKey="withoutSEO" 
          stroke="#82ca9d" 
          fill="#82ca9d" 
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

// Need to export default for dynamic import
export default SEOChart 