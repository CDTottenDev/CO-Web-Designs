import Link from 'next/link'
import FlipSection from './components/FlipSection'

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      {/* Left Column */}
      <div className="absolute left-0 w-1/2 h-full perspective-1000">
        <div className="flip-container">
          <div className="flipper">
            {/* Front Content */}
            <div className="front">
              <Link href="/about" className="absolute top-0 left-0 w-full h-[calc(50vh-15vh)]
               bg-[#eeb476] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-about-us-black.svg" alt="About Us Icon" className="w-28 h-28" />
                <span className="text-sm p-2">About</span>
              </Link>

              <Link href="/contact" className="absolute top-[calc(50vh-15vh)] left-0 w-full h-[calc(25vh)]
               bg-[#EFE9C5] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-contact-black.svg" alt="Contact Me Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Contact Us</span>
              </Link>

              <Link href="/prices" className="absolute top-[calc(50vh+10vh)] left-0 w-full bottom-0
               bg-[#93a164] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-price-black.svg" alt="Price Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Price's</span>
              </Link>
            </div>

            {/* Back Content */}
            <div className="back">
              <Link href="/how-we-work" className="absolute top-0 left-0 w-full h-[calc(50vh-15vh)]
               bg-[#e4c2ad] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-back-work-black.svg" alt="How We Work Icon" className="w-28 h-28" />
                <span className="text-sm p-2">How We Work</span>
              </Link>

              <Link href="/management-services" className="absolute top-[calc(50vh-15vh)] left-0 w-full h-[calc(25vh)]
               bg-[#d5caaf] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-back-management-black.svg" alt="Website Management Icon" className="w-28 h-28" />
                <span className="text-sm p-2 text-centera">Website Management Service's</span>
              </Link>

              <Link href="/health-checker" className="absolute top-[calc(50vh+10vh)] left-0 w-full bottom-[calc(25vh)]
               bg-[#dfbf84] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-back-health-black.svg" alt="Website Health Checker Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Website Health Checker</span>
              </Link>

              <Link href="/faq" className="absolute top-[calc(75vh)] left-0 w-full h-[calc(25vh)]
               bg-[#e4dbcc] flex flex-col items-center justify-center">
                <img src="/assets/icon-back-faq-black.svg" alt="FAQ Icon" className="w-28 h-28" />
                <span className="text-sm p-2">FAQ</span>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="absolute right-0 w-1/2 h-full perspective-1000">
        <div className="flip-container">
          <div className="flipper ">
            {/* Front Content */}
            <div className="front ">
              <Link href="/services" className="absolute top-0 right-0 w-full h-[50vh] bg-[#d88b48]
               flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-services-black.svg" alt="Services Icon" className="w-48 h-48" />
                <span className="text-sm p-2">Service's</span>
              </Link>

              <Link href="/blog" className="absolute top-[50vh] right-0 w-full h-[calc((50vh/3)*2)]
               bg-[#808d6f] flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <img src="/assets/icon-blog-black.svg" alt="Blog Icon" className="w-24 h-24" />
                <span className="text-sm p-2">Blog</span>
              </Link>
            </div>

            {/* Back Content */}
            <div className="back">
              <Link href="/seo" className="absolute top-0 right-0 w-full h-[25vh]
               bg-[#c0c8c9] flex flex-col items-center justify-center">
                <img src="/assets/icon-back-seo-black.svg" alt="SEO Icon" className="w-28 h-28" />
                <span className="text-sm p-2">SEO</span>
              </Link>

              <Link href="/web-design" className="absolute top-[25vh] right-0 w-full h-[25vh]
               bg-[#c0c8c9] flex flex-col items-center justify-center">
                <img src="/assets/icon-back-design-black.svg" alt="Web Design Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Web Design</span>
              </Link>

              <Link href="/knowledge-hub" className="absolute top-[50vh] right-0 w-full h-[calc((50vh/3)*2)]
               bg-[#a6bcb4] flex flex-col items-center justify-center">
                <img src="/assets/icon-back-knowledge-black.svg" alt="Knowledge Hub Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Knowledge Hub</span>
              </Link>
            </div>
          </div>
        </div>

        <FlipSection />
      </div>
    </div>
  )
}