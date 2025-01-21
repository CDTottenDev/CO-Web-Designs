'use client'

import { Code2, FileCheck, Layout, MessageSquare, Rocket } from 'lucide-react'
import CollapsibleSection from './collapsible-section'

const timelineSteps = [
  {
    title: 'Discovery & Planning',
    description: 'We start with a detailed consultation to understand your goals, target audience, and project requirements. Together, we\'ll create a strategic roadmap for your web presence.',
    icon: MessageSquare,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    details: [
      'Initial Consultation',
      'Project Scope Definition',
      'Timeline Planning'
    ]
  },
  {
    title: 'Design Phase',
    description: 'Our designers create a visual concept that aligns with your brand. We\'ll collaborate on the perfect look and feel for your website.',
    icon: Layout,
    color: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    details: [
      'Wireframe Creation',
      'Visual Design',
      'Design Review'
    ]
  },
  {
    title: 'Development',
    description: 'Our development team brings the design to life, ensuring a responsive, fast, and secure website that works flawlessly across all devices.',
    icon: Code2,
    color: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    details: [
      'Frontend Development',
      'Backend Integration',
      'Responsive Testing'
    ]
  },
  {
    title: 'Review & Testing',
    description: 'Rigorous testing ensures everything works perfectly. We\'ll review the site together and make any necessary adjustments.',
    icon: FileCheck,
    color: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    details: [
      'Quality Assurance',
      'Client Review',
      'Final Adjustments'
    ]
  },
  {
    title: 'Launch & Support',
    description: 'After a successful launch, we provide ongoing support and maintenance to ensure your website continues to perform optimally.',
    icon: Rocket,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    details: [
      'Site Launch',
      'Training Session',
      'Ongoing Support'
    ]
  }
]

export default function ProcessTimeline() {
  return (
    <section className="relative" aria-labelledby="process-timeline-heading">
      <h2 id="process-timeline-heading" className="sr-only">Web Design Process Timeline</h2>
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
      
      <ol className="relative z-10">
        {timelineSteps.map((step, index) => (
          <li key={step.title}>
            <CollapsibleSection
              title={step.title}
              description={step.description}
              index={index}
            >
              <div className={`mb-6 p-4 rounded-lg border  ${step.borderColor} ${step.color}`}>
                <h4 className="flex justify-center items-center">
                  <span className="text-sm text-gray-700">{step.title}</span>
                </h4>
                <ul className="flex flex-col sm:flex-row gap-2 items-center">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <div className={` rounded-full ${step.iconColor}`} aria-hidden="true" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center mb-6">
                <div 
                  className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center relative z-10 mx-auto`}
                  aria-hidden="true"
                >
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>
              </div>
              
            </CollapsibleSection>
          </li>
        ))}
      </ol>
    </section>
  )
}

