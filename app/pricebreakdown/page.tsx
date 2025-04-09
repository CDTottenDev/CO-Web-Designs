import PricingColumns from '@/app/pricebreakdown/components/PricingColumns'
import FloatingNav from '@/app/components/FloatingNav'

const pricingPlans = [
  {
    name: "Essentials Plan",
    description: "Perfect for small local businesses or trades looking to get online fast with a clean, custom-coded website and ongoing support.",
    price: "$99/mo (12-month contract) or $150/mo (6-month contract)",
    features: [
      {
        category: "Design & Development",
        items: [
          "5-page custom-coded layout",
          "Mobile-first, responsive design",
          "Clean, modern user interface"
        ]
      },
      {
        category: "Content & Media",
        items: [
          "You provide text & images; we format them professionally",
          "Basic image optimization for performance"
        ]
      },
      {
        category: "Functionality",
        items: [
          "Contact form integration",
          "Basic on-page SEO setup",
          "Fast loading times and smooth navigation"
        ]
      },
      {
        category: "Support & Maintenance",
        items: [
          "Hosting included",
          "Monthly maintenance & core updates",
          "SSL certificate & security monitoring",
          "Optional buyout: $1,200"
        ]
      }
    ]
  },
  {
    name: "Custom Site Build",
    description: "For brands that want a unique, tailored site with advanced features and interactive design. Ideal for businesses ready to make a strong visual impact.",
    price: "Starting at $1,500 (one-time payment or payment plan available)",
    features: [
      {
        category: "Design & Development",
        items: [
          "Fully custom design & user experience",
          "Advanced layout with motion/interactivity",
          "Tailored branding elements (fonts, colors, icons)"
        ]
      },
      {
        category: "Content & Media",
        items: [
          "Content guidance and layout support",
          "Custom media galleries, testimonials, or team pages",
          "Image compression & loading optimization"
        ]
      },
      {
        category: "Functionality",
        items: [
          "Interactive components (forms, sliders, tabs)",
          "Third-party integrations (e.g., Google Maps, Calendars)",
          "On-page SEO setup"
        ]
      },
      {
        category: "Support & Maintenance",
        items: [
          "30 days of post-launch support included",
          "Optional maintenance: $75/month",
        ]
      }
    ]
  },
  {
    name: "Full-Service Retainer",
    description: "For businesses that want an expert in their corner long-term — whether for updates, upgrades, or new feature rollouts.",
    price: "$250/mo (6-month minimum)",
    features: [
      {
        category: "Design & Development",
        items: [
          "All features from the Custom Site Build",
          "New pages or redesigns added over time",
          "Refinements to layout and style as your brand evolves"
        ]
      },
      {
        category: "Content & Media",
        items: [
          "Monthly content updates (text, images, promotions)",
          "Seasonal graphics or landing page creation",
          "Media management and optimization"
        ]
      },
      {
        category: "Functionality",
        items: [
          "Feature rollouts (booking, e-commerce, etc.)",
          "Priority bug fixes and enhancements",
          "Third-party tool integration (email marketing, analytics)"
        ]
      },
      {
        category: "Support & Maintenance",
        items: [
          "Priority technical support",
          "Ongoing performance monitoring",
          "Hosting included",
          "Optional buyout: $1,200"
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
            <div className="absolute -top-10 -left-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black hidden md:block">
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