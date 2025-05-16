import { Metadata } from 'next'
import ProcessTimeline from './components/process-timeline'
import { JsonLd } from 'react-schemaorg'
import { HowTo } from 'schema-dts'
import RetroBackground2 from '../components/RetroBackground2'
import { uniqueApproachMetadata } from '../how-we-work/components/UniqueApproachSection.metadata'
import UniqueApproachSection from '../how-we-work/components/UniqueApproachSection'
import FloatingNav from '../components/FloatingNav'


export const metadata: Metadata = {
  ...uniqueApproachMetadata,
  title: 'Our Web Design Process | C.D. Totten - Web Developer',
  description: 'Discover our transparent, client-focused web design process. From initial consultation to launch, see how we bring your vision to life.',
  openGraph: {
    title: 'Our Web Design Process | C.D. Totten - Web Developer',
    description: 'Discover our transparent, client-focused web design process. From initial consultation to launch, see how we bring your vision to life.',
    type: 'website',
    url: 'https://centralorgeonwebdesigns.com/process',
    images: [
      {
        url: 'https://centralorgeonwebdesigns.com/images/process-timeline.jpg',
        width: 1200,
        height: 630,
        alt: 'C.D. Totten - Web Developer Process Timeline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Web Design Process | C.D. Totten - Web Developer',
    description: 'Discover our transparent, client-focused web design process. From initial consultation to launch, see how we bring your vision to life.',
    images: ['https://centralorgeonwebdesigns.com/images/process-timeline.jpg'],
  },
}

export default function TimelinePage() {
  return (
    <>
      <JsonLd<HowTo>
        item={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Web Design Process",
          "description": "Our step-by-step web design process from initial consultation to launch and support.",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Discovery & Planning",
              "text": "We start with a detailed consultation to understand your goals, target audience, and project requirements."
            },
            {
              "@type": "HowToStep",
              "name": "Design Phase",
              "text": "Our designers create a visual concept that aligns with your brand."
            },
            {
              "@type": "HowToStep",
              "name": "Development",
              "text": "Our development team brings the design to life, ensuring a responsive, fast, and secure website."
            },
            {
              "@type": "HowToStep",
              "name": "Review & Testing",
              "text": "Rigorous testing ensures everything works perfectly."
            },
            {
              "@type": "HowToStep",
              "name": "Launch & Support",
              "text": "After a successful launch, we provide ongoing support and maintenance."
            }
          ]
        }}
      />
      <RetroBackground2>
        <main className="min-h-screen py-36 px-4 sm:px-6 lg:px-8 bg-white/35 dark:bg-gray-900/65">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
              Our Web Design Process
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A transparent journey from concept to launch
            </p>
          </header>
          <ProcessTimeline />
          <UniqueApproachSection />
          </div>
        </main>
      </RetroBackground2>
      <FloatingNav />
    </>
  )
}

