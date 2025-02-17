import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/app/blog/types/blog'
import RetroBackground from '@/app/components/RetroBackground'
import ArticleRenderer from '@/app/blog/components/ui/ArticleRenderer'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.md`)
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      id: data.id || '',
      title: data.title,
      excerpt: data.excerpt || '',
      date: data.date,
      category: data.category,
      slug: slug,
      readingTime: data.readingTime,
      image: data.image,
      content: content
    }
  } catch (error) {
    return null
  }
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <RetroBackground>
      <div className="min-h-screen bg-gradient-to-br from-red-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4 py-8">
          <ArticleRenderer 
            title={post.title}
            content={post.content || ''}
            readingTime={post.readingTime}
          />
        </div>
      </div>
    </RetroBackground>
  )
} 