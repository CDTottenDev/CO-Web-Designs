import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-yellow-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business online?</h2>
          <p className="text-lg mb-8">
            Whether you're just starting out or looking to upgrade your existing website, 
            we have affordable solutions that will help you stand out and convert visitors into customers.
          </p>
          <div className="inline-block relative">
            <div className="absolute -top-6 -right-6 bg-red-500 text-white p-2 z-10 rounded-full border-2 border-black">
              <span className="text-sm font-bold">Limited Time Offer!</span>
            </div>
            <a 
              href="/contact" 
              className="bg-black text-white px-8 py-4 font-bold text-lg retro-btn border-2 border-black inline-flex items-center"
            >
              Get Started Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm">
            Free consultation and quote. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;