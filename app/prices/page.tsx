import { PricingCards } from '@/app/prices/components/pricing-cards'
import FloatingNav from '@/app/components/FloatingNav'

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <FloatingNav />
      <div className="text-center mb-16 pt-[15vw]">
        <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
          Pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          <span className="font-semibold text-gray-800 dark:text-gray-100">Flexible Pricing Arrangements</span>
          <br />
          <span className="text-gray-500 dark:text-gray-400">Making sure your business</span>
          <br />
          <span className="text-gray-500 dark:text-gray-400">is moving forward</span>
        </p>
      </div>
      <PricingCards />
    </div>
  )
}

