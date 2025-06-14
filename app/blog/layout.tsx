import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://centraloregonwebdesigns.com"),
  title: {
    default: "Web Design Blog | Expert Tips & Insights",
    template: "%s | Web Design Blog",
  },
  description:
    "Discover expert web design tips, trends, and insights to help you create stunning and effective websites. Updated weekly with fresh content.",
  keywords: ["web design", "UI/UX", "development tips", "design trends", "web development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://centraloregonwebdesigns.com",
    siteName: "Web Design Blog",
    title: "Web Design Blog | Expert Tips & Insights",
    description:
      "Discover expert web design tips, trends, and insights to help you create stunning and effective websites.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Blog | Expert Tips & Insights",
    description:
      "Discover expert web design tips, trends, and insights to help you create stunning and effective websites.",
    creator: "@yourhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Web Design Blog",
  description: "Expert web design tips, trends, and insights",
  url: "https://centraloregonwebdesigns.com",
  publisher: {
    "@type": "Organization",
    name: "C.D. Totten - Web Developer",
    logo: {
      "@type": "ImageObject",
      url: "https://centraloregonwebdesigns.com/logo.png",
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

