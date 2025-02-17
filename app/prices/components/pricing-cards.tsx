import { PricingCard } from './pricing-card'

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

const plans: PricingPlan[] = [
  {
    name: "Fixed Price",
    price: "Starting at $2,000",
    description: "Fixed price for a fixed scope of work",
    buttonText: "Get Started",
    features: [
      { text: "Custom Design & Development", included: true },
      { text: "Mobile First Design", included: true },
      { text: "SEO Optimization", included: true },
      { text: "5 Pages (Any) then $100 Per Page", included: true },
      { text: "50$/Month Unlimited Edits", included: true },
      { text: "25$/Month Hosting", included: true },
      { text: "Performance Promise of 98-100 Lighthouse Score", included: true },
    ]
  },
  {
    name: "Monthly Plan",
    price: "$150/month",
    description: "Economicaly flexible to make sure your business is moving forward",
    buttonText: "Subscribe Now",
    popular: true,
    features: [
      { text: "Custom Design & Development", included: true },
      { text: "Includes Hosting", included: true },
      { text: "Unlimited Edits", included: true },
      { text: "24/7 Support", included: true },
      { text: "Lifetime Updates", included: true },
      { text: "Analytics", included: true },
      { text: "Google Business Profile Integration/Improvement", included: true },
      { text: "Performance Promise of 90-100 Lighthouse Score", included: true },
      { text: "À la carte services available", included: true },
    ]
  }
]

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <PricingCard 
          key={plan.name} 
          plan={plan}
        />
      ))}
    </div>
  )
}

