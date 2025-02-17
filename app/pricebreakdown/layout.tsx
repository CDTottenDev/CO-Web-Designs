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
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 via-teal-50 to-green-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 px-4 sm:px-0">
      <main>{children}</main>
    </div>
  )
}

