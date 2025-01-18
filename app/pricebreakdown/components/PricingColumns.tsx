'use client'

import React from 'react'

interface PricingProps {
  plans: {
    fixedCost: string;
    guarantees: string[];
    monthlyPrice: string;
  }[];
}

const PricingColumns = ({ plans = [{
  fixedCost: "Basic Plan",
  guarantees: ["24/7 Support", "Basic Features", "Email Support"],
  monthlyPrice: "$29/month"
}] }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <section className="grid md:grid-cols-3 gap-8" aria-label="pricing plans">
        {/* Fixed Cost Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
            Fixed Cost Plan
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              {plans[0].fixedCost}
            </p>
          </div>
        </div>

        {/* What's Guaranteed Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
            What's Guaranteed
          </h2>
          <ul className="space-y-4">
            {plans[0].guarantees.map((guarantee, index) => (
              <li 
                key={index}
                className="flex items-center text-gray-600"
              >
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {guarantee}
              </li>
            ))}
          </ul>
        </div>

        {/* Monthly Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
            Monthly
          </h2>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-gray-800">
              {plans[0].monthlyPrice}
            </p>
            <p className="text-gray-600">
              Billed monthly
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingColumns