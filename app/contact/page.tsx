import ContactForm from './components/ContactForm'
import RetroDecoration from './components/RetroDecoration'
import RetroBackground from '../components/RetroBackground'

export default function ContactPage() {
  return (
    <RetroBackground>
      <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
        <RetroDecoration />
        <div className="w-full max-w-lg z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-teal-700 dark:text-teal-300">Contact Us</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Let's create something amazing together!
          </p>
          <ContactForm />
          </div>
        </div>
      </main>
    </RetroBackground>
  )
}

