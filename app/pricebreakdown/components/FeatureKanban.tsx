'use client'

import React, { useState, useMemo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SearchBar } from '@/app/pricebreakdown/components/SearchBar'
import { FilterDropdown } from '@/app/pricebreakdown/components/FilterDropdown'
import { TotalPrice } from '@/app/pricebreakdown/components/TotalPrice'
import { Feature, Complexity } from '@/app/pricebreakdown/types/feature'
import { TrashIcon } from '@heroicons/react/24/outline'

const initialFeatures: Feature[] = [
  // {basic}
  { id: '1', name: 'Domain Registration (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 25, max: 50 } },
  { id: '2', name: 'Hosting (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 50, max: 100 } },
  { id: '3', name: 'Responsive Design Implementation (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 150, max: 200 } },
  { id: '4', name: 'Contact Form Implementation (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 100, max: 150 } },
  { id: '5', name: 'Basic Search Engine Optimization (SEO) (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 100, max: 150 } },
  { id: '6', name: 'Social Media Integration (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 50, max: 100 } },
  { id: '7', name: 'Google Analytics Setup (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 150, max: 200 } },
  { id: '8', name: 'Basic Website Training (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 100, max: 150 } },
  { id: '9', name: 'Website Maintenance Package (Included in Monthly Plan)', complexity: 'Basic', priceRange: { min: 25, max: 50 } },
  // {medium}
  { id: '10', name: 'Custom Website Design (No Template, Fully Tailored UI/UX)', complexity: 'Medium', priceRange: { min: 1000, max: 1500 } },
  { id: '11', name: 'Ecommerce Integration (Small Store, 25 Products Max)', complexity: 'Medium', priceRange: { min: 700, max: 1000 } },
  { id: '12', name: 'Custom Forms (Advanced Contact Forms, Booking Forms, Surveys, etc.)', complexity: 'Medium', priceRange: { min: 250, max: 500 } },
  { id: '13', name: 'Logo & Branding Package', complexity: 'Medium', priceRange: { min: 250, max: 500 } },
  { id: '14', name: 'Content Management System (CMS) Setup (Next.js CMS, No wordpress type, Custom CMS)', complexity: 'Medium', priceRange: { min: 800, max: 1200 } },
  { id: '15', name: 'Performance Optimization (Speed Boost & Image Optimization)', complexity: 'Medium', priceRange: { min: 250, max: 500 } },
  { id: '16', name: 'SEO Optimization (On-Page & Local SEO Setup)', complexity: 'Medium', priceRange: { min: 500, max: 800 } },
  { id: '17', name: 'Google My Business Setup', complexity: 'Medium', priceRange: { min: 250, max: 400 } },
  { id: '18', name: 'SSL Certificate Setup', complexity: 'Medium', priceRange: { min: 150, max: 200 } },
  { id: '19', name: 'Website Security Package (Firewall, Spam Protection, Anti-malware)', complexity: 'Medium', priceRange: { min: 400, max: 700 } },
  { id: '20', name: 'Blog Setup (including SEO-Friendly Post Templates)', complexity: 'Medium', priceRange: { min: 400, max: 750 } },
  { id: '21', name: 'Basic Membership/Subscription Functionality', complexity: 'Medium', priceRange: { min: 650, max: 1000 } },
  { id: '22', name: 'Social Media Auto-Posting', complexity: 'Medium', priceRange: { min: 400, max: 700 } },
  { id: '23', name: 'Custom 404 & Maintenance Pages', complexity: 'Medium', priceRange: { min: 150, max: 300 } },
  { id: '24', name: 'Basic Automation & Chatbot Integration (Using No-Code Tools)', complexity: 'Medium', priceRange: { min: 500, max: 1000 } },

  // {intermediate}
  { id: '25', name: 'Fully Custom Web Application (Using React/Next.js, No Templates)', complexity: 'Intermediate', priceRange: { min: 2000, max: 5000 } },
  { id: '26', name: 'E-Commerce Store (Unlimited Products, Custom Features, Payment Integration)', complexity: 'Intermediate', priceRange: { min: 2000, max: 4000 } },
  { id: '27', name: 'Custom API Integration (Third-Party Services, CRM, Payment Gateways, etc.)', complexity: 'Intermediate', priceRange: { min: 1000, max: 2500 } },
  { id: '28', name: 'Advanced Membership/Subscription System (Recurring Payments, Content Locking, etc.)', complexity: 'Intermediate', priceRange: { min: 1500, max: 3000 } },
  { id: '29', name: 'Multi-Language Support (i18n Integration for Global Reach)', complexity: 'Intermediate', priceRange: { min: 1200, max: 2500 } },
  { id: '30', name: 'Progressive Web App (PWA) Conversion (Offline Mode, Push Notifications, App-like Experience)', complexity: 'Intermediate', priceRange: { min: 2000, max: 4000 } },
  { id: '31', name: 'Custom Dashboard/Admin Panel for Data Management', complexity: 'Intermediate', priceRange: { min: 2000, max: 4500 } },
  { id: '32', name: 'AI Chatbot or AI-Powered Search (Using OpenAI or Google AI Models)', complexity: 'Intermediate', priceRange: { min: 1500, max: 3500 } },
  { id: '33', name: 'Advanced Security & Penetration Testing', complexity: 'Intermediate', priceRange: { min: 1500, max: 3500 } },
  { id: '34', name: 'Automated Data Backup & Disaster Recovery Plan', complexity: 'Intermediate', priceRange: { min: 800, max: 1500 } },
  { id: '35', name: 'Headless CMS Development (Strapi, Sanity, or Contenful Integration)', complexity: 'Intermediate', priceRange: { min: 2000, max: 4000 } },
  { id: '36', name: 'Live Chat Support System (Real-Time Messaging Integration)', complexity: 'Intermediate', priceRange: { min: 1200, max: 3000 } },
  { id: '37', name: 'Interactive Animation & Micro-Interactions (GSAP, Lottie, WebGL, etc.)', complexity: 'Intermediate', priceRange: { min: 1000, max: 2500 } },
  { id: '38', name: 'Custom Data Visualization (Charts, Graphs, Analytics Dashboard)', complexity: 'Intermediate', priceRange: { min: 1500, max: 3500 } },
  { id: '39', name: 'Complete Business Automation Suite (CRM, Email Funnels, Automated Reports)', complexity: 'Intermediate', priceRange: { min: 3000, max: 6000 } },

  
]

const complexityOrder: Complexity[] = ['Basic', 'Medium', 'Intermediate']

export function FeatureKanban() {
  const [features, setFeatures] = useState(initialFeatures)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterComplexity, setFilterComplexity] = useState<Complexity | 'All'>('All')
  const [columns, setColumns] = useState<{ [key in Complexity]: Feature[] }>({
    Basic: features.filter(f => f.complexity === 'Basic'),
    Medium: features.filter(f => f.complexity === 'Medium'),
    Intermediate: features.filter(f => f.complexity === 'Intermediate'),
  })

  const filteredFeatures = useMemo(() => {
    return features.filter(feature =>
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterComplexity === 'All' || feature.complexity === filterComplexity)
    )
  }, [features, searchTerm, filterComplexity])

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId as Complexity]
      const destColumn = columns[destination.droppableId as Complexity]
      const sourceItems = [...sourceColumn]
      const destItems = [...destColumn]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      })
    } else {
      const column = columns[source.droppableId as Complexity]
      const copiedItems = [...column]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: copiedItems,
      })
    }
  }

  const deleteFeature = (id: string) => {
    const updatedFeatures = features.filter(feature => feature.id !== id)
    setFeatures(updatedFeatures)
    setColumns({
      Basic: updatedFeatures.filter(f => f.complexity === 'Basic'),
      Medium: updatedFeatures.filter(f => f.complexity === 'Medium'),
      Intermediate: updatedFeatures.filter(f => f.complexity === 'Intermediate'),
    })
  }

  const resetFeatures = (complexity: Complexity) => {
    const restoredFeatures = initialFeatures.filter(f => f.complexity === complexity)
    const updatedFeatures = [
      ...features.filter(f => f.complexity !== complexity),
      ...restoredFeatures
    ]
    setFeatures(updatedFeatures)
    setColumns({
      ...columns,
      [complexity]: restoredFeatures
    })
  }

  const totalPrice = useMemo(() => {
    const minTotal = features.reduce((sum, feature) => sum + feature.priceRange.min, 0)
    const maxTotal = features.reduce((sum, feature) => sum + feature.priceRange.max, 0)
    return { min: minTotal, max: maxTotal }
  }, [features])

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
      <div className="mb-4 md:mb-6 flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown filterComplexity={filterComplexity} setFilterComplexity={setFilterComplexity} />
      </div>
      
      <TotalPrice totalPrice={totalPrice} />
      
      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {complexityOrder.map((complexity) => (
            <div key={complexity} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 md:p-4">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">{complexity}</h3>
                <button
                  onClick={() => resetFeatures(complexity)}
                  className="text-xs md:text-sm bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-md transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  Reset
                </button>
              </div>
              {filteredFeatures
                .filter(feature => feature.complexity === complexity)
                .map((feature, index) => (
                  <div
                    key={feature.id}
                    className="bg-gray-50 dark:bg-gray-600 p-3 mb-2 rounded-lg shadow-sm relative hover:shadow-md transition duration-300"
                  >
                    <h4 className="font-medium text-sm md:text-base text-gray-800 dark:text-gray-100">{feature.name}</h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
                      ${feature.priceRange.min} - ${feature.priceRange.max}
                    </p>
                    <button
                      onClick={() => deleteFeature(feature.id)}
                      className="absolute top-1.5 right-1.5 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition duration-300"
                      aria-label={`Delete ${feature.name}`}
                    >
                      <TrashIcon className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </DndProvider>
    </div>
  )
}
