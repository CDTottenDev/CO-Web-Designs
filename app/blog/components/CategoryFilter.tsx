'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { BlogPost } from '../types/blog'

interface CategoryFilterProps {
  categories: string[]
  onCategorySelect: (category: string | null) => void
}

export default function CategoryFilter({ categories, onCategorySelect }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    const newCategory = category === selectedCategory ? null : category
    setSelectedCategory(newCategory)
    onCategorySelect(newCategory)
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-600">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
} 