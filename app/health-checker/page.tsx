import HealthCheckerForm from './components/HealthCheckerForm'
import LighthouseImportance from './components/LighthouseImportance'
import FloatingNav from '@/app/components/FloatingNav'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800/80 p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center pt-24 mb-6 bg-gradient-to-r from-blue-600 to-black dark:from-blue-400 dark:to-red-600 bg-clip-text text-transparent">
        Website Health Checker
      </h1>
      <HealthCheckerForm />
      <LighthouseImportance />
      <FloatingNav />
    </main>
  )
}

