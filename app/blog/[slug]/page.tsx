import type { BlogPost } from "@/app/blog/types/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/app/blog/components/ui/badge"
import { Clock } from "lucide-react"

const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  // Simulate a database call with a delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const samplePosts = [
    {
      id: "1",
      title: "10 Essential Web Design Trends for 2025",
      excerpt: "Discover the latest web design trends that will dominate the digital landscape in 2025...",
      date: "2025-01-19",
      category: "Design Trends",
      slug: "web-design-trends-2025",
      readingTime: "5 min read",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIyMCIgZmlsbD0iIzFFMUUyRSIvPgogIDxyZWN0IHg9IjIwIiB5PSI1MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyMDAiIHJ4PSIxNSIgZmlsbD0iIzJFMkUzRSIgc3Ryb2tlPSIjMDBENDNGIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjgwIiByPSIxNSIgZmlsbD0iIzAwRDQzRiIvPgogIDxyZWN0IHg9IjgwIiB5PSI3MCIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjgiLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjEzMCIgcj0iMTAiIGZpbGw9IiNGRkQ3MDAiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjciLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjE3MCIgcj0iMTAiIGZpbGw9IiNGRjZCNkIiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTYwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjRkZGIiBvcGFjaXR5PSIwLjciLz4KICA8cmVjdCB4PSI1MCIgeT0iMjIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzAwRDQzRiIvPgogIDx0ZXh0IHg9IjUwIiB5PSIyNTAiIGZpbGw9IiNGRkYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiPjEwIEVzc2VudGlhbCBXZWIgRGVzaWduIFRyZW5kcyBmb3IgMjAyNTwvdGV4dD4KPC9zdmc+",
    },
    {
      id: "2",
      title: "Web Design Trends for 2024",
      excerpt: "Explore the web design trends that shaped the digital landscape in 2024...",
      date: "2024-01-19",
      category: "Design Trends",
      slug: "web-design-trends-2024",
      readingTime: "5 min read",
      image: "https://sjc.microlink.io/xxZYhrUwwPvw21Z3fygaUH1G1sAd953Ul92Rfjp-JadMNtLsBNz4HZUCKdHr950BSykME0INZD31ef_XeG08_w.jpeg",
    }
  ];
  
  return samplePosts.find(post => post.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Ensure params is properly awaited
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl dark:bg-gray-900">
      <article className="prose prose-sm sm:prose-lg max-w-none dark:prose-invert">
        {/* Header Section */}
        <header className="mb-8 sm:mb-16">
          <div className="space-y-2 sm:space-y-4 text-center">
            <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
              <span>{post.date}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime}
              </span>
            </div>
          </div>
          <div className="mt-6 sm:mt-10 aspect-[16/9] relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg w-full max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 dark:shadow-gray-800/20">
            <div className="relative h-0 pb-[56.25%]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 sm:gap-12">
          <div>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 dark:text-gray-300">
              As we navigate through 2025, the web design landscape continues to evolve, embracing new technologies and user expectations. To keep your website current and engaging, consider incorporating these ten essential web design trends:
            </p>

            <div className="space-y-8 sm:space-y-12">
              {/* Trend 1 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">1. Dark Mode Dominance</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Dark mode has transitioned from a niche preference to a mainstream design choice. Its benefits include reduced eye strain, improved readability in low-light environments, and energy savings on OLED screens. Designers are leveraging dark backgrounds to make vibrant elements pop, creating a striking visual contrast.
                </p>
              </section>

              {/* Trend 2 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">2. Neumorphism</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Neumorphism combines skeuomorphism and flat design, creating interfaces that mimic physical objects with subtle shadows and highlights. This approach offers a soft, extruded plastic look, providing a tactile experience that enhances user interaction.
                </p>
              </section>

              {/* Trend 3 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">3. Voice User Interface (VUI) Integration</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  With the rise of voice-activated assistants, integrating VUIs into web design has become essential. This trend focuses on creating seamless voice interactions, allowing users to navigate and control websites through voice commands, enhancing accessibility and user convenience.
                </p>
              </section>

              {/* Trend 4 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">4. Augmented Reality (AR) Experiences</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  AR technology is transforming web interactions by overlaying digital information onto the physical world. Websites are incorporating AR to provide immersive experiences, such as virtual try-ons for retail or interactive 3D models, enhancing user engagement and satisfaction.
                </p>
              </section>

              {/* Trend 5 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">5. Minimalistic Design with Bold Typography</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Minimalism remains a strong trend, emphasizing simplicity and functionality. Designers are pairing clean layouts with bold, expressive typography to convey messages effectively, ensuring that content stands out without overwhelming the user.
                </p>
              </section>

              {/* Trend 6 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">6. Micro-Interactions</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Micro-interactions are subtle animations or responses that occur in response to user actions, such as hovering over a button or receiving a notification. These small details enhance user experience by providing feedback and making interfaces feel more intuitive and responsive.
                </p>
              </section>

              {/* Trend 7 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">7. Asymmetrical Layouts</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Breaking away from grid-based designs, asymmetrical layouts offer a dynamic and unconventional aesthetic. This approach captures user attention and encourages exploration, making websites more engaging and memorable.
                </p>
              </section>

              {/* Trend 8 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">8. Advanced Scroll Animations</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Scroll animations have evolved, becoming more sophisticated and integral to storytelling. Designers are using parallax effects, dynamic content loading, and creative transitions to guide users through a narrative, making the browsing experience more interactive and enjoyable.
                </p>
              </section>

              {/* Trend 9 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">9. Custom Illustrations and 3D Graphics</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom visuals, including hand-drawn illustrations and 3D graphics, are gaining popularity as they add personality and uniqueness to websites. These elements help brands stand out and create a memorable visual identity, moving away from generic stock imagery.
                </p>
              </section>

              {/* Trend 10 */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white">10. Sustainability and Eco-Friendly Design</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  As environmental awareness grows, sustainable web design practices are becoming a priority. This includes optimizing websites for energy efficiency, using eco-friendly hosting services, and designing with minimalism to reduce data transfer and energy consumption.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 sm:space-y-8">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg dark:bg-gray-800">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 dark:text-white">Key Takeaways</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Dark mode improves user experience</li>
                <li>• Neumorphism enhances tactile feedback</li>
                <li>• VUI integration boosts accessibility</li>
                {/* Add more key points */}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg dark:bg-gray-800">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 dark:text-white">About the Author</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <p className="font-medium dark:text-white">Colt Totten</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
} 