import React from 'react'

interface TotalPriceProps {
  totalPrice: {
    min: number
    max: number
  }
}

export function TotalPrice({ totalPrice }: TotalPriceProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h3 className="text-xl font-semibold mb-2">Total Price Range</h3>
      <p className="text-2xl font-bold text-blue-600">
        ${totalPrice.min.toLocaleString()} - ${totalPrice.max.toLocaleString()}
      </p>
    </div>
  )
}

