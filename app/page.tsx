import React from 'react';
import './globals.css';

import Header from './landing/header';
import HeroSection from './landing/hero';
import ServicesSection from './landing/services';
import PricingSection from './landing/pricing';
import ProcessSection from './landing/process';
import TestimonialsSection from './landing/testimonials';
import BlogPreviewSection from './landing/blog-section';
import FAQSection from './landing/faq';
import CTASection from './landing/cta-section';
import ContactFormSection from './landing/contact-form-section';
import Footer from './landing/footer';
import PortfolioCTA from './landing/portfolio-CTA';
function Landing() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <PortfolioCTA />
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <FAQSection />
        <CTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;