import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Management Services |  C.D. Totten - Web Developer",
  description:
    "Professional website management services including content updates, security monitoring, performance optimization, and technical maintenance. Choose from monthly plans or fixed-cost options.",
  keywords:
    "website management, website maintenance, content updates, security monitoring, SEO optimization, Central Florida, United States",
  openGraph: {
    title: "Website Management Services | C.D. Totten - Web Developer",
    description:
      "Professional website management services including content updates, security monitoring, performance optimization, and technical maintenance.",
    type: "website",
    url: "https://centralorgeonwebdesigns.com/website-management",
  },
}

export default function WebsiteManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">{children}</div>
}

