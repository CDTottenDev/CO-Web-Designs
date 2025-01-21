"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { BlogSidebar } from "@/app/blog/components/blog-sidebar"
import { BlogPostCard } from "@/app/blog/components/blog-post-card"
import { Button } from "@/app/blog/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/blog/components/ui/sheet"
import { searchBlogPosts } from "@/app/blog/utils/search"
import type { BlogPost, Category } from "@/app/blog/types/blog"
import RetroBackground from "@/app/components/RetroBackground"

// Sample data - replace with your actual data fetching logic
const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Web Design Trends for 2024",
    excerpt: "Discover the latest web design trends that will dominate the digital landscape in 2024...",
    date: "2024-01-19",
    category: "Design Trends",
    slug: "web-design-trends-2024",
    readingTime: "5 min read",
    image:
      "https://sjc.microlink.io/xxZYhrUwwPvw21Z3fygaUH1G1sAd953Ul92Rfjp-JadMNtLsBNz4HZUCKdHr950BSykME0INZD31ef_XeG08_w.jpeg",
  },
  // Add more sample posts...
]

const sampleCategories: Category[] = [
  { name: "Design Trends", slug: "design-trends", count: 12 },
  { name: "UI/UX", slug: "ui-ux", count: 8 },
  { name: "Development", slug: "development", count: 15 },
  // Add more categories...
]

export default function BlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredPosts = searchBlogPosts(samplePosts, searchQuery)

  const handleBack = () => {
    router.back()
  }

  return (
    <RetroBackground>
      <div className="min-h-screen bg-gradient-to-br from-red-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Replace Link with button for proper history navigation */}
            <button 
              onClick={handleBack}
              className="text-red-600 hover:text-red-700 mb-4"
            >
              ← Back
            </button>
            {/* Mobile Sidebar with Title */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden mb-4">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <SheetTitle className="px-4 py-2">Blog Navigation</SheetTitle>
                <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} />
              </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} className="hidden md:block" />

            {/* Main Content */}
            <main className="flex-1">
              <h1 className="text-4xl font-bold text-red-900 mb-8">Web Design Blog</h1>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 text-red-600">No posts found matching your search.</div>
              )}
            </main>
          </div>
        </div>
      </div>
    </RetroBackground>
  )
}

