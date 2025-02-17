'use client'

import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { useState } from 'react'
import CategoryFilter from './CategoryFilter'

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    // Implement category filtering logic here
  }

  // Example categories - you should get these from your posts
  const categories = ['Design', 'Development', 'AI', 'Accessibility', 'Trends']

  return (
    <div className="sticky top-0 p-4 space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="search"
          placeholder="Search posts..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      </form>
      
      <CategoryFilter 
        categories={categories} 
        onCategorySelect={handleCategorySelect}
      />
    </div>
  )
}
