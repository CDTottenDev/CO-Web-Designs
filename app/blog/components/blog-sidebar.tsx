"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Input } from "@/app/blog/components/ui/input"
import { Button } from "@/app/blog/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/blog/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/blog/components/ui/accordion"
import type { Category } from "@/app/blog/types/blog"

interface BlogSidebarProps {
  categories: Category[]
  onSearch: (query: string) => void
  className?: string
}

export function BlogSidebar({ categories, onSearch, className }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <aside
      className={`
      w-full md:w-64 md:flex-shrink-0 
      bg-gradient-to-b from-red-50 to-white dark:from-red-950 dark:to-gray-900
      border-r border-red-100 dark:border-red-900
      ${className}
    `}
    >
      <div className="sticky top-0 p-4 space-y-6">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="search"
            placeholder="Search posts..."
            className="pl-9 bg-white/50 backdrop-blur-sm border-red-200 focus-visible:ring-red-200 dark:bg-gray-800/50 dark:border-red-800 dark:focus-visible:ring-red-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-red-400 dark:text-red-600" />
        </form>

        <Accordion type="single" collapsible defaultValue="categories">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-red-900 hover:text-red-700 dark:text-red-200 dark:hover:text-red-400">Categories</AccordionTrigger>
            <AccordionContent>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    className="w-full justify-start text-red-700 hover:text-red-900 hover:bg-red-50 dark:text-red-300 dark:hover:text-red-100 dark:hover:bg-red-900/50"
                    onClick={() => onSearch(category.name)}
                  >
                    {category.name}
                    <span className="ml-auto text-sm text-red-400 dark:text-red-600">{category.count}</span>
                  </Button>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  )
}

