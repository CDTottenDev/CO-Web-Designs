import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow -rotate-3">
              <span className="text-sm font-bold">Warning: Extreme Talent Ahead</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              You've Found Your <span className="underline decoration-red-500">Website Wizard</span>
            </h1>
            <p className="text-lg mb-8">
              Professional web design with 95% less boring. Available nationwide and guaranteed to include excessive creativity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative inline-block group">
                <a href="/contact" className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center hover:bg-gray-800 transform transition-transform hover:-translate-y-1">
                Hire Me Now—Before I Start Charging by the Minute! →
                </a>
                <div className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rotate-12 border-2 border-black">
                  <span className="text-xs font-bold">95% Less Boring!</span>
                </div>
              </div>
              <a href="/prices" className="bg-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center">
                See Pricing
              </a>
            </div>
            <div className="mt-4 bg-white p-2 inline-block border-2 border-black retro-shadow rotate-2">
              <span className="text-sm font-bold">* Side effects may include: increased revenue</span>
            </div>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-10">
            <div className="relative">
              <div className="absolute -top-5 -left-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black">
                <span className="price-tag font-bold">Starting at just $99!</span>
              </div>
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIEJhY2tncm91bmQgVGFnIFNoYXBlIC0tPgogIDxwYXRoIGQ9Ik01MCw1MCBMMzAwLDUwIEMzMzAsNTAgMzUwLDcwIDM1MCwxMDAgTDM1MCwyMDAgQzM1MCwyMzAgMzMwLDI1MCAzMDAsMjUwIEw1MCwyNTAgQzIwLDI1MCAwLDIzMCAwLDIwMCBMMCwxMDAgQzAsNzAgMjAsNTAgNTAsNTAgWiIgZmlsbD0iI2ZmNmIzNSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiLz4KICAKICA8IS0tIFRhZyBIb2xlIC0tPgogIDxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjE1IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgCiAgPCEtLSBTdHJpbmcgLS0+CiAgPHBhdGggZD0iTTc1LDYwIFE3MCw0MCA2MCwzMCBRNTAsMjAgMzAsMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAKICA8IS0tIFJhZGlhbCBMaW5lcyBmb3IgUmV0cm8gRWZmZWN0IC0tPgogIDxwYXRoIGQ9Ik02MCwxMzAgTDM0MCwxMzAiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI1LDMiLz4KICA8cGF0aCBkPSJNNjAsMTcwIEwzNDAsMTcwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNSwzIi8+CiAgPHBhdGggZD0iTTYwLDIxMCBMMzQwLDIxMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjUsMyIvPgogIAogIDwhLS0gRG9sbGFyIFNpZ24gLS0+CiAgPHRleHQgeD0iMTAwIiB5PSIxODAiIGZvbnQtZmFtaWx5PSJJbXBhY3QsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiI+JDwvdGV4dD4KICAKICA8IS0tIDk5IE51bWJlcnMgLS0+CiAgPHRleHQgeD0iMTYwIiB5PSIxODAiIGZvbnQtZmFtaWx5PSJJbXBhY3QsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiI+OTk8L3RleHQ+CiAgCiAgPCEtLSBTdGFyYnVyc3QgRWZmZWN0IC0tPgogIDxwYXRoIGQ9Ik0yODAsNzAgTDI5MCw4NSBMMzEwLDgwIEwzMDAsOTUgTDMxNSwxMTAgTDI5NSwxMDUgTDI4NSwxMjUgTDI4MCwxMDUgTDI2MCwxMDAgTDI4MCw5MCBaIiBmaWxsPSIjZmZmZjY2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgogIAogIDwhLS0gU0FMRSB0ZXh0IC0tPgogIDx0ZXh0IHg9IjI3NSIgeT0iMTAwIiBmb250LWZhbWlseT0iSW1wYWN0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMzMzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTUsMjc1LDEwMCkiPlNBTEUhPC90ZXh0PgogIAogIDwhLS0gU2hhZG93IC0tPgogIDxwYXRoIGQ9Ik01NSwyNTUgTDMwNSwyNTUgQzMzNSwyNTUgMzU1LDIzNSAzNTUsMjA1IEwzNTUsMTA1IEMzNTUsNzUgMzM1LDU1IDMwNSw1NSBMNTUsNTUgQzI1LDU1IDUsNzUgNSwxMDUgTDUsMjA1IEM1LDIzNSAyNSwyNTUgNTUsMjU1IFoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LDUpIi8+Cjwvc3ZnPg=="
                alt="$99 Sale Tag" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;