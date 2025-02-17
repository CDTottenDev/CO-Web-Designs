import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts')
  const fileNames = await fs.readdir(postsDirectory)

  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { data } = matter(fileContent)

    return {
      id: slug,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category || 'General',
      readingTime: data.readingTime || '5 min read',
      image: data.image || '/placeholder.svg'
    }
  }))

  return posts
} 