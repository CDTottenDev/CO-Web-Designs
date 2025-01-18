'use client'

import React, { useState, useMemo } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { SearchBar } from '@/app/pricebreakdown/components/SearchBar'
import { FilterDropdown } from '@/app/pricebreakdown/components/FilterDropdown'
import { TotalPrice } from '@/app/pricebreakdown/components/TotalPrice'
import { Feature, Complexity } from '@/app/pricebreakdown/types/feature'
import { TrashIcon } from '@heroicons/react/24/outline'

const initialFeatures: Feature[] = [
  { id: '1', name: 'Responsive Design', complexity: 'Basic', priceRange: { min: 500, max: 1500 } },
  { id: '2', name: 'Contact Form', complexity: 'Basic', priceRange: { min: 100, max: 300 } },
  { id: '3', name: 'Social Media Integration', complexity: 'Basic', priceRange: { min: 200, max: 500 } },
  { id: '4', name: 'Basic SEO Optimization', complexity: 'Basic', priceRange: { min: 300, max: 800 } },
  { id: '5', name: 'Content Management System (CMS) Integration', complexity: 'Medium', priceRange: { min: 1000, max: 3000 } },
  { id: '6', name: 'E-commerce Functionality', complexity: 'Medium', priceRange: { min: 1500, max: 5000 } },
  { id: '7', name: 'Custom Animation and Transitions', complexity: 'Medium', priceRange: { min: 800, max: 2500 } },
  { id: '8', name: 'Blog Section', complexity: 'Medium', priceRange: { min: 500, max: 1500 } },
  { id: '9', name: 'User Authentication System', complexity: 'Intermediate', priceRange: { min: 1500, max: 4000 } },
  { id: '10', name: 'Portfolio Showcase with Filtering', complexity: 'Intermediate', priceRange: { min: 1000, max: 3000 } },
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

  const totalPrice = useMemo(() => {
    const minTotal = features.reduce((sum, feature) => sum + feature.priceRange.min, 0)
    const maxTotal = features.reduce((sum, feature) => sum + feature.priceRange.max, 0)
    return { min: minTotal, max: maxTotal }
  }, [features])

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown filterComplexity={filterComplexity} setFilterComplexity={setFilterComplexity} />
      </div>
      
      <TotalPrice totalPrice={totalPrice} />
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complexityOrder.map((complexity) => (
            <Droppable key={complexity} droppableId={complexity}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{complexity}</h3>
                  {filteredFeatures
                    .filter(feature => feature.complexity === complexity)
                    .map((feature, index) => (
                      <Draggable key={feature.id} draggableId={feature.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-50 p-4 mb-3 rounded-lg shadow-sm relative hover:shadow-md transition duration-300"
                          >
                            <h4 className="font-medium text-gray-800">{feature.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              ${feature.priceRange.min} - ${feature.priceRange.max}
                            </p>
                            <button
                              onClick={() => deleteFeature(feature.id)}
                              className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-300"
                              aria-label={`Delete ${feature.name}`}
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

