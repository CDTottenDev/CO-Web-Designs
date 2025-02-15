import RetroBackground from '@/app/components/RetroBackground'
import FloatingNav from '@/app/components/FloatingNav'

export default function AboutPage() {
  return (
    <RetroBackground>
      <FloatingNav />
      <div className="flex items-center justify-center min-h-screen py-[15vw] bg-black/15 dark:bg-black/70">
        <div className="max-w-4xl px-6 space-y-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100 dark:text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Hey there! I'm Colt Totten
            </h1>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full" />
              <p className="text-xl md:text-2xl text-black/70 dark:text-white/90 opacity-90 relative">
                Founder, Designer, Developer & Blue-Collar Tech Enthusiast
              </p>
            </div>
          </div>

          {/* Bio Sections */}
          <div className="flex flex-col gap-8 text-black/80 dark:text-white/90 relative">
            <div className="bg-[#d2e7e3] dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-400/30 z-40 ml-[-2rem] mt-4 mr-[2rem]">
              <p className="text-lg leading-relaxed">
                My story isn't one of coding boot camps or college dorm startups. I've spent the last 25 years in hard blue-collar work—concrete foreman, electrician, truck driver, manufacturing supervisor—while raising a family and quietly building a serious love for computers and creative design on the side.
              </p>
            </div>

            <div className="bg-[#cde7d3] dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-400/30 z-30 ml-[4rem] mt-[-2rem] mr-[-1rem]">
              <p className="text-lg leading-relaxed">
                It all started when I got my first computer at 20. After growing up on a ranch in Central Oregon and jumping headfirst into the working world, that computer opened up a whole new universe. I dove into coding, graphic design, 3D modeling, animation—you name it. While the workday might have involved steel-toed boots and heavy machinery, my evenings were spent teaching myself everything from Blender to the Adobe suite.
              </p>
            </div>

            <div className="bg-[#d2ecc0] dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-400/30 z-20 ml-[-3rem] mt-[-1rem] mr-[3rem]">
              <p className="text-lg leading-relaxed">
                Fast forward to today, and here I am, turning my passion into a business. In 2024, I built my first client website for <a href="https://h3excavationandconst.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">H3 Excavation & Construction</a> using the full React Next.js tech stack. Now, I'm on a mission to help other small-to-medium businesses get an affordable, high-quality web presence that works as hard as they do.
              </p>
            </div>

            <div className="bg-[#eee6fa] dark:bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-400/30 z-10 ml-[2rem] mt-[-2rem] mr-[-2rem]">
              <p className="text-lg leading-relaxed">
                I know what it's like to hustle, to juggle a million things at once, and to wonder if there's enough coffee in the world to keep it all running smoothly. My goal is simple: take the stress of your website off your plate so you can focus on what matters most—running your business.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <p className="text-2xl text-amber-100 font-bold mb-4 underline">
                Let's build something awesome together.
              </p>
              <p className="text-white text-lg">
                Whether you need a website overhaul, a fresh design, or just someone who gets it, I've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RetroBackground>
  )
}
