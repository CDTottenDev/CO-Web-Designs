import BlogPostCard from './components/BlogPostCard'
import BlogSidebar from './components/BlogSidebar'
import { getAllPosts } from './lib/posts'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/50 via-white to-red-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

