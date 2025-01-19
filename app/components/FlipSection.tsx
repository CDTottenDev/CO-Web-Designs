'use client'

import { useState } from 'react'

export default function FlipSection() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    const containers = document.querySelectorAll('.flip-container')
    containers.forEach(container => {
      container.classList.toggle('flip')
    })
  }

  return (
    <button 
      onClick={handleFlip}
      className="absolute bottom-0 right-0 w-full h-[calc(50vh/3)] rounded-lg 
      bg-[#C3CA93]/[0.90] flex flex-col items-center justify-center
      hover:opacity-90 transition-opacity cursor-pointer"
    >
      <img src="/assets/icon-flip-more-black.svg" alt="More Icon" className="w-28 h-28" />
      <span className="text-sm p-2">More</span>
    </button>
  )
} 