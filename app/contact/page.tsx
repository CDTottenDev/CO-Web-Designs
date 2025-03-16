import ContactForm from './components/ContactForm'
import FloatingNav from '@/app/components/FloatingNav'

export default function ContactPage() {
  return (
    <>
    <FloatingNav />
    <main className="py-16 md:py-24 pt-[15vh] bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-lg mx-auto">
          <div className="inline-block bg-yellow-300 px-3 py-1 mb-6 border-2 border-black retro-shadow mx-auto">
            <span className="text-sm">Get in touch with us</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Contact <span className="underline decoration-red-500">Us</span>
          </h1>
          
          <div className="bg-white p-8 border-2 border-black retro-shadow rounded-none relative">
            <div className="absolute -top-5 -right-5 bg-red-500 text-white p-2 z-10 rotate-6 border-2 border-black">
              <span className="font-bold">We respond within 24hrs!</span>
            </div>
            
            <p className="mb-6 text-center text-gray-600">
              We'd love to hear from you. Let's create something amazing together!
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
    </>
  )
}