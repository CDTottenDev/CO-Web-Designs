import type { Metadata } from "next"
import WebDesignContent from "./components/WebDesignContent"
import FloatingNav from "@/app/components/FloatingNav"

export const metadata: Metadata = {
  title: "Web Design in 2025 | Central Oregon Web Design",
  description:
    "Discover why your local business needs a website in 2025. Central Oregon Web Design creates professional, user-friendly websites that attract and convert customers.",
  keywords: "web design, Central Oregon, local business, SEO, 2025, website development",
}

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-pastel-yellow dark:bg-zinc-900 font-retro">
      <WebDesignContent />
      <FloatingNav />
    </div>
  )
}

