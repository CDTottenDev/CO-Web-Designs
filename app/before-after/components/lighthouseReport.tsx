import React from "react";

interface LighthouseScoreProps {
  score: number;
  label: string;
  color: string;
}

export const LighthouseScore = React.memo(({ score, label, color }: LighthouseScoreProps) => {
  const getScoreElement = (score: number, color: string) => {
    let bgColor;
    
    switch (color) {
      case "red":
        bgColor = "bg-red-500";
        break;
      case "orange":
        bgColor = "bg-yellow-500";
        break;
      case "yellow":
        bgColor = "bg-yellow-300";
        break;
      case "green":
        bgColor = "bg-green-500";
        break;
      default:
        bgColor = "bg-gray-500";
    }
    
    return (
      <div className={`w-16 h-16 ${bgColor} border-2 border-black text-white flex items-center justify-center relative retro-shadow`}>
        <span className="text-xl font-bold">{score}</span>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-black font-bold border-b-2 border-black px-2">{label}</span>
      <div className="flex items-center">
        {getScoreElement(score, color)}
      </div>
    </div>
  );
});

LighthouseScore.displayName = "LighthouseScore";