import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About | Colt Totten | Web Developer | C.D. Totten - Web Developer',
  description: 'About page description',
}

export default function AboutLayout({
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
