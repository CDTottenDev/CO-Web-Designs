import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const BusinessNeedsExplorer = () => {
  const businessTypes = [
    {
      type: "Small Business",
      needs: [
        { title: "Cost-Effective Solutions", description: "Affordable website builders or simple custom designs" },
        { title: "Easy Maintenance", description: "User-friendly CMS for content updates" },
        { title: "Local SEO", description: "Optimized for local search results" },
      ],
    },
    {
      type: "E-commerce",
      needs: [
        { title: "Secure Payments", description: "Integration with trusted payment gateways" },
        { title: "Product Management", description: "Efficient inventory and catalog systems" },
        { title: "Mobile Responsiveness", description: "Seamless shopping experience on all devices" },
      ],
    },
    {
      type: "Startup",
      needs: [
        { title: "Scalability", description: "Infrastructure that can grow with your business" },
        { title: "Fast Time-to-Market", description: "Rapid development and deployment" },
        { title: "Analytics Integration", description: "Data-driven decision making tools" },
      ],
    },
    {
      type: "Enterprise",
      needs: [
        { title: "Custom Solutions", description: "Tailored applications for specific business processes" },
        { title: "Integration Capabilities", description: "Seamless connection with existing systems" },
        { title: "Advanced Security", description: "Robust protection for sensitive data" },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Web Development Needs by Business Type</h2>
      <Tabs defaultValue={businessTypes[0].type}>
        <TabsList className="justify-center bg-zinc-100 dark:bg-gray-800">
          {businessTypes.map((business) => (
            <TabsTrigger key={business.type} value={business.type}>
              {business.type}
            </TabsTrigger>
          ))}
        </TabsList>
        {businessTypes.map((business) => (
          <TabsContent key={business.type} value={business.type}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-100 dark:bg-gray-800">
              {business.needs.map((need, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{need.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{need.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default BusinessNeedsExplorer

