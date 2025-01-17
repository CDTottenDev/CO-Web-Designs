import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design | Your Site Name',
  description: 'Web design',
}

export default function WebDesignLayout({
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