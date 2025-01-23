import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Services | Central Oregon Web Designs',
  description: 'Our web development services',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <nav className="bg-orange-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">Central Oregon Web Designs</Link>
          <ul className="flex space-x-4">
            <li><Link href="/services" className="text-white hover:text-orange-200">Services</Link></li>
            <li><Link href="/contact" className="text-white hover:text-orange-200">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  )
}

