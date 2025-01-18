import React from 'react'

interface TotalPriceProps {
  totalPrice: {
    min: number
    max: number
  }
}

export function TotalPrice({ totalPrice }: TotalPriceProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Total Price Range</h3>
      <p className="text-3xl font-bold text-blue-600">
        ${totalPrice.min.toLocaleString()} - ${totalPrice.max.toLocaleString()}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        Final price may vary based on project specifics and chosen features.
      </p>
    </div>
  )
}

