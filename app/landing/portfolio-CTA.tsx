import React from 'react';

const PortfolioCTA = () => {
  return (
    <div className="flex flex-col items-center my-12 relative">
      {/* Retro decorative elements */}
      <div className="absolute top-20 left-60 transform rotate-12 hidden md:block">
        <div className="text-xl font-bold text-yellow-500">
          ★★★ LOOK HERE ★★★
        </div>
        <div className="mt-2 text-sm text-gray-400 italic">
          (because clearly you need guidance)
        </div>
      </div>
      
      <div className="absolute top-40 right-80 transform -rotate-12 hidden md:block">
        <div className="text-lg font-bold text-purple-500">
          ☞ CLICK NOW ☜
        </div>
        <div className="mt-1 text-xs text-gray-400">
          or don't. I'm a sign, not a cop.
        </div>
      </div>
      
      {/* Main CTA container */}
      <div className="bg-gray-900 p-6 border-4 border-orange-500 rounded-lg shadow-lg max-w-xl w-full relative overflow-hidden">
        {/* Retro TV static effect */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+Cg==')"}}></div>
        
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-green-400 mb-2 blink">ATTENTION EARTHLING</h2>
          <p className="text-gray-300">Your internet journey has led you here. Congratulations on making at least one good decision today.</p>
        </div>
        
        <div className="flex justify-center mb-4">
          <a 
            href="https://www.cdtottendev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-xl font-bold text-black bg-yellow-400 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-300 relative overflow-hidden"
            style={{textShadow: "2px 2px 0px rgba(0,0,0,0.2)"}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-50 z-0"></div>
            <span className="relative z-10">EXPLORE MY PORTFOLIO</span>
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm italic">
          <p>Warning: May contain actual talent and creativity.</p>
          <p className="mt-1">Side effects include: inspiration, job offers, and mild jealousy.</p>
        </div>
      </div>
      
      {/* Bottom arrow */}
      <div className="mt-8 text-center">
        <div className="text-orange-500 text-2xl animate-bounce">⬆</div>
        <p className="text-gray-500 mt-2 max-w-xs mx-auto">This button is literally your only hope for salvation from mediocre web design. No pressure.</p>
      </div>
    </div>
  );
};

export default PortfolioCTA;