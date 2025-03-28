import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from 'next-themes'
import { NavigationEvents } from './components/NavigationEvents'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Central Oregon Web Designs',
  description: 'Central Oregon Web Designs is a web design and development company that specializes in creating beautiful, responsive websites for small-to-medium businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Central Oregon Web Designs",
              // Add other schema properties as needed
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationEvents />
          <main className="min-h-screen">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}