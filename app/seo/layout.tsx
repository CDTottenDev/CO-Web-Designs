import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO | Your Site Name',
  description: 'SEO',
}

export default function SEOLayout({
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