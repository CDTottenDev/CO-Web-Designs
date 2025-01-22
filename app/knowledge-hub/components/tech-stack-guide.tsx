import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const TechStackGuide = () => {
  const techStacks = [
    {
      name: "MERN Stack",
      description: "MongoDB, Express.js, React, Node.js",
      bestFor: "Full-stack JavaScript applications with dynamic content",
      features: ["JavaScript everywhere", "NoSQL database", "Real-time capabilities"],
    },
    {
      name: "JAMstack",
      description: "JavaScript, APIs, Markup",
      bestFor: "Fast, secure static sites with dynamic capabilities",
      features: ["Pre-rendered content", "CDN distribution", "Serverless functions"],
    },
    {
      name: "LAMP Stack",
      description: "Linux, Apache, MySQL, PHP",
      bestFor: "Traditional server-side web applications",
      features: ["Open-source", "Reliable and mature", "Large community support"],
    },
    {
      name: "Next.js + Vercel",
      description: "React framework with serverless deployment",
      bestFor: "Fast, SEO-friendly React applications",
      features: ["Server-side rendering", "Static site generation", "Automatic code splitting"],
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Tech Stacks for Web Development</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStacks.map((stack, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{stack.name}</CardTitle>
              <CardDescription className="text-lg">{stack.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium mb-2">Best for: {stack.bestFor}</p>
              <ul className="list-disc list-inside">
                {stack.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TechStackGuide

