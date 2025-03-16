import type { BlogPost, Category } from '@/app/blog/types/blog';

// All blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Web Design Trends for 2025",
    excerpt: "Discover the latest web design trends that will dominate the digital landscape in 2025...",
    date: "2024-01-19",
    category: "Design Trends",
    readingTime: "5 min read",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIyMCIgZmlsbD0iIzFFMUUyRSIvPgogIDxyZWN0IHg9IjIwIiB5PSI1MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyMDAiIHJ4PSIxNSIgZmlsbD0iIzJFMkUzRSIgc3Ryb2tlPSIjMDBENDNGIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjgwIiByPSIxNSIgZmlsbD0iIzAwRDQzRiIvPgogIDxyZWN0IHg9IjgwIiB5PSI3MCIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjgiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjEzMCIgcj0iMTAiIGZpbGw9IiNGRkQ3MDAiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjciLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjE3MCIgcj0iMTAiIGZpbGw9IiNGRjZCNkIiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTYwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjciLz4KICA8cmVjdCB4PSI1MCIgeT0iMjIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzAwRDQzRiIvPgogIDx0ZXh0IHg9IjUwIiB5PSIyNTAiIGZpbGw9IiNGRkYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiPjEwIEVzc2VudGlhbCBXZWIgRGVzaWduIFRyZW5kcyBmb3IgMjAyNTwvdGV4dD4KPC9zdmc+",
    slug: "web-design-trends-2025",
    content: `
      <p class="text-lg border-l-4 border-yellow-300 pl-4 mb-8 text-gray-800">
        As we navigate through 2025, the web design landscape continues to evolve, embracing new technologies and user expectations. To keep your website current and engaging, consider incorporating these ten essential web design trends:
      </p>

      <section class="border-2 border-black p-6 retro-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-red-500">1. Dark Mode Dominance</h2>
        <p class="text-gray-800">
          Dark mode has transitioned from a niche preference to a mainstream design choice. Its benefits include reduced eye strain, improved readability in low-light environments, and energy savings on OLED screens.
        </p>
      </section>

      <section class="border-2 border-black p-6 retro-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-red-500">2. Neumorphism</h2>
        <p class="text-gray-800">
          Neumorphism combines skeuomorphism and flat design, creating interfaces that mimic physical objects with subtle shadows and highlights. This approach offers a soft, extruded plastic look, providing a tactile experience.
        </p>
      </section>

      <section class="border-2 border-black p-6 retro-shadow bg-white mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-black mb-4 underline decoration-red-500">3. Voice User Interface Integration</h2>
        <p class="text-gray-800">
          With the rise of voice-activated assistants, integrating VUIs into web design has become essential. This trend focuses on creating seamless voice interactions for enhanced accessibility.
        </p>
      </section>
    `,
  },
  {
    id: "2",
    title: "5 Ways to Improve Your Website's Speed",
    excerpt: "Learn how to optimize your website's performance and improve user experience with these simple tips.",
    date: "2025-03-10",
    category: "Performance",
    readingTime: "4 min read",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGOEY4RjgiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYwIiByeD0iOCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiNGMEYwRjAiLz4KICA8cGF0aCBkPSJNMTEwIDgwTDEyMCA5MEwxMzUgNzAiIHN0cm9rZT0iIzJEQkU2MCIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cmVjdCB4PSIxODAiIHk9IjYwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjE4MCIgeT0iODQiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPGxpbmUgeDE9IjQwIiB5MT0iMTQwIiB4Mj0iMzYwIiB5Mj0iMTQwIiBzdHJva2U9IiNFMEUwRTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjQwIiB5PSIxNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNGMEYwRjAiLz4KICA8cmVjdCB4PSI0MCIgeT0iMjA4IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjQwIiB5PSIyMzIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPGNpcmNsZSBjeD0iMzIwIiBjeT0iMjAwIiByPSI0MCIgZmlsbD0iI0ZGNzA3MCIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KICA8cGF0aCBkPSJNMzIwIDE4MEwzNDAgMjIwTDMwMCAyMjBMMzIwIDE4MFoiIGZpbGw9IiNGRjcwNzAiLz4KPC9zdmc+",
    slug: "improve-website-speed",
    content: `
      <div class="mb-10">
        <p class="text-lg mb-4">
          In today's fast-paced digital world, website speed has become more critical than ever. According to recent studies, 
          47% of users expect websites to load in under 2 seconds, and 40% will abandon a site that takes more than 3 seconds to load.
        </p>
        <p class="text-lg">
          Let's dive into five proven strategies that can dramatically improve your website's loading speed and performance.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Tip #1</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Optimize Your Images
          </h2>
        </div>
        <p class="mb-4">
          Unoptimized images are often the biggest culprits behind slow-loading websites. The latest WebP format offers 
          26% smaller file sizes compared to PNGs and 25-34% smaller files than JPEGs.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Use modern formats like WebP and AVIF for better compression</li>
          <li>Implement responsive images using srcset attributes</li>
          <li>Consider lazy loading images that appear below the fold</li>
          <li>Use a CDN specifically optimized for image delivery</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Tip #2</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Leverage Browser Caching
          </h2>
        </div>
        <p class="mb-4">
          Browser caching stores webpage resources locally in a user's browser, reducing load times for returning visitors. 
          Implementing proper cache headers can reduce page load times by up to 70%.
        </p>
      </div>
      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Tip #3</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Minimize HTTP Requests
          </h2>
        </div>
        <p class="mb-4">
          Each element on your webpage requires an HTTP request, and too many can significantly slow down your site. 
          Research shows that reducing HTTP requests can improve load times by up to 30%.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Combine multiple CSS files into one</li>
          <li>Use CSS sprites for icons and small images</li>
          <li>Implement code splitting for JavaScript files</li>
          <li>Remove unnecessary plugins and third-party scripts</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Tip #4</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Use a Content Delivery Network (CDN)
          </h2>
        </div>
        <p class="mb-4">
          A CDN distributes your website across multiple servers worldwide, reducing the physical distance between users and your server. 
          This can decrease load times by up to 50% and handle traffic spikes more efficiently.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Choose a CDN with points of presence near your target audience</li>
          <li>Enable HTTP/3 and QUIC protocols for faster connections</li>
          <li>Implement edge caching for dynamic content</li>
          <li>Use a CDN that offers image optimization services</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Tip #5</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Optimize Your JavaScript and CSS
          </h2>
        </div>
        <p class="mb-4">
          Unoptimized code can significantly slow down your website. Minifying and compressing your JavaScript and CSS files 
          can reduce their size by up to 60%, leading to faster load times.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Minify CSS, JavaScript, and HTML files</li>
          <li>Use asynchronous loading for non-critical JavaScript</li>
          <li>Remove unused CSS and JavaScript</li>
          <li>Consider using modern CSS frameworks with tree-shaking</li>
        </ul>
        <p class="mt-6 text-lg font-bold">
          Implementing these five strategies can dramatically improve your website's performance, leading to better user experience, 
          higher conversion rates, and improved search engine rankings.
        </p>
      </div>
    `,
  },
  {
    id: "seo-basics-2025",
    title: "SEO Basics: How to Get Found Online",
    excerpt: "A beginner's guide to search engine optimization that will help your website rank higher in search results.",
    date: "February 15, 2025",
    category: "SEO",
    readingTime: "8 min read",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGOEY4RjgiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYwIiByeD0iOCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiNGMEYwRjAiLz4KICA8cGF0aCBkPSJNMTEwIDgwTDEyMCA5MEwxMzUgNzAiIHN0cm9rZT0iIzJEQkU2MCIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cmVjdCB4PSIxODAiIHk9IjYwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjE4MCIgeT0iODQiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPGxpbmUgeDE9IjQwIiB5MT0iMTQwIiB4Mj0iMzYwIiB5Mj0iMTQwIiBzdHJva2U9IiNFMEUwRTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjQwIiB5PSIxNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNGMEYwRjAiLz4KICA8cmVjdCB4PSI0MCIgeT0iMjA4IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjQwIiB5PSIyMzIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPGNpcmNsZSBjeD0iMzIwIiBjeT0iMjAwIiByPSI0MCIgZmlsbD0iI0ZGNzA3MCIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KICA8cGF0aCBkPSJNMzIwIDE4MEwzNDAgMjIwTDMwMCAyMjBMMzIwIDE4MFoiIGZpbGw9IiNGRjcwNzAiLz4KPC9zdmc+",
    slug: "seo-basics-2025",
    content: `
      <div class="mb-10">
        <p class="text-lg mb-4">
          In 2025, search engine optimization (SEO) remains a crucial aspect of digital marketing. With over 90% of online experiences 
          beginning with a search engine, ensuring your website ranks well has never been more important.
        </p>
        <p class="text-lg">
          This guide will walk you through the fundamental SEO principles that will help your website gain visibility in search results.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Key Element #1</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Keyword Research & Implementation
          </h2>
        </div>
        <p class="mb-4">
          Modern keyword research goes beyond just finding popular search terms. It's about understanding search intent and creating 
          content that matches what users are actually looking for.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Use AI-powered keyword research tools for better insights</li>
          <li>Focus on long-tail keywords with clear intent</li>
          <li>Implement keywords naturally in your content</li>
          <li>Consider voice search optimization</li>
        </ul>
      </div>

      <div class="mb-16">
        <div class="relative mb-6">
          <div class="absolute -top-4 -left-4 bg-red-500 text-white p-2 z-10 rotate-3 border-2 border-black">
            <span class="font-bold">Key Element #2</span>
          </div>
          <h2 class="text-2xl font-bold border-2 border-black p-4 bg-white retro-shadow">
            Technical SEO Fundamentals
          </h2>
        </div>
        <p class="mb-4">
          Technical SEO ensures search engines can effectively crawl and index your website. With the latest updates to search 
          algorithms, factors like Core Web Vitals and mobile optimization are more important than ever.
        </p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Optimize for mobile-first indexing</li>
          <li>Improve Core Web Vitals scores</li>
          <li>Implement proper schema markup</li>
          <li>Ensure clean URL structure</li>
        </ul>
      </div>
    `
  },
  // Add more posts here
];

// Generate categories from blog posts
export const getCategories = (): Category[] => {
  const categoryMap = new Map<string, number>();
  
  blogPosts.forEach(post => {
    const currentCount = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, currentCount + 1);
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }));
};

// Get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
}; 