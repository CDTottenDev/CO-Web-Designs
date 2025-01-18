import Link from 'next/link'
import { ThemeSwitch } from './ui/themeswitch'

export function Header() {
  return (
    <header className="fixed top-0 right-[12.5vw] w-[12.5vw] 
      
    z-50 animate-shadow rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-12 ">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}