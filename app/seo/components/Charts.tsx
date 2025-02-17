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
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" className="text-sm" />
        <YAxis className="text-sm" />
        <Tooltip wrapperClassName="bg-background text-foreground rounded-lg border shadow-sm" />
        <Area 
          type="monotone" 
          dataKey="withSEO" 
          stroke="hsl(var(--primary))" 
          fill="hsl(var(--primary))" 
          fillOpacity={0.3}
        />
        <Area 
          type="monotone" 
          dataKey="withoutSEO" 
          stroke="hsl(var(--secondary))" 
          fill="hsl(var(--secondary))" 
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

// Need to export default for dynamic import
export default SEOChart 