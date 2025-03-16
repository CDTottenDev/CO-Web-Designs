"use client";

import { ImageModal } from "@/app/components/ImageModal";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ComparisonCardProps {
  type: "before" | "after";
  device: "mobile" | "desktop";
  imageSrc: string;
  altText: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
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
  ];

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
  ];

  return (
    <div className={`w-full border-2 border-black ${type === "before" ? "bg-red-50" : "bg-green-50"} retro-shadow p-6`}>
      <div className="relative mb-6">
        <div className={`inline-block ${type === "before" ? "bg-red-500" : "bg-green-500"} text-white px-3 py-1 border-2 border-black mb-4`}>
          <span className="font-bold">
            {device === "mobile" ? "Mobile" : "Desktop"} - {type === "before" ? "Before" : "After"}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-2 border-black retro-shadow">
          <ImageModal src={imageSrc} alt={altText} />
        </div>
        
        <div className="flex items-center justify-center gap-1 mb-4 text-black font-medium">
          <span className="text-xl">↑</span>
          <span className="text-sm hidden md:inline">Click image to view full size</span>
          <span className="text-sm md:hidden">Tap image to view full size</span>
        </div>

        {/* Score Details */}
        <div className="mt-4">
          <button 
            className="w-full bg-yellow-300 border-2 border-black py-2 font-bold retro-btn mb-4"
            onClick={() => document.getElementById(`scores-${type}-${device}`)?.classList.toggle('hidden')}
          >
            View Detailed Scores
          </button>
          
          <div id={`scores-${type}-${device}`} className="hidden">
            <div className="grid grid-cols-2 gap-4 mt-4">
              {scoreItems.map((item) => (
                <div key={item.label} className="flex items-center space-x-3 p-3 bg-white border-2 border-black retro-shadow">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold">{item.label}</p>
                    <p className="text-black">{item.value}</p>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="mt-6 border-2 border-black bg-white p-4 retro-shadow">
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
    </div>
  );
};

export default ComparisonCard;