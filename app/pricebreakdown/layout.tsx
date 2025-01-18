import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans - Your Company Name',
  description: 'Compare our fixed cost plans, guarantees, and monthly pricing options to find the perfect solution for your needs.',
  keywords: 'pricing plans, fixed cost, monthly subscription, service guarantees',
}

export default function PriceBreakdownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}

