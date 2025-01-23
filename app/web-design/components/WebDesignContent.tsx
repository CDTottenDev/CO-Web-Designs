"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Megaphone, Globe, Lock, Target, Clock, ChevronRight, Users, BarChart, Smartphone } from "lucide-react"

const reasons = [
  {
    icon: <Globe className="w-12 h-12 text-pastel-blue" />,
    title: "Customers Expect a Website",
    description:
      "In 2025, an online presence is your digital storefront. Show potential customers who you are and what you offer.",
  },
  {
    icon: <Lock className="w-12 h-12 text-pastel-pink" />,
    title: "Build Instant Credibility",
    description:
      "A professional website establishes trust and separates you from competitors still living in the analog world.",
  },
  {
    icon: <Target className="w-12 h-12 text-pastel-green" />,
    title: "Control Your Brand Story",
    description: "Own your narrative. Unlike social media, your website is 100% yours to showcase your unique value.",
  },
  {
    icon: <Clock className="w-12 h-12 text-pastel-purple" />,
    title: "Your Website Works 24/7",
    description:
      "Unlike a physical store, your website never closes. It's always there to answer questions and collect leads.",
  },
  {
    icon: <Users className="w-12 h-12 text-pastel-orange" />,
    title: "Extend Your Reach",
    description: "Go beyond social media. Your website is the central hub where all your online efforts converge.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-pastel-teal" />,
    title: "Maximize Your ROI",
    description:
      "A website is one of the most cost-effective marketing tools, offering SEO benefits and lead generation opportunities.",
  },
]

const WebDesignContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <motion.h1
          className="text-6xl font-bold text-retro-purple mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web Design in 2025
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your local business with a website that attracts, converts, and grows your customer base
        </motion.p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-retro-blue mb-8 text-center">Why Your Business Needs a Website</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="ml-4 text-2xl font-semibold text-retro-blue">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-retro-purple mb-8 text-center">Tips for Creating a Winning Website</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-pastel-pink rounded-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-retro-blue mb-4">User-Friendly Design</h3>
            <p className="text-gray-700">
              Ensure simple navigation and clear organization for the best user experience.
            </p>
          </motion.div>
          <motion.div
            className="bg-pastel-blue rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-retro-blue mb-4">Mobile Optimization</h3>
            <p className="text-gray-700">
              With most searches happening on smartphones, a mobile-friendly design is crucial.
            </p>
          </motion.div>
          <motion.div
            className="bg-pastel-green rounded-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-retro-blue mb-4">Clear Call-to-Actions</h3>
            <p className="text-gray-700">
              Guide visitors to take specific actions, like booking a service or requesting a quote.
            </p>
          </motion.div>
          <motion.div
            className="bg-pastel-orange rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-retro-blue mb-4">Local SEO</h3>
            <p className="text-gray-700">
              Optimize your site to rank higher in local searches and attract nearby customers.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="bg-pastel-peach rounded-xl p-12 text-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-retro-purple mb-6">Ready to Elevate Your Online Presence?</h2>
        <p className="text-xl text-gray-700 mb-8">Let Central Oregon Web Design transform your digital footprint</p>
        <button className="bg-retro-green text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition flex items-center mx-auto">
          Get Started <ChevronRight className="ml-2" />
        </button>
      </motion.section>

      <footer className="text-center text-gray-600">
        <p>© 2025 Central Oregon Web Design. Crafting digital experiences that matter.</p>
        <p className="mt-2">Serving local businesses in Bend, Redmond, Sisters, and beyond.</p>
      </footer>
    </div>
  )
}

export default WebDesignContent

