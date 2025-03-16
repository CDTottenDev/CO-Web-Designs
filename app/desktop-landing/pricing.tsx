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
      name: "Basic Website",
      price: "2,000",
      priceSubtext: "/one-time",
      description: "Perfect for any size project. We'll work with you to determine the scope of the project and provide a fixed cost estimate.",
      features: [
        {
          category: "Design & Development",
          items: [
            "Custom responsive design for mobile and desktop",
            "Up to 5 unique page layouts",
            "Basic SEO optimization",
            "Contact form integration",
            "Google Analytics setup"
          ]
        },
        {
          category: "Content & Media",
          items: [
            "Up to 10 pages of content",
            "Basic image optimization",
            "Integration of client-provided media",
            "Database for CMS"
          ]
        },
        {
          category: "Functionality",
          items: [
            "Simple content management system (CMS)",
            "Social media links",
            "Email newsletter signup form"
          ]
        },
        {
          category: "Support & Maintenance",
          items: [
            "30 days of post-launch support",
            "Basic website training session",
            "Monthly backup service"
          ]
        }
      ],
      buttonText: "Get Started"
    },
    {
      name: "Monthly Subscription Plan",
      price: "150",
      priceSubtext: "/month",
      description: "Starting at $150/month. Flexible billing options available.",
      features: [
        {
          category: "Design & Development",
          items: [
            "Premium custom responsive design",
            "Up to 10 unique page layouts",
            "Advanced SEO optimization",
            "Custom contact and lead generation forms",
            "Google Analytics and Google Search Console setup"
          ]
        },
        {
          category: "Content & Media",
          items: [
            "Up to 20 pages of content",
            "Advanced image and video optimization",
            "Custom icon design",
            "Custom Graphic Design",
            "Custom Illustrations",
            "Database for CMS"
          ]
        },
        {
          category: "Functionality",
          items: [
            "Advanced content management system",
            "Blog or news section with categories and tags",
            "Social media feed integration",
            "Basic e-commerce functionality (up to 20 products)"
          ]
        },
        {
          category: "Support & Maintenance",
          items: [
            "90 days of post-launch support minimum then continues through the duration of the contract",
            "Comprehensive website training session",
            "Monthly maintenance and security updates",
            "Basic speed optimization"
          ]
        }
      ],
      highlight: true,
      buttonText: "Subscribe Now"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Affordable Pricing</h2>
          <p className="max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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