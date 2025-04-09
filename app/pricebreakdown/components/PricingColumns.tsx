'use client'

import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface PricingProps {
  plans: {
    name: string;
    description: string;
    price: string;
    features: {
      category: string;
      items: string[];
    }[];
  }[];
}

const PricingColumns = ({ plans }: PricingProps) => {
  const [expandedSections, setExpandedSections] = React.useState<{[key: string]: boolean}>({})

  const toggleSection = (planName: string, category: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${planName}-${category}`]: !prev[`${planName}-${category}`]
    }))
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {plans.map((plan, planIndex) => (
        <div key={planIndex} className="bg-white border-2 border-black retro-shadow overflow-hidden">
          <div className={`p-4 md:p-6 ${planIndex === 0 ? 'bg-yellow-300' : 'bg-red-500'}`}>
            <div className="relative">
              {planIndex === 0 && (
                <div className="absolute -top-5 -right-5 bg-yellow-300 text-black p-2 z-10 rotate-6 border-2 border-black">
                  <span className="price-tag font-bold">Popular Choice!</span>
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">{plan.name}</h2>
              <p className="text-lg md:text-xl font-bold text-black mb-2 md:mb-4">{plan.price}</p>
              <p className="text-black text-sm md:text-base">{plan.description}</p>
            </div>
          </div>
          <div className="p-4 md:p-6 bg-white">
            {plan.features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-4 md:mb-6 last:mb-0 border-b-2 border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <button
                  onClick={() => toggleSection(plan.name, category.category)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <div className="inline-block bg-gray-100 px-3 py-1 border-2 border-black retro-shadow">
                    <h3 className="text-md md:text-lg font-bold text-black">{category.category}</h3>
                  </div>
                  <div className={`border-2 border-black p-1 ${expandedSections[`${plan.name}-${category.category}`] ? 'bg-black' : 'bg-white'}`}>
                    <ChevronDownIcon
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        expandedSections[`${plan.name}-${category.category}`] ? 'text-white rotate-180' : 'text-black'
                      } transform transition-transform`}
                    />
                  </div>
                </button>
                {expandedSections[`${plan.name}-${category.category}`] && (
                  <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="bg-black text-white w-5 h-5 flex items-center justify-center mr-3 mt-1 font-bold border-2 border-black flex-shrink-0">
                          ✓
                        </div>
                        <span className="text-black text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <a 
              href="/contact" 
              className={`bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center w-full mt-4 ${planIndex === 0 ? 'bg-red-500' : ''}`}
            >
              Get Started
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PricingColumns