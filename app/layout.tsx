import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from 'next-themes'
import './styles/flip.css'
import { Header } from './components/header'
import { NavigationEvents } from './components/NavigationEvents'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your site description',
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
              "name": "Your Website Name",
              // Add other schema properties as needed
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationEvents />
          <Header />
          <main className="min-h-screen">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:p-4"
            >
              Skip to main content
            </a>
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}