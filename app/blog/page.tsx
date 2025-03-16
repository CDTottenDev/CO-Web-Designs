"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { useRouter } from 'next/navigation'
import Link from "next/link"

import { BlogSidebar } from "@/app/blog/components/blog-sidebar"
import { Button } from "@/app/blog/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/blog/components/ui/sheet"
import { searchBlogPosts } from "@/app/blog/utils/search"
import { getAllBlogPosts, getCategories } from "@/app/blog/utils/blog-data"
import type { BlogPost, Category } from "@/app/blog/types/blog"
import FloatingNav from "@/app/components/FloatingNav"

// Get data from our utility functions
const samplePosts = getAllBlogPosts();
const sampleCategories = getCategories();

// Custom Blog Post Card with retro styling
const RetroBlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="border-2 border-black retro-shadow bg-white hover:translate-y-[-5px] transition-transform duration-300">
      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-yellow-300 px-3 py-1 z-10 rotate-3 border-2 border-black">
          <span className="text-xs font-bold">{post.category}</span>
        </div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-40 object-cover border-b-2 border-black" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-sm mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs">{post.date}</span>
          <Link href={`/blog/${post.slug}`}>
            <div className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-black retro-btn">
              Read More
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const filteredPosts = searchBlogPosts(samplePosts, searchQuery)

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="bg-gradient-to-b pt-[15vh] from-white to-gray-100 min-h-screen">
      <FloatingNav />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Sidebar with Title */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden mb-4 bg-white border-2 border-black retro-btn">
                <Menu className="h-5 w-5 mr-2" />
                <span>Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 bg-white border-r-2 border-black">
              <SheetTitle className="px-4 py-2 bg-yellow-300 border-b-2 border-black">Blog Navigation</SheetTitle>
              <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} />
            </SheetContent>
          </Sheet>

          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-1/4 border-2 border-black bg-white retro-shadow">
            <div className="bg-yellow-300 px-4 py-2 border-b-2 border-black">
              <h2 className="font-bold">Blog Navigation</h2>
            </div>
            <div className="p-4">
              <BlogSidebar categories={sampleCategories} onSearch={setSearchQuery} className="" />
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
              <span className="text-sm">Fresh content weekly</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Web Design Blog<span className="text-red-500">.</span>
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <RetroBlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 border-2 border-black bg-white retro-shadow p-8">
                <div className="bg-red-500 text-white p-2 inline-block rotate-3 border-2 border-black mb-4">
                  <span className="font-bold">No Results!</span>
                </div>
                <p>No posts found matching your search.</p>
              </div>
            )}
            
            <div className="mt-8 flex justify-center">
              <button onClick={handleBack} className="bg-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center">
                Go Back
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}