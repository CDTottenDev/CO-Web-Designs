import React from 'react'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="w-full sm:w-64">
      <label htmlFor="search-features" className="sr-only">Search features</label>
      <input
        id="search-features"
        type="text"
        placeholder="Search features..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
  )
}

