import { PricingCards } from '@/app/prices/components/pricing-cards'

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
          Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Flexible Pricing Arrangements
          <br />
          Making sure your business
          <br />
          is moving forward
        </p>
      </div>
      <PricingCards />
    </div>
  )
}

