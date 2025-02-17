import { FeatureKanban } from '@/app/pricebreakdown/components/FeatureKanban'
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
    description: "À la carte pricing, starting at $150/month. Flexible billing options available. Total price will vary based on the scope of the project. -------------------------------Below is a list of everything included in the monthly plan.",
    price: "$150/month",
    features: [
      {
        category: "Design & Development",
        items: [
          "Premium custom responsive design",
          "Up to 10 unique page layouts",
          "Advanced SEO optimization",
          "Custom contact and lead generation forms",
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
    <div className="min-h-screen pt-[25vw] md:pt-[5vw] bg-gradient-to-r from-emerald-400 to-teal-400 dark:from-emerald-700 dark:to-teal-700">
      <section id="pricing" className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-12 text-gray-900 dark:text-gray-100">Pricing & Features</h2>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-8 md:mb-16">We have a flexible pricing plan that allows you to choose the features you need.</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
            <PricingColumns plans={pricingPlans} />
          </div>
        </div>
      </section>
      
      <section id="feature-board" className="py-8 md:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-12 text-gray-900 dark:text-gray-100">Customize Your Features</h2>
          <FeatureKanban />
        </div>
      </section>
      <FloatingNav />
    </div>
  )
}

