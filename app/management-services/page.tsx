'use client'

import {
  Briefcase,
  Shield,
  Search,
  BarChartIcon as ChartBar,
  Server,
  HeadphonesIcon,
} from "lucide-react"
import { Button } from "@/app/management-services/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/management-services/components/card"
import FloatingNav from "@/app/components/FloatingNav"



export default function WebsiteManagementPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Content Management",
      description:
        "Regular updates to your website content including blog posts, product information, and image galleries",
      items: ["Blog post updates", "Product descriptions", "Content editing", "Image management"],
    },
    {
      icon: Shield,
      title: "Technical Maintenance",
      description: "Keeping your website secure and performing optimally with regular updates and monitoring",
      items: ["Software updates", "Security patches", "Bug fixes", "Responsive design"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Basic SEO services to help improve your website's visibility in search results",
      items: ["Keyword optimization", "Meta descriptions", "Internal linking", "Search Console monitoring"],
    },
    {
      icon: ChartBar,
      title: "Analytics Reporting",
      description: "Regular reports on your website's performance and user engagement",
      items: ["Traffic analysis", "Conversion tracking", "User behavior", "Monthly reports"],
    },
    {
      icon: Server,
      title: "Hosting Management",
      description: "Complete management of your website's hosting environment",
      items: ["Domain renewal", "Server monitoring", "Regular backups", "Performance optimization"],
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Responsive support for all your website-related questions and needs",
      items: ["Technical support", "Content assistance", "Quick response time", "Expert guidance"],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-16 bg-zinc-300/75 dark:bg-zinc-900/95">
      {/* Hero Section */}
      <section className="text-center mb-20 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-black to-blue-600 dark:bg-gradient-to-l dark:from-white dark:to-blue-400 text-transparent bg-clip-text mb-6">
          Website Management Services
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Keep your website running smoothly with our comprehensive management services.
        </p>
      </section>

      {/* Plans Section */}
      <section className="mb-20">
        <div className="flex justify-center">
          <Card className="transform hover:scale-105 transition-transform duration-300 max-w-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white">Monthly Plan</CardTitle>
              <span className="text-sm text-gray-500 dark:text-gray-400">Starting at $150/month</span>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-cyan-600 dark:bg-cyan-300 rounded-full" />
                  Continuous website monitoring & updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-cyan-600 dark:bg-cyan-300 rounded-full" />
                  SEO & Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-cyan-600 dark:bg-cyan-300 rounded-full" />
                  Analytics reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-cyan-600 dark:bg-cyan-300 rounded-full" />
                  Hosted & Managed
                </li>
              </ul>
              <Button className="mt-6 w-full bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black"
              onClick={() => {
                window.location.href = '/contact'
              }}
              >
                Get Started with the Monthly Subscription
              </Button>
            </CardContent>
          </Card>

          {/* <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">Fixed Cost Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />
                  Initial 2-month management period
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />
                  Basic setup & optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />
                  Optional service extensions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />À la carte services available
                </li>
              </ul>
              <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700">Learn About Fixed Cost Options</Button>
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Comprehensive Management Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transform hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <service.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="h-1.5 w-1.5 bg-red-600 dark:bg-red-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-sky-50 to-blue-100 dark:from-sky-900/50 dark:to-blue-900/50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Ready to Keep Your Website in Perfect Shape?</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Choose the plan that works best for you and let us handle the technical details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
          onClick={() => {
            window.location.href = '/contact'
          }}
          >
            Schedule a Consultation
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
          onClick={() => {
            window.location.href = '/services'
          }}
          >
            View Detailed Service List
          </Button>
        </div>
      </section>
      <FloatingNav />
    </main>
  )
}

