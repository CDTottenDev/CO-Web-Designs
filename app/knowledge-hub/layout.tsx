import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Hub | Your Site Name',
  description: 'Knowledge Hub',
}

export default function KnowledgeHubLayout({
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