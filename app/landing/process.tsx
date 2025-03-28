import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const ProcessStepCard: React.FC<ProcessStep> = ({ number, title, description }) => (
  <div className="relative">
    <div className="absolute -top-2 -left-2 w-8 h-8 flex items-center justify-center bg-black text-white font-bold border-2 border-black">
      {number}
    </div>
    <div className="bg-white p-6 pl-8 retro-card">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and specific requirements for your website."
    },
    {
      number: 2,
      title: "Design",
      description: "Our team creates a custom design that matches your brand identity and focuses on user experience."
    },
    {
      number: 3,
      title: "Development",
      description: "We build your website using clean, efficient code that ensures your site loads quickly and works flawlessly."
    },
    {
      number: 4,
      title: "Testing",
      description: "We rigorously test your website across different devices and browsers to ensure everything works perfectly."
    },
    {
      number: 5,
      title: "Launch",
      description: "Once approved, we deploy your website and ensure everything is properly set up and running smoothly."
    },
    {
      number: 6,
      title: "Support",
      description: "We provide ongoing support and maintenance to keep your website secure, updated, and performing at its best."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="max-w-2xl mx-auto">Our proven process ensures your website project runs smoothly from start to finish</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <ProcessStepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;