import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { JsonLd } from "react-schemaorg"
import { Organization } from "schema-dts"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.centralorgeonwebdesigns.com"),
  title: {
    default: "Central Oregon Web Designs | Professional Web Development",
    template: "%s | Central Oregon Web Designs",
  },
  description:
    "Expert web design and development services in Central Oregon. We create beautiful, responsive, and SEO-friendly websites tailored to your business needs.",
  keywords: ["web design", "web development", "Central Oregon", "responsive design", "SEO"],
  authors: [{ name: "Central Oregon Web Designs" }],
  creator: "Central Oregon Web Designs",
  publisher: "Central Oregon Web Designs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.centralorgeonwebdesigns.com",
    siteName: "Central Oregon Web Designs",
    images: [
      {
        url: "https://www.centralorgeonwebdesigns.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Central Oregon Web Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CentralORWebDesigns",
    creator: "@CentralORWebDesigns",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <JsonLd<Organization>
          item={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Central Oregon Web Designs",
            url: "https://www.centralorgeonwebdesigns.com",
            logo: "https://www.centralorgeonwebdesigns.com/logo.png",
            sameAs: [
              "https://www.facebook.com/CentralOregonWebDesigns",
              "https://twitter.com/CentralORWebDesigns",
              "https://www.linkedin.com/company/central-oregon-web-designs",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-541-555-1234",
              contactType: "customer service",
            },
          }}
        />
        <header>{/* Add your header component here */}</header>
        <main>{children}</main>
        <footer>{/* Add your footer component here */}</footer>
      </body>
    </html>
  )
}


