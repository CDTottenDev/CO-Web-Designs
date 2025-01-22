import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SEO Services | Boost Your Online Presence',
  description: 'Learn how our expert SEO services can improve your website visibility, drive more traffic, and increase conversions. Understand SEO in simple terms.',
  keywords: 'SEO, search engine optimization, website ranking, digital marketing, online visibility',
  openGraph: {
    title: 'SEO Services | Boost Your Online Presence',
    description: 'Learn how our expert SEO services can improve your website visibility, drive more traffic, and increase conversions.',
    type: 'website',
  }
}

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-teal-50">
      {children}
    </div>
  )
}