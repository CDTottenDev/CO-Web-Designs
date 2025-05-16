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

const lightTheme = {
  primary: '#6D28D9',       // Deep purple
  secondary: '#2563EB',     // Royal blue
  accent: '#10B981',        // Emerald green
  background: '#F9FAFB',    // Light gray
  text: '#1F2937',          // Dark gray
  pastel: {
    blue: '#BFDBFE',        // Light blue
    pink: '#FBCFE8',        // Light pink
    green: '#A7F3D0',       // Light green
    purple: '#DDD6FE',      // Light purple
    orange: '#FDE68A',      // Light orange
    teal: '#99F6E4',        // Light teal
    peach: '#FEE2E2'        // Light peach
  }
};

const darkTheme = {
  primary: '#8B5CF6',       // Bright purple
  secondary: '#3B82F6',     // Bright blue
  accent: '#34D399',        // Bright green
  background: '#1F2937',    // Dark gray
  text: '#F9FAFB',          // Light gray
  pastel: {
    blue: '#1E40AF',        // Dark blue
    pink: '#BE185D',        // Dark pink
    green: '#065F46',       // Dark green
    purple: '#5B21B6',      // Dark purple
    orange: '#92400E',      // Dark orange
    teal: '#0D9488',        // Dark teal
    peach: '#9D174D'        // Dark peach
  }
};

const WebDesignContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-zinc-300/50 dark:bg-background">
      <header className="text-center mb-16 pt-24">
        <motion.h1
          className="text-6xl font-bold text-primary dark:text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web Design in 2025
        </motion.h1>
        <motion.p
          className="text-xl text-foreground dark:text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your local business with a website that attracts, converts, and grows your customer base
        </motion.p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-foreground/80 dark:text-white/80 mb-8 text-center">Why Your Business Needs a Website</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg dark:shadow-red-800/10 p-6 transform transition hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <h3 className="ml-4 text-2xl font-semibold text-foreground dark:text-white/85">{reason.title}</h3>
              </div>
              <p className="text-foreground/80 dark:text-white/80">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-foreground/80 dark:text-white/80 mb-8 text-center">Tips for Creating a Winning Website</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-pastel-pink/30 dark:bg-pastel-pink/10 rounded-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-foreground dark:text-white/85 mb-4">User-Friendly Design</h3>
            <p className="text-foreground/80 dark:text-white/80">
              Ensure simple navigation and clear organization for the best user experience.
            </p>
          </motion.div>
          <motion.div
            className="bg-pastel-blue/30 dark:bg-pastel-blue/10 rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-foreground dark:text-white/85 mb-4">Mobile Optimization</h3>
            <p className="text-foreground/80 dark:text-white/80">
              With most searches happening on smartphones, a mobile-friendly design is crucial.
            </p>
          </motion.div>
          <motion.div
            className="bg-pastel-green/30 dark:bg-pastel-green/10 rounded-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground dark:text-white/85 mb-4">Clear Call-to-Actions</h3>
            <p className="text-foreground/80 dark:text-white/80">
              Guide visitors to take specific actions, like booking a service or requesting a quote.
            </p>
          </motion.div>
          <motion.div
            className="bg-pastel-orange/30 dark:bg-pastel-orange/10 rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-foreground dark:text-white/85 mb-4">Local SEO</h3>
            <p className="text-foreground/80 dark:text-white/80">
              Optimize your site to rank higher in local searches and attract nearby customers.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="bg-pastel-peach/30 dark:bg-pastel-peach/10 rounded-xl p-12 text-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-foreground/80 dark:text-white/80 mb-6">Ready to Elevate Your Online Presence?</h2>
        <p className="text-xl text-foreground/80 dark:text-white/80 mb-8">Let C.D. Totten transform your digital footprint</p>
        <button className="text-white bg-zinc-900/90 dark:text-text px-8 py-4 rounded-full text-xl font-bold hover:bg-zinc-900/95 transition flex items-center mx-auto"
        onClick={() => {
          window.location.href = "/contact";
        }}
        >
          Get Started <ChevronRight className="ml-2" />
        </button>
      </motion.section>

      <footer className="text-center text-foreground/80 dark:text-white/80">
        <p>© 2025 C.D. Totten - Web Developer. Crafting digital experiences that matter.</p>
        <p className="mt-2">Serving local businesses in Central Florida, United States.</p>
      </footer>
    </div>
  )
}

export default WebDesignContent

