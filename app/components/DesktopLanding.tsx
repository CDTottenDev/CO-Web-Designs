import React from 'react';
import '../desktop-landing/globals.css';

import Header from '../desktop-landing/header';
import HeroSection from '../desktop-landing/hero';
import ServicesSection from '../desktop-landing/services';
import PricingSection from '../desktop-landing/pricing';
import ProcessSection from '../desktop-landing/process';
import TestimonialsSection from '../desktop-landing/testimonials';
import BlogPreviewSection from '../desktop-landing/blog-section';
import FAQSection from '../desktop-landing/faq';
import CTASection from '../desktop-landing/cta-section';
import ContactFormSection from '../desktop-landing/contact-form-section';
import Footer from '../desktop-landing/footer';

function DesktopLanding() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
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

export default DesktopLanding;