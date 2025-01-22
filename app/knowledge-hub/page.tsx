"use client"

import React, { useState } from "react"
import {
  Search,
  Code,
  Globe,
  ShoppingCart,
  Briefcase,
  Book,
  ChevronRight,
  Layout,
  Users,
  Shield,
  Zap,
  Cloud,
  Smartphone,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusinessNeedsExplorer from "./components/business-needs-explorer"
import TechStackGuide from "./components/tech-stack-guide"

const KnowledgeHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Solutions", icon: Globe },
    { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart },
    { id: "corporate", name: "Corporate", icon: Briefcase },
    { id: "portfolio", name: "Portfolio", icon: Layout },
    { id: "startup", name: "Startup", icon: Zap },
    { id: "saas", name: "SaaS", icon: Cloud },
  ]

  const solutions = [
    {
      category: "ecommerce",
      title: "E-Commerce Solutions",
      description: "Perfect for retail and digital product businesses",
      features: [
        "Secure payment processing",
        "Inventory management",
        "Shopping cart functionality",
        "Product catalogs",
        "Customer accounts",
      ],
      techStack: ["Next.js", "Stripe", "PostgreSQL"],
      color: "bg-emerald-50",
    },
    {
      category: "corporate",
      title: "Corporate Websites",
      description: "Professional web presence for established businesses",
      features: [
        "Content Management System",
        "Team/Department pages",
        "News/Blog section",
        "Career portals",
        "Contact forms",
      ],
      techStack: ["React", "Tailwind CSS", "Headless CMS"],
      color: "bg-blue-50",
    },
    {
      category: "portfolio",
      title: "Portfolio Websites",
      description: "Showcase your work and personal brand",
      features: [
        "Project galleries",
        "About sections",
        "Contact information",
        "Blog capabilities",
        "Social media integration",
      ],
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      color: "bg-purple-50",
    },
    {
      category: "startup",
      title: "Startup Launchpad",
      description: "Fast, scalable solutions for growing businesses",
      features: [
        "Landing pages",
        "User authentication",
        "Analytics integration",
        "A/B testing capabilities",
        "Scalable infrastructure",
      ],
      techStack: ["Next.js", "Vercel", "Firebase"],
      color: "bg-yellow-50",
    },
    {
      category: "saas",
      title: "SaaS Platforms",
      description: "Robust solutions for software-as-a-service businesses",
      features: [
        "User management",
        "Subscription billing",
        "API integrations",
        "Dashboard analytics",
        "Multi-tenancy support",
      ],
      techStack: ["React", "Node.js", "MongoDB"],
      color: "bg-indigo-50",
    },
  ]

  const filteredSolutions =
    selectedCategory === "all" ? solutions : solutions.filter((sol) => sol.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Web Development Knowledge Hub</h1>
          <p className="text-xl opacity-90 mb-8">Discover the perfect web solution for your unique business needs</p>
          <div className="max-w-md mx-auto">
            <Input type="text" placeholder="Search for solutions..." className="bg-white text-gray-900" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="solutions" className="space-y-8">
          <TabsList className="justify-center">
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
            <TabsTrigger value="business-needs">Business Needs</TabsTrigger>
            <TabsTrigger value="tech-stack">Tech Stack Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="solutions">
            {/* Categories */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="flex items-center"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                )
              })}
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <Card
                  key={solution.title}
                  className={`${solution.color} border-none transform transition-all duration-300 hover:scale-105`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{solution.title}</CardTitle>
                    <CardDescription className="text-lg">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <ChevronRight className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business-needs">
            <BusinessNeedsExplorer />
          </TabsContent>

          <TabsContent value="tech-stack">
            <TechStackGuide />
          </TabsContent>
        </Tabs>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Cutting-Edge Tech Stack</CardTitle>
                <CardDescription className="text-lg">
                  We leverage the latest technologies to ensure your website is fast, secure, and future-proof.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">User-Centric Design</CardTitle>
                <CardDescription className="text-lg">
                  We focus on creating intuitive and engaging user experiences that convert visitors into loyal
                  customers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-none transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Shield className="w-12 h-12 text-emerald-600 mb-4" />
                <CardTitle className="text-2xl">Security First Approach</CardTitle>
                <CardDescription className="text-lg">
                  Our solutions come with built-in security features to protect your business and customer data.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Perfect Web Solution?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let's create a website that perfectly fits your business needs and goals.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeHub

