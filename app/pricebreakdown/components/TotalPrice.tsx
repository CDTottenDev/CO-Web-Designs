import React from 'react'

interface TotalPriceProps {
  totalPrice: {
    min: number
    max: number
  }
}

export function TotalPrice({ totalPrice }: TotalPriceProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        Total Price Range
      </h3>
      <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
        ${totalPrice.min.toLocaleString()} - ${totalPrice.max.toLocaleString()}
      </p>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 md:mt-2">
        Final price may vary based on project specifics and chosen features.
      </p>
    </div>
  )
}

