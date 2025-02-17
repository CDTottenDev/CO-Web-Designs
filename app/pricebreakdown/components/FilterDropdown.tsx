import React from 'react'
import { Complexity } from '@/app/pricebreakdown/types/feature'

interface FilterDropdownProps {
  filterComplexity: Complexity | 'All'
  setFilterComplexity: (complexity: Complexity | 'All') => void
}

export function FilterDropdown({ filterComplexity, setFilterComplexity }: FilterDropdownProps) {
  return (
    <div className="w-full">
      <label htmlFor="filter-complexity" className="sr-only">Filter by complexity</label>
      <select
        id="filter-complexity"
        value={filterComplexity}
        onChange={(e) => setFilterComplexity(e.target.value as Complexity | 'All')}
        className="w-full px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm md:text-base"
      >
        <option value="All">All Complexities</option>
        <option value="Basic">Basic</option>
        <option value="Medium">Medium</option>
        <option value="Intermediate">Intermediate</option>
      </select>
    </div>
  )
}

