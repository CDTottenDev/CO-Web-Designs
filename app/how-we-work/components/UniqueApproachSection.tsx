'use client'

import type React from "react"
import { Button } from "@/app/management-services/components/button"

const UniqueApproachSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800 dark:text-blue-300">Why Choose Central Oregon Web Designs?</h2>
        <p className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300">
          With over 25 years of blue-collar experience and 15 years in computer engineering and software development, we
          bring a unique perspective to web design that sets us apart.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Hands-On Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our background in blue-collar work gives us a practical approach to problem-solving and an understanding
              of diverse industries that most web designers lack.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Technical Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              With 15+ years in computer hardware engineering and software development, we offer advanced technical
              solutions that go beyond simple website creation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Custom-Tailored Websites</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Unlike many agencies that rely on cookie-cutter templates, we build each website from scratch to perfectly
              match your brand and business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Personal Touch</h3>
            <p className="text-gray-600 dark:text-gray-300">
              As a small, family-run business, we offer personalized attention and care that larger agencies simply
              can't match. Your success is our success.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 p-8 rounded-lg shadow-xl mb-12 dark:bg-gray-800">
          <h3 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300">Custom Websites vs. Cookie-Cutter Solutions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Custom Websites</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Tailored to your specific business needs</li>
                <li>Unique design that stands out from competitors</li>
                <li>Optimized for performance and SEO</li>
                <li>Scalable and easily adaptable as your business grows</li>
                <li>Full control over functionality and features</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Cookie-Cutter Websites</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Generic templates used by thousands of other sites</li>
                <li>Limited customization options</li>
                <li>Potential performance issues due to bloated code</li>
                <li>Restricted ability to add unique features</li>
                <li>May not scale well with business growth</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800"
          onClick={() => {
            window.location.href = '/contact'
          }}
          >
            Get Your Custom Website Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default UniqueApproachSection

