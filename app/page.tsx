'use client'

import dynamic from 'next/dynamic'
import MobileLanding from './components/MobileLanding'
import FloatingNav from './components/FloatingNav'
const DesktopLanding = dynamic(() => import('./components/DesktopLanding'), {
  ssr: false
})

export default function Home() {
  return (
    <div className="relative">
      <FloatingNav />
      {/* Mobile - always rendered */}
      <div className="block md:hidden">
        <MobileLanding />
      </div>
      
      {/* Desktop - lazy loaded */}
      <div className="hidden md:block">
        <DesktopLanding />
      </div>
    </div>
  )
}

