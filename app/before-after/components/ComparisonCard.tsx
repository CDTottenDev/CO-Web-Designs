"use client"

import { ImageModal } from "@/app/components/ImageModal"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ComparisonCardProps {
  type: "before" | "after"
  device: "mobile" | "desktop"
  imageSrc: string
  altText: string
  scores: {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
  }
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  type,
  device,
  imageSrc,
  altText,
  scores,
}) => {
  const chartData = [
    { category: "Performance", value: scores.performance },
    { category: "Accessibility", value: scores.accessibility },
    { category: "Best Practices", value: scores.bestPractices },
    { category: "SEO", value: scores.seo },
  ]

  const scoreItems = [
    {
      label: "Performance",
      value: scores.performance,
      icon: "🚀",
      description: "How fast your website loads and responds",
    },
    {
      label: "Accessibility",
      value: scores.accessibility,
      icon: "♿",
      description: "How accessible your website is to all users",
    },
    {
      label: "Best Practices",
      value: scores.bestPractices,
      icon: "✅",
      description: "Adherence to web development best practices",
    },
    {
      label: "SEO",
      value: scores.seo,
      icon: "🔍",
      description: "Search engine optimization effectiveness",
    },
  ]

  return (
    <Card className="w-full bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className={`text-2xl font-semibold text-center ${
          type === "before" ? "text-red-700" : "text-green-700"
        } mb-4`}>
          {device === "mobile" ? "Mobile" : "Desktop"} - {type === "before" ? "Before" : "After"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <ImageModal src={imageSrc} alt={altText} />
          <div className="flex items-center justify-center gap-1 mb-4 text-blue-600 font-medium">
            <span className="text-xl">↑</span>
            <span className="text-sm hidden md:inline">Click image to view full size</span>
            <span className="text-sm md:hidden">Tap image to view full size</span>
          </div>

          {/* Score Details */}
          <div className="grid grid-cols-2 gap-4">
            {scoreItems.map((item) => (
              <div key={item.label} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-gray-600">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart */}
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Score"
                  dataKey="value"
                  stroke={type === "before" ? "#ef4444" : "#22c55e"}
                  fill={type === "before" ? "#ef4444" : "#22c55e"}
                  fillOpacity={0.5}
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ComparisonCard 