export type Complexity = 'Basic' | 'Medium' | 'Intermediate'

export interface Feature {
  id: string
  name: string
  complexity: Complexity
  priceRange: {
    min: number
    max: number
  }
}

