import Link from 'next/link'
import ServiceCard from './components/ServiceCard'

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
    title: "Custom CMS Development",
    description: "Need a content management system? We'll create a custom-built CMS tailored specifically to your website. This add-on gives you full control to update content, manage media, and make changes without needing a developer.",
    icon: "📝"
  },
  {
    title: "SEO Optimization",
    description: "It's not just about looking good—it's about being found. Every website we build is optimized for on-page SEO and guaranteed to achieve a 98-100 performance score.",
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
    <div className="min-h-screen p-8 bg-gradient-to-b from-amber-50 to-orange-100">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-orange-600 text-stroke">Our Web Design Services</h1>
        <p className="text-xl text-orange-500">At Central Oregon Web Designs, we're all about making websites that work as hard as you do.</p>
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
        <section className="mt-16 bg-orange-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-orange-700">Why Choose Central Oregon Web Designs?</h2>
          <ul className="list-disc list-inside text-orange-800">
            <li>Collaborative Approach: We work closely with you to understand your goals and vision.</li>
            <li>Transparency: No tech jargon or hidden fees. Just clear communication every step of the way.</li>
            <li>Tailored Solutions: Every business is unique, and so is every website we build.</li>
            <li>Hassle-Free Process: You tell us what you need; we take care of the rest.</li>
          </ul>
        </section>
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">Ready to Get Started?</h2>
          <p className="text-xl text-orange-500 mb-8">Building a website doesn't have to be complicated or stressful. Let's chat about your project and see how we can make your vision a reality.</p>
          <Link href="/contact" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors">
            Schedule Your Free Consultation
          </Link>
        </section>
      </main>
      <footer className="mt-16 text-center text-orange-500">
        <p>© 2023 Central Oregon Web Designs. All rights reserved.</p>
      </footer>
    </div>
  )
}

