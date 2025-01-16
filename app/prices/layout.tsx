import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prices | Your Site Name',
  description: 'Prices will be displayed here',
}

export default function PricesLayout({
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
