import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Central Oregon Web Designs - Pricing & Features',
  description: 'Explore our flexible pricing plans and customizable features for your web design project.',
  keywords: 'web design, pricing plans, custom features, Central Oregon',
}

export default function PriceBreakdownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <main>{children}</main>
    </div>
  )
}

