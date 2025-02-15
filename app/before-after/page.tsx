import type React from "react"
import Image from "next/image"
import { LighthouseScore } from "./components/lighthouseReport"
import FloatingNav from "../components/FloatingNav"

export default function BeforeAfterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <FloatingNav />
      <div className="container mx-auto px-4 py-[15vh]">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Central Oregon Web Designs</h1>
          <p className="text-xl text-green-700">Revamping Websites for Better Performance</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center text-red-700 mb-4">Before</h2>
            <div className="relative h-48 mb-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Old website screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <LighthouseScore score={45} label="Performance" color="red" />
            <LighthouseScore score={60} label="Accessibility" color="orange" />
            <LighthouseScore score={50} label="Best Practices" color="yellow" />
            <LighthouseScore score={30} label="SEO" color="red" />
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">After</h2>
            <div className="relative h-48 mb-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="New website screenshot"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <LighthouseScore score={95} label="Performance" color="green" />
            <LighthouseScore score={98} label="Accessibility" color="green" />
            <LighthouseScore score={100} label="Best Practices" color="green" />
            <LighthouseScore score={95} label="SEO" color="green" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Central Oregon Web Designs?</h3>
          <ul className="text-lg text-green-700 space-y-2">
            <li>Expertise in modern web technologies</li>
            <li>Focus on performance and user experience</li>
            <li>Tailored solutions for your business needs</li>
            <li>Commitment to accessibility and best practices</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
          >
            Get Your Website Revamped Today!
          </a>
        </div>
      </div>

      {/* Abstract design elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-200 opacity-20 transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-200 opacity-20 transform skew-x-12"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-200 opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-200 opacity-20 rounded-full"></div>
      </div>
    </div>
  )
}

