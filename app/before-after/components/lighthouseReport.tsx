import React from "react"

interface LighthouseScoreProps {
  score: number
  label: string
  color: string
}

export const LighthouseScore = React.memo(({ score, label, color }: LighthouseScoreProps) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-600"
      case "orange":
        return "text-orange-500"
      case "yellow":
        return "text-yellow-500"
      case "green":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-gray-700">{label}</span>
      <div className="flex items-center">
        <div
          className={`w-12 h-12 rounded-full border-4 ${getColorClass(color)} border-current flex items-center justify-center mr-2`}
        >
          <span className="text-lg font-semibold">{score}</span>
        </div>
      </div>
    </div>
  )
})

LighthouseScore.displayName = "LighthouseScore"

