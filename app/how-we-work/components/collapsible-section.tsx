'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CollapsibleSectionProps {
  title: string
  description: string
  children: React.ReactNode
  index: number
}

export default function CollapsibleSection({ title, description, children, index }: CollapsibleSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isEven = index % 2 === 0

  useEffect(() => {
    if (!containerRef.current) return
    
    // Immediately check if element is in viewport on mount
    const isInViewport = containerRef.current.getBoundingClientRect().top < window.innerHeight
    if (isInViewport) {
      setIsVisible(true)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative mb-12 last:mb-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: isEven ? -20 : 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.95,
          x: isVisible ? 0 : (isEven ? -20 : 20)
        }}
        transition={{ 
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut"
        }}
        className={`bg-white/20 rounded-lg shadow-lg p-6 ${isEven ? 'text-left' : 'text-right'}`}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, delay: (index * 0.15) + 0.2 }}
        >
          <p className="text-gray-600">{description}</p>
        </motion.div>
      </motion.div>
      {children}
    </div>
  )
}

