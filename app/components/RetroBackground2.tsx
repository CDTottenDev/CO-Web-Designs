import React from 'react';

interface RetroBackgroundProps {
  children: React.ReactNode;
}

const RetroBackground2: React.FC<RetroBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3e6d8] to-[#ffcc9c]" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cfilter id='grunge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23grunge)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default RetroBackground2;

