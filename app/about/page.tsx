import React from 'react';
import FloatingNav from '@/app/components/FloatingNav';

export default function AboutPage() {
  return (
    <>
      <FloatingNav />
      <section className="min-h-screen py-[15vh] bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
              <span className="text-sm">Founder, Designer, Developer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Hey there! I'm <span className="underline decoration-red-500">Colt Totten</span>
            </h1>
          </div>

          {/* Bio Sections */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="md:w-5/12">
              <div className="bg-white border-2 border-black retro-shadow p-6">
                <p className="text-lg leading-relaxed">
                  I help businesses like yours stand out online with professional, high-converting websites tailored to your needs. My approach is simple: I design modern, mobile-friendly websites that not only look great but also bring in more customers through strategic SEO and user-focused design.
                </p>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <div className="bg-white border-2 border-black retro-shadow p-6">
                <p className="text-lg leading-relaxed">
                  Unlike big agencies that overcharge for cookie-cutter sites, I offer customized solutions at affordable rates, working closely with you to ensure your website reflects your brand and helps grow your business. Whether you're starting fresh or need an upgrade, I can help. Let's talk about how we can make your online presence work for you.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-2xl font-bold mb-8 underline decoration-red-500">
              Let's build something awesome together.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a 
                href="/before-after" 
                className="bg-yellow-300 px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center"
              >
                Before & After
              </a>
              <a 
                href="/prices" 
                className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center"
              >
                Pricing
              </a>
              <a 
                href="/how-we-work" 
                className="bg-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center"
              >
                How We Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}