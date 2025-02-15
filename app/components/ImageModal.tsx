'use client'

import Image from "next/image"
import { useState } from "react"

export function ImageModal({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className="relative w-full h-48 mb-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full h-full max-w-6xl">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </>
  )
} 