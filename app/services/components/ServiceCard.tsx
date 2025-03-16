import { FC } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  details?: string[]
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon, details }) => {
  return (
    <div className="bg-white border-2 border-black retro-shadow p-6 transition-transform hover:translate-y-1 hover:translate-x-1 hover:shadow-sm">
      <div className="inline-block bg-yellow-300 p-3 mb-4 border-2 border-black retro-shadow">
        <span className="text-4xl" aria-hidden="true">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold mb-2 underline decoration-red-500">{title}</h3>
      <p className="mb-4 text-black">{description}</p>
      {details && details.length > 0 && (
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-black text-white w-5 h-5 flex items-center justify-center mr-3 mt-1 font-bold border-2 border-black flex-shrink-0">
                ✓
              </div>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard