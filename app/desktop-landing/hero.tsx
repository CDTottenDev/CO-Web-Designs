import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow">
              <span className="text-sm">We build websites that work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Websites that <span className="underline decoration-red-500">convert</span> visitors into customers
            </h1>
            <p className="text-lg mb-8">
              Professional web design services at prices that make sense for your business. Available nationwide and beyond.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/contact" className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center">
                Get Started
              </a>
              <a href="/prices" className="bg-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center">
                See Pricing
              </a>
            </div>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-10">
            <div className="relative">
              <div className="absolute -top-5 -left-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black">
                <span className="price-tag font-bold">Starting at just $150!</span>
              </div>
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGRkZGRkYiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI1NjAiIGhlaWdodD0iMzYwIiByeD0iOCIgZmlsbD0iI0Y4RjhGOCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8IS0tIFdlYnNpdGUgTW9ja3VwIC0tPgogIDxyZWN0IHg9IjYwIiB5PSI2MCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyODAiIHJ4PSI0IiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjYwIiB5PSI2MCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzAwMDAwMCIvPgogIDxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjYiIGZpbGw9IiNGRjVGNTYiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNiIgZmlsbD0iI0ZGQkQyRSIvPgogIDxjaXJjbGUgY3g9IjEyMCIgY3k9IjgwIiByPSI2IiBmaWxsPSIjMjdDOTNGIi8+CiAgPCEtLSBQcmljZSBUYWcgLS0+CiAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoLTEyLCAzMDAsIDE4MCkiPgogICAgPHJlY3QgeD0iMjIwIiB5PSIxNDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iODAiIGZpbGw9IiNGRjcwNzAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIyMjAiIGN5PSIxODAiIHI9IjEwIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzAwIiB5PSIxODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPiQxNTA8L3RleHQ+CiAgICA8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5TVEFSVEVOIE5PVyE8L3RleHQ+CiAgPC9nPgogIDwhLS0gTmF2aWdhdGlvbiBCYXIgLS0+CiAgPHJlY3QgeD0iMTAwIiB5PSIxMjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjAiIGZpbGw9IiNGMEYwRjAiLz4KICA8IS0tIEhlcm8gU2VjdGlvbiAtLT4KICA8cmVjdCB4PSIxMDAiIHk9IjE2MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzAwMDAwMCIvPgogIDxyZWN0IHg9IjEwMCIgeT0iMjEwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRjBGMEYwIi8+CiAgPHJlY3QgeD0iMTAwIiB5PSIyMzAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAiIGZpbGw9IiNGMEYwRjAiLz4KICA8cmVjdCB4PSIxMDAiIHk9IjI1MCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjEwMCIgeT0iMjgwIiB3aWR0aD0iODAiIGhlaWdodD0iMzAiIGZpbGw9IiNGRkQ3MDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHJlY3QgeD0iMTkwIiB5PSIyODAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+" 
                alt="Website mockup" 
                className="border-2 border-black retro-shadow relative z-0" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;