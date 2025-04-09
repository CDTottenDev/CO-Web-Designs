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
    name: "Essentials Plan",
    price: "$99/mo",
    description: "Best for small local businesses or trades looking to get online quickly.",
    features: [
      { text: "5-page custom-coded website", included: true },
      { text: "Mobile & SEO optimized", included: true },
      { text: "Hosting & basic maintenance included", included: true },
      { text: "12-month contract (or $150/mo for 6-months)", included: true },
      { text: "Optional buyout: $1,200", included: true }
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Custom Site Build",
    price: "Starting at $1,500",
    description: "Tailored for brands that want to stand out.",
    features: [
      { text: "Fully custom design & interactivity", included: true },
      { text: "Contact forms, galleries, advanced layout", included: true },
      { text: "Launch in 2–4 weeks", included: true },
      { text: "Free 30-day support post-launch", included: true },
      { text: "Optional maintenance: $75/month", included: true },
      { text: "One-time payment or payment plan", included: true },
      { text: "Project-based pricing", included: true }
    ],
    buttonText: "Request a Quote",
  },
  {
    name: "Full-Service Retainer",
    price: "$250/mo",
    description: "Ongoing updates, feature expansion, and technical peace of mind.",
    features: [
      { text: "All features from the Custom Build", included: true },
      { text: "Monthly content or feature updates", included: true },
      { text: "Priority support", included: true },
      { text: "6-month contract minimum", included: true },
      { text: "Optional buyout: $1,200", included: true }
    ],
    buttonText: "Book a Call"
  }
]

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mx-auto">
      {plans.map((plan) => (
        <PricingCard 
          key={plan.name} 
          plan={plan}
        />
      ))}
    </div>
  )
}