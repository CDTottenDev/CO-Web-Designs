import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { JsonLd } from "react-schemaorg"
import { Organization } from "schema-dts"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.centralorgeonwebdesigns.com"),
  title: {
    default: "C.D. Totten - Web Developer | Professional Web Development",
    template: "%s | C.D. Totten - Web Developer",
  },
  description:
    "Expert web design and development services in Central Florida. We create beautiful, responsive, and SEO-friendly websites tailored to your business needs.",
  keywords: ["web design", "web development", "Central Florida", "responsive design", "SEO"],
  authors: [{ name: "C.D. Totten - Web Developer" }],
  creator: "C.D. Totten - Web Developer",
  publisher: "C.D. Totten - Web Developer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.centralorgeonwebdesigns.com",
    siteName: "C.D. Totten - Web Developer",
    images: [
      {
        url: "https://www.centralorgeonwebdesigns.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "C.D. Totten - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CDTotten",
    creator: "@CDTotten",
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

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={inter.className}>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "C.D. Totten - Web Developer",
          url: "https://www.centralorgeonwebdesigns.com",
          logo: "https://www.centralorgeonwebdesigns.com/logo.png",
          sameAs: [
            "https://www.facebook.com/C.D. Totten - Web Developer",
            "https://twitter.com/CDTotten",
            "https://www.linkedin.com/company/cd-totten",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "#",
            contactType: "customer service",
          },
        }}
      />
      {children}
    </section>
  )
}


