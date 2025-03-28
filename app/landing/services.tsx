import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, bgColor, link }) => (
  <div className="bg-white p-6 retro-card">
    <div className={`h-12 w-12 ${bgColor} rounded-full flex items-center justify-center mb-4 border-2 border-black`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <a href={link} className="text-black underline">Learn more →</a>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Web Design",
      description: "Custom designs that engage your visitors and represent your brand perfectly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      bgColor: "bg-blue-100",
      link: "/services#web-design"
    },
    {
      title: "SEO",
      description: "Get found online with our search engine optimization services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      bgColor: "bg-green-100",
      link: "/seo"
    },
    {
      title: "Website Management",
      description: "Keep your site running smoothly with our professional management services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      bgColor: "bg-red-100",
      link: "/management-services"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto">Everything you need to establish and grow your online presence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;