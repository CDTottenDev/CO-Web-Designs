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
      className="fixed bottom-0 right-0 w-full h-[calc(50vh/3)] border-2 border-black
      bg-[#e2eba7] dark:bg-[#b5bd82] flex flex-col items-center justify-center
      hover:scale-100 md:hover:scale-110 transition-transform cursor-pointer overflow-hidden z-10
      md:right-[50%] md:translate-x-[50%] md:w-[calc(50vh/3)]"
    >
      <img 
        src="/assets/icon-flip-more-black.svg" 
        alt="More Icon" 
        className="w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] max-w-24 max-h-24" 
      />
      <span className="text-sm">More</span>
    </button>
  )
} 