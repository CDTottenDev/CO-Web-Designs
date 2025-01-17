import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Management Services | Your Site Name',
  description: 'Management services',
}

export default function ManagementServicesLayout({
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