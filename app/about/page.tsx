import RetroBackground from '@/app/components/RetroBackground'
import FloatingNav from '@/app/components/FloatingNav'

export default function AboutPage() {
  return (
    <RetroBackground>
      <FloatingNav />
      <div className="flex items-center justify-center min-h-screen py-[30vw] md:py-[15vw] bg-black/15 dark:bg-black/70">
        <div className="max-w-4xl px-6 space-y-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100 dark:text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Hey there! I'm Colt Totten
            </h1>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full" />
              <p className="text-xl md:text-2xl text-black/70 dark:text-white/90 opacity-90 relative">
                Founder, Designer, Developer
              </p>
            </div>
          </div>

          {/* Bio Sections */}
          <div className="flex flex-col gap-8 text-black/80 dark:text-white/90 relative">
            
            <div className="bg-[#dfdfc0] dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-400/30 z-40 ml-[2rem] mb-[-2rem] mr-[-1rem]">
              <p className="text-lg leading-relaxed">
              I help businesses like yours stand out online with professional, high-converting websites tailored to your needs. My approach is simple: I design modern, mobile-friendly websites that not only look great but also bring in more customers through strategic SEO and user-focused design.
              Unlike big agencies that overcharge for cookie-cutter sites, I offer customized solutions at affordable rates, working closely with you to ensure your website reflects your brand and helps grow your business. Whether you're starting fresh or need an upgrade, I can help. Let’s talk about how we can make your online presence work for you.
              </p>
            </div>

            <div className="bg-[#d2ecc0] dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-400/30 z-20 ml-[-3rem] mt-[-1rem] mr-[3rem]">
              <p className="text-lg leading-relaxed">
              Unlike big agencies that overcharge for cookie-cutter sites, I offer customized solutions at affordable rates, working closely with you to ensure your website reflects your brand and helps grow your business. Whether you're starting fresh or need an upgrade, I can help. Let’s talk about how we can make your online presence work for you.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <p className="text-2xl text-amber-100 font-bold mb-4 underline">
                Let's build something awesome together.
              </p>
            </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/before-after"
              className="bg-[#ffd700] hover:bg-[#ffc800] text-black font-bold py-3 px-6 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 border-2 border-black/20 transform hover:scale-105"
            >
              Before & After
            </a>
            <a
              href="/prices"
              className="bg-[#00c853] hover:bg-[#00b84c] text-white font-bold py-3 px-6 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 border-2 border-black/20 transform hover:scale-105"
            >
              Pricing
            </a>
            <a
              href="/how-we-work"
              className="bg-[#2196f3] hover:bg-[#1e88e5] text-white font-bold py-3 px-6 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 border-2 border-black/20 transform hover:scale-105"
            >
              How We Work
            </a>
          </div>
          </div>
        </div>
      </div>
    </RetroBackground>
  )
}
