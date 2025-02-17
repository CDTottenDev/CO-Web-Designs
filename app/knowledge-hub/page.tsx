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
import FloatingNav from "@/app/components/FloatingNav"

const KnowledgeHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Solutions", icon: Globe, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
    { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart, color: "bg-gradient-to-r from-emerald-500 to-teal-500" },
    { id: "corporate", name: "Corporate", icon: Briefcase, color: "bg-gradient-to-r from-slate-500 to-gray-500" },
    { id: "portfolio", name: "Portfolio", icon: Layout, color: "bg-gradient-to-r from-purple-500 to-fuchsia-500" },
    { id: "startup", name: "Startup", icon: Zap, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { id: "saas", name: "SaaS", icon: Cloud, color: "bg-gradient-to-r from-sky-500 to-cyan-500" },
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
      color: "dark:bg-emerald-900/20 bg-emerald-50",
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
      color: "dark:bg-blue-900/20 bg-blue-50",
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
      color: "dark:bg-purple-900/20 bg-purple-50",
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
      color: "dark:bg-yellow-900/20 bg-yellow-50",
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
      color: "dark:bg-indigo-900/20 bg-indigo-50",
    },
  ]

  const filteredSolutions =
    selectedCategory === "all" ? solutions : solutions.filter((sol) => sol.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zinc-900/20 dark:from-zinc-900 to-green-950 dark:to-green-950/50 text-white py-24">
        <div className="container mx-auto px-4 pt-24 text-center">
          <h1 className="text-5xl font-bold mb-6">Web Development Knowledge Hub</h1>
          <p className="text-xl opacity-90 mb-8">Discover the perfect web solution for your unique business needs</p>
          <div className="max-w-md mx-auto">
            <Input 
              type="text" 
              placeholder="Search for solutions..." 
              className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100" 
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="solutions" className="space-y-8">
          <TabsList className="justify-center bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="solutions" className="data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900">
              Solutions
            </TabsTrigger>
            <TabsTrigger value="business-needs" className="data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900">
              Business Needs
            </TabsTrigger>
            <TabsTrigger value="tech-stack" className="data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900">
              Tech Stack Guide
            </TabsTrigger>
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
                    className={`flex items-center ${
                      selectedCategory === category.id ? category.color : "bg-white dark:bg-gray-800 dark:text-white"
                    }`}
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
                  className={`${solution.color} border border-gray-200 dark:border-gray-800 transform transition-all duration-300 hover:scale-105`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-lg text-gray-800 dark:text-gray-200">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                              <ChevronRight className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg text-gray-800 dark:text-gray-200">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
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
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Why Choose Our Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-gray-200 dark:border-gray-800 transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Cutting-Edge Tech Stack</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                  We leverage the latest technologies to ensure your website is fast, secure, and future-proof.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-none transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">User-Centric Design</CardTitle>
                <CardDescription className="text-lg">
                  We focus on creating intuitive and engaging user experiences that convert visitors into loyal
                  customers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-none transform transition-all duration-300 hover:scale-105">
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
      <div className="bg-gradient-to-r from-zinc-900/20 dark:from-zinc-900 to-green-950 dark:to-green-950/50 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Perfect Web Solution?</h2>
          <p className="text-xl opacity-90 mb-8 text-zinc-950 dark:text-zinc-50">
            Let's create a website that perfectly fits your business needs and goals.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Get Started Now
          </Button>
        </div>
      </div>
      <FloatingNav />
    </div>
  )
}

export default KnowledgeHub

