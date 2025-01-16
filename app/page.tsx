import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home',
}

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="h-screen w-full relative">
      {/* Left Column */}
      <div className="absolute left-0 w-1/2 h-full">
        <div className="absolute top-0 left-0 w-full h-[calc(50vh-15vh)]
         bg-[#DDA15E] flex flex-col items-center justify-center">
          <img 
            src="/assets/icon-about-us-black.svg"
            alt="About Us Icon"
            className="w-28 h-28"
          />
          <span className="text-sm p-2">About</span>
        </div>

        <div className="absolute top-[calc(50vh-15vh)] left-0 w-full h-[calc(25vh)]
         bg-[#EFE9C5] flex flex-col items-center justify-center">
          <img 
            src="/assets/icon-contact-black.svg"
            alt="Contact Me Icon"
            className="w-28 h-28"
          />
          <span className="text-sm p-2">Contact Us</span>
        </div>

        <div className="absolute top-[calc(50vh+10vh)] left-0 w-full bottom-0
         bg-[#606C38]/[0.77]  flex flex-col items-center justify-center">
          <img 
            src="/assets/icon-price-black.svg"
            alt="Price Icon"
            className="w-28 h-28"
          />
          <span className="text-sm p-2">Price's</span>
        </div>
      </div>

      {/* Right Column */}
      <div className="absolute right-0 w-1/2 h-full">
        <div className="absolute top-0 right-0 w-full h-[50vh] bg-[#BC6C25]/[0.89]
         flex flex-col items-center justify-center">
          <img 
            src="/assets/icon-services-black.svg"
            alt="Services Icon"
            className="w-48 h-48"
          />
          <span className="text-sm p-2">Service's</span>
        </div>

        <div className="absolute top-[50vh] right-0 w-full h-[calc((50vh/3)*2)]
         bg-[#283618]/[0.69] flex flex-col items-center justify-center">
          <img 
            src="/assets/icon-blog-black.svg"
            alt="Blog Icon"
            className="w-24 h-24"
          />
          <span className="text-sm p-2">Blog</span>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-[calc(50vh/3)]
        bg-[#C3CA93]/[0.90] flex flex-col items-center justify-center">
          <span className="text-sm p-2">Misc.</span>
        </div>
      </div>
    </div>
  )
}