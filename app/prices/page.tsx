import { PricingCards } from '@/app/prices/components/pricing-cards'
import FloatingNav from '@/app/components/FloatingNav'

export default function PricingPage() {
  return (
    <>
    <FloatingNav />
    <section className="py-16 pt-[15vh] bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
            <span className="text-sm">Our pricing plans</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            <span className="underline decoration-red-500">Pricing</span>
          </h1>
          
          <p className="text-xl">
            <span className="font-semibold">Flexible Pricing Arrangements</span>
            <br />
            <span>Making sure your business</span>
            <br />
            <span>is moving forward</span>
          </p>
        </div>
        
        <PricingCards />
      </div>
    </section>
    </>
  )
}