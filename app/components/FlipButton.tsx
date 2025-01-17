'use client'

import { useState } from 'react'

interface FlipButtonProps {
  onFlip: (isFlipped: boolean) => void
}

export default function FlipButton({ onFlip }: FlipButtonProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    onFlip(!isFlipped)
  }

  return (
    <button 
      onClick={handleClick}
      className="absolute bottom-0 right-0 w-full h-[calc(50vh/3)]
      bg-[#C3CA93]/[0.90] flex flex-col items-center justify-center
      hover:opacity-90 transition-opacity cursor-pointer"
    >
      <span className="text-sm p-2">Misc.</span>
    </button>
  )
} 