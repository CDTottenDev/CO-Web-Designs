'use client';

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-2">CO<span className="text-red-500">WD</span></h1>
          <div className="hidden md:block text-xs">Central Oregon Web Designs</div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="/services" className="nav-link py-1">Services</a>
          <a href="/prices" className="nav-link py-1 font-bold">Pricing</a>
          <a href="/about" className="nav-link py-1">About</a>
          <a href="/before-after" className="nav-link py-1">Before & After</a>
          <a href="https://cdtottendev.com" className="nav-link py-1">Portfolio</a>
          <a href="/blog" className="nav-link py-1">Blog</a>
          <a href="/contact" className="nav-link py-1 bg-black text-white px-3 retro-shadow">Contact</a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full border-t-2 border-black`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            <a href="/services" className="py-2 border-b border-gray-200">Services</a>
            <a href="/prices" className="py-2 border-b border-gray-200 font-bold">Pricing</a>
            <a href="/about" className="py-2 border-b border-gray-200">About</a>
            <a href="/portfolio" className="py-2 border-b border-gray-200">Before & After</a>
            <a href="/blog" className="py-2 border-b border-gray-200">Blog</a>
            <a href="/contact" className="py-2 bg-black text-white px-3 inline-block retro-shadow">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;