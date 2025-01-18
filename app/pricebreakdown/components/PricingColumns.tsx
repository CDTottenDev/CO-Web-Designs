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
    <div className="space-y-8">
      {plans.map((plan, planIndex) => (
        <div key={planIndex} className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-teal-400">
            <h2 className="text-3xl font-bold text-white mb-2">{plan.name}</h2>
            <p className="text-xl text-white mb-4">{plan.price}</p>
            <p className="text-white opacity-90">{plan.description}</p>
          </div>
          <div className="p-6">
            {plan.features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-6 last:mb-0">
                <button
                  onClick={() => toggleSection(plan.name, category.category)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      expandedSections[`${plan.name}-${category.category}`] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSections[`${plan.name}-${category.category}`] && (
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PricingColumns

