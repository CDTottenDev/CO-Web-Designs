import { FC } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  details?: string[]
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon, details }) => {
  return (
    <div className="bg-orange-100 dark:bg-slate-700 rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
      <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-orange-700 dark:text-orange-300">{title}</h3>
      <p className="mb-4 text-orange-800 dark:text-orange-200">{description}</p>
      {details && details.length > 0 && (
        <ul className="list-disc list-inside text-orange-700 dark:text-orange-200">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard

