import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import './styles/flip.css'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}