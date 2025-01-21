'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

interface CollapsibleSectionProps {
  title: string
  description: string
  children: React.ReactNode
  index: number
}

export default function CollapsibleSection({ title, description, children, index }: CollapsibleSectionProps) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const centerPosition = entry.boundingClientRect.top + (entry.boundingClientRect.height / 2)
          const viewportCenter = window.innerHeight / 2
          const distanceFromCenter = Math.abs(centerPosition - viewportCenter)
          
          if (distanceFromCenter < 200) {
            setIsExpanded(true)
            controls.start({ height: 'auto', opacity: 1 })
          } else {
            setIsExpanded(false)
            controls.start({ height: '0px', opacity: 0 })
          }
        })
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [controls])

  return (
    <div ref={containerRef} className="relative mb-12 last:mb-0">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ${
              isExpanded ? 'mb-4' : 'mb-0'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={controls}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">{description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      {children}
    </div>
  )
}

