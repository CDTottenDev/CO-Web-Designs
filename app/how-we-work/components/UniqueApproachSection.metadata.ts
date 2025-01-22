import type { Metadata } from "next"

export const uniqueApproachMetadata: Metadata = {
  title: "Why Choose Central Oregon Web Designs | Custom Web Solutions",
  description:
    "Discover how Central Oregon Web Designs stands out with 25+ years of diverse experience, offering custom-tailored websites that outperform cookie-cutter solutions.",
  openGraph: {
    title: "Central Oregon Web Designs - Custom Web Solutions",
    description:
      "Expert web design combining 25+ years of practical experience with cutting-edge development skills. Get a website that truly represents your business.",
    images: [
      {
        url: "/images/unique-approach-og.jpg",
        width: 1200,
        height: 630,
        alt: "Central Oregon Web Designs - Unique Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Central Oregon Web Designs for Your Website",
    description: "Custom web solutions from experienced developers. Stand out from the crowd with a tailored website.",
    images: ["/images/unique-approach-twitter.jpg"],
  },
}

