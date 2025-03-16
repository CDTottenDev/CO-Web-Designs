import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'New Website',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-6">
                Ready to discuss your project? Fill out the form and we'll get back to you within 
                24 hours with a free consultation and quote.
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2">Contact Information</h3>
                <p className="mb-1">Email: hello@centraloregonwebdesigns.com</p>
                <p className="mb-1">Phone: (555) 123-4567</p>
                <p>Location: Polk County, Florida</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Our Hours</h3>
                <p className="mb-1">Monday - Friday: 9am - 5pm ET</p>
                <p>Weekends: By appointment only</p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-6 border-2 border-black retro-shadow">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-black"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-black"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block font-bold mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-black"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="interest" className="block font-bold mb-1">I'm interested in:</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-black"
                      required
                    >
                      <option value="New Website">New Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block font-bold mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-2 border-2 border-black"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-black text-white py-3 font-bold retro-btn border-2 border-black">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;