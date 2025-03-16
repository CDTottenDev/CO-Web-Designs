import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-bold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`mt-2 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How much does a website cost?",
      answer: "Our website packages start at just $299 for a basic site. The final cost depends on your specific needs and requirements. We offer transparent pricing with no hidden fees, and we'll provide a detailed quote before starting any work."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A basic website typically takes 1-2 weeks to complete. More complex websites with custom features may take 3-4 weeks. We'll provide you with a specific timeline based on your project requirements."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer ongoing website maintenance services to keep your site secure, updated, and running smoothly. Our maintenance packages include regular updates, security monitoring, backups, and technical support."
    },
    {
      question: "Can you help with my existing website?",
      answer: "Absolutely! We can help improve, update, or redesign your existing website. We'll start with a free analysis to identify areas for improvement and provide recommendations."
    },
    {
      question: "Do you work with clients outside of Florida?",
      answer: "Yes! While our company started in Oregon and we're now based in Florida, we work with clients nationwide and internationally. All our services can be delivered remotely, and we use video calls and online collaboration tools to ensure a smooth process."
    },
    {
      question: "What if I'm not satisfied with the design?",
      answer: "Client satisfaction is our top priority. We offer unlimited revisions during the design phase to ensure you're completely happy with the final product. We won't proceed to development until you approve the design."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto">Everything you need to know about our services</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="mb-4">Still have questions? We're here to help.</p>
          <a href="/contact" className="inline-block px-6 py-2 bg-black text-white font-bold border-2 border-black retro-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;