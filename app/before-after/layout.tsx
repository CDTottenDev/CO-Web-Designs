import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Before & After Website Transformations | Central Oregon Web Designs',
  description: 'See real website transformations and performance improvements. We specialize in revamping websites for better speed, accessibility, and SEO.',
  keywords: ['website before after', 'website performance', 'website redesign', 'web optimization', 'lighthouse scores'],
  openGraph: {
    title: 'Website Transformations | Central Oregon Web Designs',
    description: 'See our website redesign results with improved performance, accessibility, and SEO scores',
    images: [
      {
        url: '/og-before-after.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Before and After Transformations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Transformations | Central Oregon Web Designs',
    description: 'See our website redesign results with improved performance, accessibility, and SEO scores',
    images: ['/og-before-after.jpg'],
  },
  alternates: {
    canonical: 'https://centraloregonwebdesigns.com/before-after',
  },
}

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Before & After Website Transformations",
              "description": "Showcase of website redesign projects with performance improvements",
              "url": "https://centraloregonwebdesigns.com/before-after",
              "image": "https://centraloregonwebdesigns.com/og-before-after.jpg",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Website Performance Improvements",
                    "description": "Before and after website performance scores"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Accessibility Enhancements",
                    "description": "Accessibility improvements in website redesigns"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "SEO Optimization",
                    "description": "SEO improvements in website redesigns"
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  )
}
