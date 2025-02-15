'use client'

import Link from 'next/link'
import FlipSection from './FlipSection'

export default function DesktopLanding() {
  
  return (
    <div className="h-screen w-full flex transition-colors duration-500 bg-emerald-100 dark:bg-emerald-900 overflow-hidden">
      {/* Left Column */}
      <div className="w-1/2 m-0 p-0 border-0">
          <div className="flip-container h-full m-0 p-0 border-0">
              <div className="flipper h-full m-0 p-0 border-0">
                  {/* Front Content */}
                  <div className="front flex flex-col h-full">
                      <Link href="/about" className="flex-[0_0_35vh] bg-[#fdb76c] dark:bg-[#b67933] border-l-2 border-t-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-about-us-black.svg" alt="About Us Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">About</span>
                      </Link>

                      <Link href="/contact" className="flex-[0_0_25vh] bg-[#fffadb] dark:bg-[#a19a69] border-l-2 border-b-2 border-t-2 border-black
                      flex flex-col items-center justify-center ">
                      <img src="/assets/icon-contact-black.svg" alt="Contact Us Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">Contact Us</span>
                      </Link>

                      <Link href="/prices" className="flex-1 bg-[#d3dfae] dark:bg-[#94a562] border-l-2 border-b-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-price-black.svg" alt="Price Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">Prices</span>
                      </Link>
                  </div>

                  {/* Back Content */}
                  <div className="back flex flex-col h-full">
                      <Link href="/how-we-work" className="flex-[0_0_35vh] bg-[#e4c2ad] dark:bg-[#a18269] border-t-2 border-l-2 border-b-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-work-black.svg" alt="How We Work Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">How We Work</span>
                      </Link>

                      <Link href="/management-services" className="flex-[0_0_25vh] bg-[#d5caaf] dark:bg-[#a5997a] border-l-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-management-black.svg" alt="Website Management Icon" className="w-28 h-28" />
                      <span className="text-sm p-2 text-center">Website Management Service's</span>
                      </Link>

                      <Link href="/health-checker" className="flex-[0_0_25vh] bg-[#dfbf84] dark:bg-[#a88d5a] border-l-2 border-t-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-health-black.svg" alt="Website Health Checker Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">Website Health Checker</span>
                      </Link>

                      <Link href="/faq" className="flex-1 bg-[#e4dbcc] dark:bg-[#afa491] border-l-2 border-b-2 border-t-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-faq-black.svg" alt="FAQ Icon" className="w-20 h-20" />
                      <span className="text-sm p-2">FAQ</span>
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 m-0 p-0 border-0">
          <div className="flip-container h-full m-0 p-0 border-0">
              <div className="flipper h-full m-0 p-0 border-0">
                  {/* Front Content */}
                  <div className="front flex flex-col h-full">
                      <Link href="/services" className="flex-[0_0_50vh] bg-[#eea450] dark:bg-[#9b6d39] border-r-2 border-t-2 border-l-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-services-black.svg" alt="Services Icon" className="w-48 h-48" />
                      <span className="text-sm p-2">Services</span>
                      </Link>

                      <Link href="/blog" className="flex-[0_0_25vh] bg-[#becf8d] dark:bg-[#7f8f56] border-t-2 border-r-2 border-l-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-blog-black.svg" alt="Blog Icon" className="w-24 h-24" />
                      <span className="text-sm p-2">Blog</span>
                      </Link>

                      <Link href="/before-after" className="flex-[0_0_25vh] bg-[#ffd665] dark:bg-[#b99942] border-t-2 border-r-2 border-l-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-before-after.webp" alt="Before & After Icon" className="w-24 h-24" />
                      <span className="text-sm p-2">Before & After</span>
                      </Link>
                  </div>

                  {/* Back Content */}
                  <div className="back flex flex-col h-full">
                      <Link href="/seo" className="flex-[0_0_25vh] bg-[#c0c8c9] dark:bg-[#808080]
                      border-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-seo-black.svg" alt="SEO Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">SEO</span>
                      </Link>

                      <Link href="/web-design" className="flex-[0_0_25vh] bg-[#c0c8c9] dark:bg-[#869597]
                      border-l-2 border-r-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-design-black.svg" alt="Web Design Icon" className="w-28 h-28" />
                      <span className="极sm p-2">Web Design</span>
                      </Link>

                      <Link href="/knowledge-hub" className="flex-[0_0_25vh] bg-[#a6bcb4] dark:bg-[#73867e]
                      border-l-2 border-t-2 border-r-2 border-black
                      flex flex-col items-center justify-center">
                      <img src="/assets/icon-back-knowledge-black.svg" alt="Knowledge Hub Icon" className="w-28 h-28" />
                      <span className="text-sm p-2">Knowledge Hub</span>
                      </Link>

                      <Link href="/#" className="flex-[0_0_25vh] bg-[#98ccad] dark:bg-[#4d805f] 
                      border-l-2 border-t-2 border-r-2 border-black
                      flex flex-col items-center justify-center">
                      {/* <img src="#" alt="#" className="w-24 h-24" />
                      <span className="text-sm p-2">IKD-2</span> */}
                      </Link>
                  </div>
              </div>
          </div>
      </div>
      <FlipSection />
    </div>
  );
}