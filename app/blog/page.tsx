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

// Sample data - replace with your actual data fetching logic
const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Web Design Trends for 2025",
    excerpt: "Discover the latest web design trends that will dominate the digital landscape in 2025...",
    date: "2024-01-19",
    category: "Design Trends",
    readingTime: "5 min read",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIyMCIgZmlsbD0iIzFFMUUyRSIvPgogIDxyZWN0IHg9IjIwIiB5PSI1MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyMDAiIHJ4PSIxNSIgZmlsbD0iIzJFMkUzRSIgc3Ryb2tlPSIjMDBENDNGIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjgwIiByPSIxNSIgZmlsbD0iIzAwRDQzRiIvPgogIDxyZWN0IHg9IjgwIiB5PSI3MCIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjgiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjEzMCIgcj0iMTAiIGZpbGw9IiNGRkQ3MDAiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjciLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjE3MCIgcj0iMTAiIGZpbGw9IiNGRjZCNkIiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTYwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjciLz4KICA8cmVjdCB4PSI1MCIgeT0iMjIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzAwRDQzRiIvPgogIDx0ZXh0IHg9IjUwIiB5PSIyNTAiIGZpbGw9IiNGRkYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiPjEwIEVzc2VudGlhbCBXZWIgRGVzaWduIFRyZW5kcyBmb3IgMjAyNTwvdGV4dD4KPC9zdmc+",
  },
  // Add more sample posts...
]

const sampleCategories: Category[] = [
  { name: "Design Trends", count: 12 },
  { name: "UI/UX", count: 8 },
  { name: "Development", count: 15 },
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
      <FloatingNav />
      <div className="min-h-screen pt-[15vw] bg-gradient-to-br from-[#cccccc]-50 via-white to-red-200/30 dark:from-red-900/30 dark:via-neutral-950/60 dark:to-red-900/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Sidebar with Title */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden mb-4 bg-white hover:bg-red-50 dark:bg-neutral-800 dark:hover:bg-red-900/20">
                  <Menu className="h-5 w-5 text-neutral-900 dark:text-neutral-100" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-white dark:bg-neutral-900 border-r border-red-100 dark:border-red-900/20">
                <SheetTitle className="px-4 py-2 text-neutral-900 dark:text-neutral-100 bg-red-50/30 dark:bg-red-900/10">Blog Navigation</SheetTitle>
                <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} />
              </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} className="hidden md:block" />

            {/* Main Content */}
            <main className="flex-1">
              <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
                Web Design Blog
                <span className="text-red-600 dark:text-red-400">.</span>
              </h1>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {samplePosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 text-neutral-600 dark:text-neutral-400">
                  No posts found matching your search.
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </RetroBackground>
  )
}

