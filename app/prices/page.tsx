import { PricingCards } from '@/app/prices/components/pricing-cards'

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-emerald-50 mb-6 tracking-tight">
          Choose Your Perfect Plan
        </h1>
        <p className="text-xl text-emerald-100">
          Transforming your vision into reality with our flexible solutions
        </p>
      </div>
      <PricingCards />
    </div>
  )
}

