'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientChart } from './components/ClientChart'
import FloatingNav from '@/app/components/FloatingNav'

// Updated data format
const trafficData = [
  { month: 'Jan', withSEO: 1000, withoutSEO: 500 },
  { month: 'Feb', withSEO: 2500, withoutSEO: 600 },
  { month: 'Mar', withSEO: 4000, withoutSEO: 700 },
  { month: 'Apr', withSEO: 6500, withoutSEO: 800 },
  { month: 'May', withSEO: 8000, withoutSEO: 850 },
  { month: 'Jun', withSEO: 10000, withoutSEO: 900 },
  { month: 'Jul', withSEO: 13000, withoutSEO: 950 },
  { month: 'Aug', withSEO: 15000, withoutSEO: 1000 },
  { month: 'Sep', withSEO: 18000, withoutSEO: 1100 },
  { month: 'Oct', withSEO: 22000, withoutSEO: 1200 },
  { month: 'Nov', withSEO: 25000, withoutSEO: 1300 },
  { month: 'Dec', withSEO: 30000, withoutSEO: 1400 }
]

export default function SEOPage() {
  const router = useRouter()

  useEffect(() => {
    // Enable browser back button navigation
    window.history.pushState({}, '')
  }, [])

  return (
    <div className="container mx-auto py-36 px-4 dark:bg-zinc-900">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-white">
          Understanding SEO: Your Path to Online Success
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-white/80">
          Discover how Search Engine Optimization can transform your website into a powerful tool for reaching more customers.
        </p>
      </section>

      {/* Key Benefits Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground dark:text-white">More Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">When your website ranks higher in search results, more people can find your business naturally, without paying for ads.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-foreground dark:text-white">Better Quality Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">People searching for exactly what you offer are more likely to become customers. SEO helps you connect with these ideal customers.</p>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground dark:text-white">Long-Term Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Unlike paid advertising, SEO continues working for you 24/7, building your online presence over time with lasting results.</p>
          </CardContent>
        </Card>
      </section>

      {/* Traffic Growth Chart */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Website Traffic Growth Over Time</CardTitle>
            <p className="text-sm text-muted-foreground">
              Comparing monthly website visitors with and without SEO optimization
            </p>
          </CardHeader>
          <CardContent>
            <ClientChart data={trafficData} />
          </CardContent>
        </Card>
      </section>

      {/* How SEO Works Section */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">How SEO Works - In Simple Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold dark:text-white">1. Making Your Website Search-Friendly</h3>
              <p className="text-muted-foreground">We ensure your website is easy for search engines like Google to read and understand. Think of it like organizing a library - when everything is well-organized, people can find what they're looking for quickly.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold dark:text-white">2. Creating Valuable Content</h3>
              <p className="text-muted-foreground">We help you create content that answers your customers' questions. When people find your content helpful, search engines notice and show your website to more people.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold dark:text-white">3. Building Authority</h3>
              <p className="text-muted-foreground">When other trusted websites link to yours, it's like getting recommendations from respected experts. This helps search engines trust your website more.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card>
          <CardContent className="py-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Grow Your Online Presence?</h2>
            <p className="text-xl text-muted-foreground mb-6">Let's work together to improve your website's visibility and attract more customers.</p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Your Free SEO Analysis
            </button>
          </CardContent>
        </Card>
      </section>
      <FloatingNav />
    </div>
  )
}