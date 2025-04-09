import React from 'react';

interface PricePackage {
  name: string;
  price: string;
  priceSubtext: string;
  description: string;
  features: {
    category: string;
    items: string[];
  }[];
  highlight?: boolean;
  buttonText: string;
}

const PricingCard: React.FC<PricePackage> = ({ name, price, priceSubtext, description, features, highlight, buttonText }) => (
  <div className={`p-6 ${highlight ? 'bg-yellow-50' : 'bg-white'} retro-card relative`}>
    {highlight && (
      <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs px-3 py-1 font-bold border-2 border-black rotate-6">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">${price}</span>
      <span className="text-sm">{priceSubtext}</span>
    </div>
    <p className="text-sm mb-6">{description}</p>
    
    {features.map((featureGroup, groupIndex) => (
      <div key={groupIndex} className="mb-4">
        <h4 className="font-bold text-md mb-2">{featureGroup.category}</h4>
        <ul className="mb-4 space-y-2">
          {featureGroup.items.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
    
    <a href="/contact" className={`block text-center py-2 ${highlight ? 'bg-black text-white' : 'bg-white'} border-2 border-black retro-btn font-bold`}>
      {buttonText}
    </a>
  </div>
);

const PricingSection: React.FC = () => {
  const packages: PricePackage[] = [
    {
      name: "Essentials Plan",
      price: "99/mo",
      priceSubtext: "12-month contract (or $150/mo for 6-months)",
      description: "Best for small local businesses or trades looking to get online quickly.",
      features: [
        {
          category: "Included Features",
          items: [
            "5-page custom-coded website",
            "Mobile & SEO optimized",
            "Hosting & basic maintenance included",
            "Optional buyout: $1,200"
          ]
        }
      ],
      highlight: true,
      buttonText: "Get Started"
    },
    {
      name: "Custom Site Build",
      price: "Starting at $1,500",
      priceSubtext: "One-time payment, project-based pricing",
      description: "Tailored for brands that want to stand out, with a one-time investment.",
      features: [
        {
          category: "Included Features",
          items: [
            "Fully custom design & interactivity",
            "Contact forms, galleries, advanced layout",
            "Launch in 2–4 weeks",
            "Free 30-day support post-launch",
            "Optional maintenance: $75/month"
          ]
        }
      ],
      buttonText: "Request a Quote"
    },
    {
      name: "Full-Service Retainer",
      price: "250/mo",
      priceSubtext: "6-month contract minimum",
      description: "Ongoing updates, feature expansion, and technical peace of mind.",
      features: [
        {
          category: "Included Features",
          items: [
            "All features from the Custom Build",
            "Monthly content or feature updates",
            "Priority support",
            "Optional buyout: $1,200"
          ]
        }
      ],
      buttonText: "Book a Call"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Affordable Pricing</h2>
          <p className="max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4">Need something more custom? We can help with that too.</p>
          <a href="/contact" className="inline-block px-6 py-3 bg-black text-white font-bold border-2 border-black retro-btn">
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;