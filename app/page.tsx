import Link from 'next/link'
import FlipSection from './components/FlipSection'

export default function Home() {
  return (
    <div className="h-screen w-full flex">
      {/* Left Column */}
      <div className="w-1/2 perspective-1000 m-0 p-0 border-0">
        <div className="flip-container h-full m-0 p-0 border-0">
          <div className="flipper h-full m-0 p-0 border-0">
            {/* Front Content */}
            <div className="front flex flex-col h-full">
              <Link href="/about" className="flex-[0_0_35vh] bg-[#fdb76c] border-l-2 border-t-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-about-us-black.svg" alt="About Us Icon" className="w-28 h-28" />
                <span className="text-sm p-2">About</span>
              </Link>

              <Link href="/contact" className="flex-[0_0_25vh] bg-[#fffadb] border-l-2 border-b-2 border-t-2 border-black
              flex flex-col items-center justify-center ">
                <img src="/assets/icon-contact-black.svg" alt="Contact Us Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Contact Us</span>
              </Link>

              <Link href="/prices" className="flex-1 bg-[#d3dfae] border-l-2 border-b-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-price-black.svg" alt="Price Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Price's</span>
              </Link>

            </div>

            {/* Back Content */}
            <div className="back flex flex-col h-full">
              <Link href="/how-we-work" className="flex-[0_0_35vh] bg-[#e4c2ad] border-t-2 border-l-2 border-b-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-back-work-black.svg" alt="How We Work Icon" className="w-28 h-28" />
                <span className="text-sm p-2">How We Work</span>
              </Link>

              <Link href="/management-services" className="flex-[0_0_25vh] bg-[#d5caaf] border-l-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-back-management-black.svg" alt="Website Management Icon" className="w-28 h-28" />
                <span className="text-sm p-2 text-center">Website Management Service's</span>
              </Link>

              <Link href="/health-checker" className="flex-[0_0_25vh] bg-[#dfbf84] border-l-2 border-t-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-back-health-black.svg" alt="Website Health Checker Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Website Health Checker</span>
              </Link>

              <Link href="/faq" className="flex-1 bg-[#e4dbcc] border-l-2 border-b-2 border-t-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-back-faq-black.svg" alt="FAQ Icon" className="w-20 h-20" />
                <span className="text-sm p-2">FAQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 perspective-1000 m-0 p-0 border-0">
        <div className="flip-container h-full m-0 p-0 border-0">
          <div className="flipper h-full m-0 p-0 border-0">
            {/* Front Content */}
            <div className="front flex flex-col h-full">
              <Link href="/services" className="flex-[0_0_50vh] bg-[#eea450] border-r-2 border-t-2 border-l-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-services-black.svg" alt="Services Icon" className="w-48 h-48" />
                <span className="text-sm p-2">Service's</span>
              </Link>

              <Link href="/blog" className="flex-[0_0_33.35vh] bg-[#becf8d] border-t-2 border-r-2 border-l-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-blog-black.svg" alt="Blog Icon" className="w-24 h-24" />
                <span className="text-sm p-2">Blog</span>
              </Link>
            </div>

            {/* Back Content */}
            <div className="back flex flex-col h-full">
              <Link href="/seo" className="flex-[0_0_25vh] bg-[#c0c8c9] 
              border-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-back-seo-black.svg" alt="SEO Icon" className="w-28 h-28" />
                <span className="text-sm p-2">SEO</span>
              </Link>

              <Link href="/web-design" className="flex-[0_0_25vh] bg-[#c0c8c9] 
              border-l-2 border-r-2 border-black
              flex flex-col items-center justify-center">
                <img src="/assets/icon-back-design-black.svg" alt="Web Design Icon" className="w-28 h-28" />
                <span className="text-sm p-2">Web Design</span>
              </Link>

              <Link href="/knowledge-hub" className="flex-[0_0_33.35vh] bg-[#a6bcb4] 
              border-l-2 border-t-2 border-r-2 border-black
              flex flex-col items-center justify-center">
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

