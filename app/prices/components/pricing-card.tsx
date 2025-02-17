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
    <div className="relative group">
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-40 rounded-full bg-primary/10 px-4 py-1 text-sm text-primary text-center transform -translate-y-1/2 flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span>Most Popular</span>
        </div>
      )}
      <Card 
        className={`h-full relative backdrop-blur-lg transition-all duration-300 ${
          isHovered ? 'scale-105' : ''
        } ${
          plan.popular 
            ? 'bg-card/80 border-primary/30' 
            : 'bg-card/80 border-border'
        } hover:border-primary/30`}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">
            {plan.name}
          </CardTitle>
          <CardDescription className="mt-2 text-muted-foreground">
            {plan.description}
          </CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold text-primary">
              {plan.price}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {plan.features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-3 text-foreground transition-transform duration-200 hover:translate-x-2"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full group/cta">
            <Link 
              href="/pricebreakdown"
              className={`w-full block p-4 rounded-lg border-2 transition-all duration-300 overflow-hidden relative
                ${plan.popular ? 'border-primary' : 'border-secondary'}
                bg-primary/5 hover:bg-primary/10`}
            >
              <div className="relative z-10 flex items-center justify-center space-x-3">
                <Package className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-secondary'}`} />
                <span className="font-bold text-foreground">PACKAGE DETAILS</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 
                  ${isCTAHovered ? 'translate-x-2' : ''} 
                  ${plan.popular ? 'text-primary' : 'text-secondary'}`} 
                />
              </div>
            </Link>
          </div>
          
          <Link href="/contact">
            <Button 
              className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                isHovered 
                  ? 'bg-primary shadow-lg shadow-primary/50 text-primary-foreground' 
                  : 'bg-primary/90 text-primary-foreground'
              }`}
            >
              {plan.buttonText}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

