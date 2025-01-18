'use client'

import React, { useState } from 'react'
import { Check, Sparkles, ArrowRight, Package } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/prices/components/ui/card'
import { Button } from '@/app/prices/components/ui/button'
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
  const [isHovered, setIsHovered] = useState(false)
  const [isCTAHovered, setIsCTAHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-40 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-4 py-1 text-sm text-emerald-900 text-center transform -translate-y-1/2 flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span>Most Popular</span>
        </div>
      )}
      <Card 
        className={`h-full relative backdrop-blur-lg transition-all duration-300 ${
          isHovered ? 'scale-105' : ''
        } ${
          plan.popular 
            ? 'bg-white/10 border-emerald-400/50' 
            : 'bg-white/5 border-emerald-800'
        } hover:border-emerald-400/50`}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-emerald-50">
            {plan.name}
          </CardTitle>
          <CardDescription className="mt-2 text-emerald-200">
            {plan.description}
          </CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              {plan.price}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {plan.features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-3 text-emerald-100 transition-transform duration-200 hover:translate-x-2"
              >
                <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div 
            className="relative w-full group/cta"
            onMouseEnter={() => setIsCTAHovered(true)}
            onMouseLeave={() => setIsCTAHovered(false)}
          >
            <Link 
              href="/pricebreakdown"
              className={`w-full block p-4 rounded-lg border-2 transition-all duration-300 overflow-hidden relative
                ${plan.popular ? 'border-emerald-400' : 'border-teal-400'}
                bg-gradient-to-r from-emerald-500/10 to-teal-500/10
                hover:from-emerald-500/20 hover:to-teal-500/20`}
            >
              <div className="relative z-10 flex items-center justify-center space-x-3">
                <Package className={`w-5 h-5 ${plan.popular ? 'text-emerald-300' : 'text-teal-300'}`} />
                <span className="font-bold text-emerald-50">PACKAGE DETAILS</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 
                  ${isCTAHovered ? 'translate-x-2' : ''} 
                  ${plan.popular ? 'text-emerald-300' : 'text-teal-300'}`} 
                />
              </div>
              <div className={`absolute inset-0 transform transition-transform duration-500
                ${isCTAHovered ? 'scale-x-100' : 'scale-x-0'}
                ${plan.popular 
                  ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20' 
                  : 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20'}`} 
              />
            </Link>
          </div>
          
          <Button 
            className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
              isHovered 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/50 text-emerald-950' 
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-emerald-950'
            }`}
          >
            {plan.buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

