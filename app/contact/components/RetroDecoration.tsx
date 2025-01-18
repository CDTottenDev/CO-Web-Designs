export default function RetroDecoration() {
  return (
    <>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 animate-pulse animate-float-random-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50 animate-pulse animation-delay-2000 animate-float-random-2"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-100 rounded-full opacity-50 animate-pulse animation-delay-4000 animate-float-random-3"></div>
    </>
  )
}

