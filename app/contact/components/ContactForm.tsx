'use client'

import { useFormStatus } from 'react-dom'

export default function ContactForm() {
  const { pending } = useFormStatus()

  return (
    <form 
      action="https://formsubmit.co/cdtottendev@gmail.com" 
      method="POST"
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block mb-2 font-bold text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border-2 border-black rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 font-bold text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border-2 border-black rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-bold text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-3 py-2 border-2 border-black rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
        ></textarea>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          type="submit"
          disabled={pending}
          className="bg-black text-white px-8 py-3 font-bold retro-btn border-2 border-black inline-block text-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      
      <div id="form-message" aria-live="polite" className="mt-4 text-center"></div>
    </form>
  )
}