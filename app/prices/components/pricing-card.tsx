'use client'

import React from 'react'
import { Check, Sparkles, ArrowRight, Package } from 'lucide-react'
import Link from 'next/link'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  price: string
  description: string
  features: PricingFeature[]
  buttonText: string
  popular?: boolean
}

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="relative">
      {plan.popular && (
        <div className="absolute -top-5 -right-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black">
          <span className="font-bold flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Most Popular
          </span>
        </div>
      )}
      
      <div className={`h-full border-2 border-black retro-shadow bg-white ${
        plan.popular ? 'border-black' : 'border-black'
      }`}>
        <div className="p-6 border-b-2 border-black">
          <h3 className="text-2xl font-bold">
            {plan.name}
          </h3>
          <p className="mt-2 text-gray-600">
            {plan.description}
          </p>
          <div className="mt-4">
            <span className="text-4xl font-bold">
              {plan.price}
            </span>
          </div>
        </div>
        
        <div className="p-6 pt-6">
          <ul className="space-y-4">
            {plan.features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-start space-x-3"
              >
                <Check className="h-5 w-5 mt-1 text-black flex-shrink-0" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 pt-0 flex flex-col space-y-4">
          <Link 
            href="/pricebreakdown"
            className="w-full bg-orange-200 text-black px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center"
          >
            <div className="flex items-center justify-center">
              <Package className="w-5 h-5 mr-2" />
              <span>PACKAGE DETAILS</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </Link>
          
          <Link href="/contact">
            <button className={`w-full bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center ${
              plan.popular ? 'bg-black' : 'bg-black'
            }`}>
              {plan.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}