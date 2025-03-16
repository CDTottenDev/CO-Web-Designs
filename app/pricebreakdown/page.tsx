import PricingColumns from '@/app/pricebreakdown/components/PricingColumns'
import FloatingNav from '@/app/components/FloatingNav'

const pricingPlans = [
  {
    name: "Fixed Cost Plan",
    description: "Perfect for any size project. We'll work with you to determine the scope of the project and provide a fixed cost estimate.",
    price: "$2,000",
    features: [
      {
        category: "Design & Development",
        items: [
          "Custom responsive design for mobile and desktop",
          "Up to 5 unique page layouts",
          "Basic SEO optimization",
          "Contact form integration",
          "Google Analytics setup"
        ]
      },
      {
        category: "Content & Media",
        items: [
          "Up to 10 pages of content",
          "Basic image optimization",
          "Integration of client-provided media",
          "Database for CMS"
        ]
      },
      {
        category: "Functionality",
        items: [
          "Simple content management system (CMS)",
          "Social media links",
          "Email newsletter signup form"
        ]
      },
      {
        category: "Support & Maintenance",
        items: [
          "30 days of post-launch support",
          "Basic website training session",
          "Monthly backup service"
        ]
      }
    ]
  },
  {
    name: "Monthly Subscription Plan",
    description: "Starting at $150/month. Flexible billing options available. Total price will vary based on the scope of the project after initial consultation.",
    price: "$150/month",
    features: [
      {
        category: "Design & Development",
        items: [
          "Premium custom responsive design",
          "Up to 10 unique page layouts",
          "Advanced SEO optimization",
          "Custom contact form",
          "Google Analytics and Google Search Console setup"
        ]
      },
      {
        category: "Content & Media",
        items: [
          "Up to 20 pages of content",
          "Advanced image and video optimization",
          "Custom icon design",
          "Custom Graphic Design",
          "Custom Illustrations",
          "Database for CMS"
        ]
      },
      {
        category: "Functionality",
        items: [
          "Advanced content management system",
          "Blog or news section with categories and tags",
          "Social media feed integration",
          "Basic e-commerce functionality (up to 20 products)"
        ]
      },
      {
        category: "Support & Maintenance",
        items: [
          "90 days of post-launch support minimum then continues through the duration of the contract",
          "Comprehensive website training session",
          "Monthly maintenance and security updates",
          "Basic speed optimization"
        ]
      }
    ]
  }
]

export default function PriceBreakdown() {
  return (
    <div className="min-h-screen pt-16 md:pt-24 bg-gradient-to-b from-white to-gray-100">
      <FloatingNav />
      <section id="pricing" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
              <span className="text-sm font-bold">Pricing that makes sense</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose the plan that fits your <span className="underline decoration-red-500">business</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We have a flexible pricing plan that allows you to choose the features you need.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-5 -left-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black hidden md:block">
              <span className="price-tag font-bold">Pick your perfect plan!</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center relative z-0">
              <PricingColumns plans={pricingPlans} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-500 px-3 py-1 mb-6 border-2 border-black retro-shadow">
              <span className="text-sm text-white font-bold">Got questions?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's talk about your <span className="underline decoration-yellow-300">project</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and we'll help you figure out which plan is best for you.
            </p>
            <a href="/contact" className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      <FloatingNav />
    </div>
  )
}