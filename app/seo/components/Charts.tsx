'use client'

import { Card, Title, AreaChart } from "@tremor/react"

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
    <AreaChart
      className="h-72 mt-4"
      data={data}
      index="month"
      categories={["withSEO", "withoutSEO"]}
      colors={["teal", "rose"]}
      valueFormatter={(number: number) => 
        Intl.NumberFormat("us").format(number).toString()
      }
      yAxisWidth={60}
      showAnimation={true}
      showLegend={true}
      showGridLines={true}
      showYAxis={true}
      showXAxis={true}
    />
  )
}

// Need to export default for dynamic import
export default SEOChart 