"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { useRouter } from 'next/navigation'

import { BlogSidebar } from "@/app/blog/components/blog-sidebar"
import { BlogPostCard } from "@/app/blog/components/blog-post-card"
import { Button } from "@/app/blog/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/blog/components/ui/sheet"
import { searchBlogPosts } from "@/app/blog/utils/search"
import type { BlogPost, Category } from "@/app/blog/types/blog"
import RetroBackground from "@/app/components/RetroBackground"
import FloatingNav from "@/app/components/FloatingNav"

const Posts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Web Design Trends for 2025",
    excerpt: "Discover the latest web design trends that will dominate the digital landscape in 2025...",
    date: "2025-02-10",
    category: "Design Trends",
    slug: "web-design-trends-2025",
    readingTime: "5 min read",
    image:
      "https://sjc.microlink.io/xxZYhrUwwPvw21Z3fygaUH1G1sAd953Ul92Rfjp-JadMNtLsBNz4HZUCKdHr950BSykME0INZD31ef_XeG08_w.jpeg",
  },
  // Add more posts...
]

// Function to calculate category counts
const calculateCategoryCounts = (posts: BlogPost[]) => {
  const categoryCounts: { [key: string]: number } = {}
  
  posts.forEach(post => {
    if (categoryCounts[post.category]) {
      categoryCounts[post.category]++
    } else {
      categoryCounts[post.category] = 1
    }
  })

  return Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count
  }))
}

// Use the function to generate categories
const sampleCategories = calculateCategoryCounts(Posts)

export default function BlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredPosts = searchBlogPosts(Posts, searchQuery)


  return (
    <RetroBackground>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 dark:from-gray-900 via-white dark:via-gray-950 to-gray-50 dark:to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Sidebar with Title */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden mb-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Menu className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-white dark:bg-gray-800">
                <SheetTitle className="px-4 py-2 text-gray-900 dark:text-gray-100">Blog Navigation</SheetTitle>
                <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} />
              </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} className="hidden md:block" />

            {/* Main Content */}
            <main className="flex-1 pt-[15vh]">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Web Design Blog</h1>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 text-gray-600 dark:text-gray-400">No posts found matching your search.</div>
              )}
            </main>
          </div>
        </div>
      </div>
      <FloatingNav />
    </RetroBackground>
  )
}

