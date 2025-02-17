export interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    category: string
    slug: string
    readingTime: string
    image: string
    content?: string
}
  
export interface Category {
    name: string
    slug: string
    count: number
}
  
  