import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { BlogPost } from '../types/blog'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="aspect-video relative">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title || 'Blog post image'}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded-full text-sm mb-2">
            {post.category}
          </span>
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {post.readingTime}
          </div>
        </div>
      </div>
    </Link>
  )
} 