import { Skeleton } from "@/app/prices/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-emerald-800/20 dark:bg-emerald-200/20" />
        <Skeleton className="h-6 w-1/2 mx-auto bg-emerald-800/20 dark:bg-emerald-200/20" />
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[0, 1].map((i) => (
          <Skeleton key={i} className="h-[600px] w-full bg-emerald-800/20 dark:bg-emerald-200/20" />
        ))}
      </div>
    </div>
  )
}

