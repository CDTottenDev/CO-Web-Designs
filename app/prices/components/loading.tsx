import { Skeleton } from "@/app/prices/components/ui/skeleton"

export default function Loading() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-10 w-40 bg-yellow-300/50 mx-auto mb-6 border-2 border-black animate-pulse"></div>
          <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-black/10 border-2 border-black/30" />
          <Skeleton className="h-6 w-1/2 mx-auto bg-black/10 border-2 border-black/30" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[0, 1].map((i) => (
            <div key={i} className="border-2 border-black/30 retro-shadow bg-white/50 h-[600px] animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  )
}