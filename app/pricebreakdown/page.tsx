import { FeatureKanban } from '@/app/pricebreakdown/components/FeatureKanban'
import PricingColumns from '@/app/pricebreakdown/components/PricingColumns'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section id="pricing" className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-green-100 flex-row items-center justify-center text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,207,231,0.1),rgba(164,231,179,0.1))] backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8 mt-24">Our Pricing Plans</h2>
          <PricingColumns plans={[{
            fixedCost: "Professional Plan",
            guarantees: ["24/7 Priority Support", "All Core Features", "Custom Development", "Dedicated Account Manager"],
            monthlyPrice: "$99/month"
          }]} />
        </div>
      </section>

      <section className="w-full h-32 bg-black">
        <div className="w-full h-full opacity-50 backdrop-blur-sm"></div>
      </section>
      
      <section id="feature-board" className="w-full px-4 py-16 bg-gradient-to-br from-green-100 via-teal-50 to-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Kanban Board</h2>
        <FeatureKanban />
      </section>

      <Footer />

    </div>
  )
}

