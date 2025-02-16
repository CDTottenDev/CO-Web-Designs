import type React from "react"
import FloatingNav from "../components/FloatingNav"
import ComparisonCard from "./components/ComparisonCard"

export default function BeforeAfterPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <FloatingNav />
      <div className="container mx-auto px-4 py-[20vh]">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-2">Central Oregon Web Designs</h1>
          <p className="text-xl text-green-700 dark:text-green-300">Revamping Websites for Better Performance</p>
        </header>
        {/* Mobile Before and After */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <ComparisonCard
              type="before"
              device="mobile"
              imageSrc="/images/before-after/H3-Before-Mobile-2025-02-11.jpg"
              altText="Old website screenshot"
              scores={{
                performance: 75,
                accessibility: 83,
                bestPractices: 100,
                seo: 83
              }}
            />
            <ComparisonCard
              type="after"
              device="mobile"
              imageSrc="/images/before-after/H3-After-Mobile-2025-02-15.jpg"
              altText="New website screenshot"
              scores={{
                performance: 92,
                accessibility: 89,
                bestPractices: 96,
                seo: 100
              }}
            />
          </div>
        </div>
        {/* Desktop Before and After */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <ComparisonCard
              type="before"
              device="desktop"
              imageSrc="/images/before-after/H3-Before-Desktop-2025-02-11.jpg"
              altText="Old website screenshot"
              scores={{
                performance: 93,
                accessibility: 83,
                bestPractices: 100,
                seo: 83
              }}
            />
            <ComparisonCard
              type="after"
              device="desktop"
              imageSrc="/images/before-after/H3-After-Desktop-2025-02-15.jpg"
              altText="New website screenshot"
              scores={{
                performance: 95,
                accessibility: 90,
                bestPractices: 96,
                seo: 100
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">Why Choose Central Oregon Web Designs?</h3>
        <ul className="text-lg text-green-700 dark:text-green-300 space-y-2">
          <li>Expertise in modern web technologies</li>
          <li>Focus on performance and user experience</li>
          <li>Tailored solutions for your business needs</li>
          <li>Commitment to accessibility and best practices</li>
        </ul>
      </div>

      <div className="mt-12 text-center pb-20">
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
        >
          Get Your Website Revamped Today!
        </a>
      </div>
    </main>
  )
}

