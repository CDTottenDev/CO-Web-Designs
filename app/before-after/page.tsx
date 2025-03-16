import type React from "react";
import FloatingNav from "../components/FloatingNav";
import ComparisonCard from "./components/ComparisonCard";

export default function BeforeAfterPage() {
  return (
    <div className="retro-theme">
      <main className="bg-gradient-to-b pt-[15vh] from-white to-gray-100 min-h-screen">
        <FloatingNav />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <header className="text-center mb-12">
            <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
              <span className="text-sm">Website Transformations</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Central Oregon <span className="underline decoration-red-500">Web Designs</span>
            </h1>
            <p className="text-lg mb-8">
              Revamping Websites for Better Performance
            </p>
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

        <div className="container mx-auto px-4 mt-12 text-center">
          <div className="bg-white border-2 border-black retro-shadow p-6 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 underline decoration-red-500">
              Why Choose Central Oregon Web Designs?
            </h3>
            <ul className="text-lg space-y-2">
              <li>• Expertise in modern web technologies</li>
              <li>• Focus on performance and user experience</li>
              <li>• Tailored solutions for your business needs</li>
              <li>• Commitment to accessibility and best practices</li>
            </ul>
          </div>

          <div className="mt-12 text-center pb-20">
            <div className="relative inline-block">
              <div className="absolute -top-6 -right-6 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black">
                <span className="price-tag font-bold">Starting at just $150/month!</span>
              </div>
              <a
                href="/contact"
                className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center"
              >
                Get Your Website Revamped Today!
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}