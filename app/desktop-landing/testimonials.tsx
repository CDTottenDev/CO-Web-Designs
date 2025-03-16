import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  business: string;
  location: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, business, location }) => (
  <div className="bg-white p-6 retro-card">
    <div className="mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="inline w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    <p className="mb-4 italic">"{quote}"</p>
    <div>
      <p className="font-bold">{author}</p>
      <p className="text-sm">{business}, {location}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Central Oregon Web Designs transformed our online presence. Sales increased 40% within the first three months of launching our new site!",
      author: "Sarah Johnson",
      business: "Sunrise Bakery",
      location: "Orlando, FL"
    },
    {
      quote: "Incredible value for the quality. Our new website looks like we spent thousands more than we actually did.",
      author: "Michael Chen",
      business: "Green Leaf Landscaping",
      location: "Tampa, FL"
    },
    {
      quote: "Not only did they build a beautiful website, but they taught us how to update it ourselves, saving us money long-term.",
      author: "Jessica Williams",
      business: "Coastal Therapy",
      location: "Miami, FL"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto">We've helped businesses across the country establish their online presence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;