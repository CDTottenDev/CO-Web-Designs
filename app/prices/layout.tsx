import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans | C.D. Totten - Web Developer',
  description: 'Choose your perfect web design plan. We offer fixed price and monthly subscription options to fit your business needs.',
  openGraph: {
    title: 'Pricing Plans | C.D. Totten - Web Developer',
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
    <section>
      {children}
    </section>
  )
}

