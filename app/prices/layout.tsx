import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans | Central Oregon Web Designs',
  description: 'Choose your perfect web design plan. We offer fixed price and monthly subscription options to fit your business needs.',
  openGraph: {
    title: 'Pricing Plans | Central Oregon Web Designs',
    description: 'Choose your perfect web design plan. We offer fixed price and monthly subscription options to fit your business needs.',
    images: [{ url: '/og-pricing.jpg', width: 1200, height: 630, alt: 'Pricing Plans' }],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-50 dark:from-emerald-900 dark:via-green-800 dark:to-emerald-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {children}
    </section>
  )
}

