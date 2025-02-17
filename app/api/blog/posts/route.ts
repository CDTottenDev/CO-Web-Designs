import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map(fileName => {
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)

    return {
      id: data.id || '',
      title: data.title,
      excerpt: data.excerpt || '',
      date: data.date,
      category: data.category,
      slug: fileName.replace(/\.md$/, ''),
      readingTime: data.readingTime,
      image: data.image
    }
  })

  return NextResponse.json(posts)
} 