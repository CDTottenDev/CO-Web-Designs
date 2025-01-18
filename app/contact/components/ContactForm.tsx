'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitForm } from '../actions/submitForm'

export default function ContactForm() {
  const { pending } = useFormStatus()
  // const [state, formAction] = useFormState(submitForm, { message: '' })
  // const [isSubmitting, setIsSubmitting] = useState(false)

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   await formAction(new FormData(e.currentTarget))
  //   setIsSubmitting(false)
  // }

  return (
    <form action={submitForm} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Sending...' : 'Send Message'}
      </button>
      <div id="form-message" aria-live="polite" className="mt-4 text-center"></div>
    </form>
  )
}

