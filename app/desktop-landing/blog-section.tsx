import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, date, image, slug }) => (
  <div className="bg-white retro-card overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{excerpt}</p>
      <a href={`/blog/${slug}`} className="text-black underline font-bold">
        Read More →
      </a>
    </div>
  </div>
);

const BlogPreviewSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "5 Ways to Improve Your Website's Speed",
      excerpt: "Learn how to optimize your website's performance and improve user experience with these simple tips.",
      date: "March 10, 2025",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGOEY4RjgiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYwIiByeD0iOCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiNGMEYwRjAiLz4KICA8cGF0aCBkPSJNMTEwIDgwTDEyMCA5MEwxMzUgNzAiIHN0cm9rZT0iIzJEQkU2MCIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cmVjdCB4PSIxODAiIHk9IjYwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjE4MCIgeT0iODQiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPGxpbmUgeDE9IjQwIiB5MT0iMTQwIiB4Mj0iMzYwIiB5Mj0iMTQwIiBzdHJva2U9IiNFMEUwRTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjQwIiB5PSIxNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNGMEYwRjAiLz4KICA8cmVjdCB4PSI0MCIgeT0iMjA4IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjQwIiB5PSIyMzIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTIiIHJ4PSI2IiBmaWxsPSIjRjBGMEYwIi8+CiAgPGNpcmNsZSBjeD0iMzIwIiBjeT0iMjAwIiByPSI0MCIgZmlsbD0iI0ZGNzA3MCIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KICA8cGF0aCBkPSJNMzIwIDE4MEwzNDAgMjIwTDMwMCAyMjBMMzIwIDE4MFoiIGZpbGw9IiNGRjcwNzAiLz4KPC9zdmc+",
      slug: "improve-website-speed"
    },
    {
      title: "Why Every Small Business Needs a Website in 2025",
      excerpt: "Discover why having a professional website is more important than ever for small businesses.",
      date: "February 28, 2025",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGOEY4RjgiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYwIiByeD0iOCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iODAiIHJ4PSI0IiBmaWxsPSIjRjBGMEYwIi8+CiAgPHBhdGggZD0iTTYwIDgwTDgwIDYwTDEwMCA4MEwxMjAgNjBMMTQwIDgwTDE2MCA2MCIgc3Ryb2tlPSIjMkRCRTYwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxyZWN0IHg9IjIyMCIgeT0iNDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjRjBGMEYwIi8+CiAgPHJlY3QgeD0iMjIwIiB5PSI3MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI0YwRjBGMCIvPgogIDxyZWN0IHg9IjQwIiB5PSIxNDAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMSIgZmlsbD0iI0UwRTBFMCIvPgogIDxyZWN0IHg9IjQwIiB5PSIxNjAiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMyREJFNjAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxyZWN0IHg9IjQwIiB5PSIyMjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMyREJFNjAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjMyMCIgY3k9IjIyMCIgcj0iNDAiIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CiAgPHBhdGggZD0iTTMyMCAyMDBMMzQwIDI0MEwzMDAgMjQwTDMyMCAyMDBaIiBmaWxsPSIjRkZENzAwIi8+CiAgPHBhdGggZD0iTTI4MCAyMDBMMzIwIDE2MEwzNjAgMjAwIiBzdHJva2U9IiMyREJFNjAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPg==",
      slug: "small-business-website-importance"
    },
    {
      title: "SEO Basics: How to Get Found Online",
      excerpt: "A beginner's guide to search engine optimization that will help your website rank higher in search results.",
      date: "February 15, 2025",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGOEY4RjgiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYwIiByeD0iOCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8IS0tIFNlYXJjaCBJY29uIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIHN0cm9rZT0iIzJEQkU2MCIgc3Ryb2tlLXdpZHRoPSI4IiBmaWxsPSJub25lIi8+CiAgPGxpbmUgeDE9IjEzMCIgeTE9IjEzMCIgeDI9IjE2MCIgeTI9IjE2MCIgc3Ryb2tlPSIjMkRCRTYwIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwhLS0gUmFua2luZyBCYXJzIC0tPgogIDxyZWN0IHg9IjIyMCIgeT0iODAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGRkQ3MDAiLz4KICA8cmVjdCB4PSIyNjAiIHk9IjYwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkY3MDcwIi8+CiAgPHJlY3QgeD0iMzAwIiB5PSI0MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iIzJEQkU2MCIvPgogIDwhLS0gS2V5d29yZHMgLS0+CiAgPHJlY3QgeD0iNDAiIHk9IjIwMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiByeD0iMTAiIGZpbGw9IiNGMEYwRjAiLz4KICA8cmVjdCB4PSIxMzAiIHk9IjIwMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSIjRjBGMEYwIi8+CiAgPHJlY3QgeD0iMjYwIiB5PSIyMDAiIHdpZHRoPSI5MCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSIjRjBGMEYwIi8+CiAgPCEtLSBTRU8gVGV4dCAtLT4KICA8dGV4dCB4PSIxNzAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0VPPC90ZXh0Pgo8L3N2Zz4=",
      slug: "seo-basics-guide"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest From Our Blog</h2>
          <p className="max-w-2xl mx-auto">Tips, insights, and advice to help your business succeed online</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="/blog" className="inline-block px-6 py-2 bg-white font-bold border-2 border-black retro-btn">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;