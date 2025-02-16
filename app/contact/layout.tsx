import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import FloatingNav from '@/app/components/FloatingNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Contact Us | Retro Web Designs',
  description: 'Get in touch with Retro Web Designs for your next project. We create stunning, accessible, and performant websites with a unique retro flair.',
  keywords: 'web design, retro, contact, pastel, accessibility, performance',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={inter.className}>
      <FloatingNav />
      {children}
    </section>
  )
}

