import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Health Checker | Your Site Name',
  description: 'Website health checker',
}

export default function HealthCheckerLayout({
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