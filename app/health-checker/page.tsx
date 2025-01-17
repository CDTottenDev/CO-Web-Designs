import HealthCheckerForm from './components/HealthCheckerForm'
import LighthouseImportance from './components/LighthouseImportance'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Website Health Checker</h1>
      <HealthCheckerForm />
      <LighthouseImportance />
    </main>
  )
}

