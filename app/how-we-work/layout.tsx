import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Work | Your Site Name',
  description: 'How We Work',
}

export default function HowWeWorkLayout({
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