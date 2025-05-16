import Link from 'next/link'
import ServiceCard from './components/ServiceCard'
import FloatingNav from '../components/FloatingNav'

const services = [
  {
    title: "Front-End Development",
    description: "We design websites that look great and feel even better. From layouts that catch the eye to user-friendly navigation, we'll make sure your visitors stay engaged.",
    icon: "🎨",
    details: [
      "Custom layouts tailored to your brand",
      "Intuitive and modern user interfaces",
      "Mobile-first designs for accessibility"
    ]
  },
  {
    title: "Back-End Development",
    description: "Every website needs a strong foundation. We handle the complex stuff so you don't have to, ensuring your site runs smoothly and reliably.",
    icon: "⚙️",
    details: [
      "Server-side logic and database integration",
      "Secure and scalable solutions",
      "Custom functionality to meet unique needs"
    ]
  },
  {
    title: "Responsive Design",
    description: "Your website will look fantastic on any screen size, from desktop monitors to smartphones. No more pinching, zooming, or awkward layouts—just seamless viewing for your audience.",
    icon: "📱"
  },
  {
    title: "Custom Web Applications",
    description: "Got a big idea? Let's bring it to life. From booking systems to interactive tools, we build custom web applications that solve problems and create opportunities.",
    icon: "💻"
  },
  {
    title: "E-Commerce Integration",
    description: "Turn your website into a revenue machine with our e-commerce solutions. We make it easy for your customers to browse, shop, and checkout—all while you manage your store effortlessly.",
    icon: "🛒",
    details: [
      "Product catalog and inventory management",
      "Secure payment gateway integration",
      "Shopping cart functionality"
    ]
  },
  {
    title: "CMS (Content Management System)",
    description: "Need a content management system? This add-on gives you full control to update content, manage media, and make changes without needing a developer for the basic features.",
    icon: "📝"
  },
  {
    title: "SEO Optimization",
    description: "It's not just about looking good—it's about being found. Every website we build is optimized for on-page SEO/Local SEO and guaranteed to achieve a 98-100 Google Search Console score.",
    icon: "🔍",
    details: [
      "Blazing-fast load times",
      "Mobile optimization and structured data",
      "Keyword implementation and meta tags"
    ]
  },
  {
    title: "Maintenance & Support",
    description: "Once your site is live, we won't leave you hanging. From updates to bug fixes, we'll make sure your site stays in top shape.",
    icon: "🔧",
    details: [
      "Regular updates and security checks",
      "Performance monitoring",
      "Quick turnaround for support requests"
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen p-8 pt-[15vh] bg-gradient-to-b from-white to-gray-100">
      <header className="mb-12 text-center">
        <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
          <span className="text-sm">Services that deliver results</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Web Design <span className="underline decoration-red-500">Services</span>
        </h1>
        <p className="text-lg mb-8">
          At C.D. Totten - Web Developer, we're all about making websites that work as hard as you do.
        </p>
      </header>
      
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
            />
          ))}
        </div>
        
        <section className="mt-16 relative">
          <div className="absolute -top-5 -left-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black">
            <span className="price-tag font-bold">Why us?</span>
          </div>
          <div className="bg-white border-2 border-black retro-shadow p-8 relative z-0">
            <h2 className="text-3xl font-bold mb-4">Why Choose <span className="underline decoration-red-500">C.D. Totten - Web Developer</span>?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-black text-white w-5 h-5 flex items-center justify-center mr-3 mt-1 font-bold border-2 border-black flex-shrink-0">
                  ✓
                </div>
                <span>Collaborative Approach: We work closely with you to understand your goals and vision.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-black text-white w-5 h-5 flex items-center justify-center mr-3 mt-1 font-bold border-2 border-black flex-shrink-0">
                  ✓
                </div>
                <span>Transparency: No tech jargon or hidden fees. Just clear communication every step of the way.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-black text-white w-5 h-5 flex items-center justify-center mr-3 mt-1 font-bold border-2 border-black flex-shrink-0">
                  ✓
                </div>
                <span>Tailored Solutions: Every business is unique, and so is every website we build.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-black text-white w-5 h-5 flex items-center justify-center mr-3 mt-1 font-bold border-2 border-black flex-shrink-0">
                  ✓
                </div>
                <span>Hassle-Free Process: You tell us what you need; we take care of the rest.</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mt-16 text-center">
          <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
            <span className="text-sm">Ready to get started?</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Let's <span className="underline decoration-red-500">Build</span> Together
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Building a website doesn't have to be complicated or stressful. Let's chat about your project and see how we can make your vision a reality.
          </p>
          <Link href="/contact" className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center">
            Schedule Your Free Consultation
          </Link>
        </section>
      </main>
      
      <footer className="mt-16 text-center border-t-2 border-black pt-8">
        <p>© 2025 C.D. Totten - Web Developer. All rights reserved.</p>
      </footer>
      <FloatingNav />
    </div>
  )
}