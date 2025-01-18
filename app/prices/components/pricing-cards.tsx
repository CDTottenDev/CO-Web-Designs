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
    name: "Fixed Price Plan",
    price: "Starting at $2,000",
    description: "Perfect for small to medium sized projects with clear requirements",
    buttonText: "Get Started",
    features: [
      { text: "Custom Website Development", included: true },
      { text: "Mobile Responsive Design", included: true },
      { text: "SEO Optimization", included: true },
      { text: "5 Pages Included", included: true },
      { text: "2 Rounds of Revisions", included: true },
      { text: "Content Management System", included: true },
      { text: "3 Months Support", included: true },
      { text: "Performance Optimization", included: true },
    ]
  },
  {
    name: "Monthly",
    price: "$999/month",
    description: "Ideal for growing businesses needing continuous development",
    buttonText: "Subscribe Now",
    popular: true,
    features: [
      { text: "Unlimited Development Hours", included: true },
      { text: "Dedicated Development Team", included: true },
      { text: "Priority Support", included: true },
      { text: "Weekly Progress Updates", included: true },
      { text: "Continuous Integration", included: true },
      { text: "24/7 Emergency Support", included: true },
      { text: "Monthly Strategy Meetings", included: true },
      { text: "Custom Feature Development", included: true },
    ]
  }
]

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  )
}

