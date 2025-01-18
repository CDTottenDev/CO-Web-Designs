import { FeatureKanban } from '@/app/pricebreakdown/components/FeatureKanban'
import PricingColumns from '@/app/pricebreakdown/components/PricingColumns'
import { Footer } from '../components/footer'

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
          "Integration of client-provided media"
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
    description: "Ideal for growing businesses requiring more advanced features and customization.",
    price: "$5,000 - $10,000",
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
          "Stock photo selection and integration"
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
          "60 days of post-launch support",
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
    <div className="min-h-screen bg-gradient-to-r from-emerald-400 to-teal-400">
      <section id="pricing" className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Pricing & Features</h2>
          <p className="text-xl text-center text-gray-600 mb-16">We have a flexible pricing plan that allows you to choose the features you need.</p>
          <PricingColumns plans={pricingPlans} />
        </div>
      </section>
      
      <section id="feature-board" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Customize Your Features</h2>
          <FeatureKanban />
        </div>
      </section>

      <Footer />
    </div>
  )
}

