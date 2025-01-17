import { motion } from 'framer-motion';
import { Package, Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isMonthly: boolean;
  isActive: boolean;
  onClick: () => void;
  position: 'left' | 'right';
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isMonthly,
  isActive,
  onClick,
  position,
}) => {
  const xPosition = position === 'left' ? '-85%' : '85%';
  const yPosition = position === 'left' ? '10%' : '-10%';
  const rotation = position === 'left' ? -5 : 5;

  return (
    <motion.div
      className={`absolute w-72 bg-white rounded-xl shadow-xl overflow-hidden ${
        isActive ? 'z-10' : 'z-0'
      }`}
      initial={{ x: xPosition, y: yPosition, rotate: rotation, opacity: 0.7 }}
      animate={{
        x: isActive ? '0%' : xPosition,
        y: isActive ? '0%' : yPosition,
        rotate: isActive ? 0 : rotation,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
    >
      <div className="p-6 bg-gradient-to-br from-red-600 to-red-200 text-white">
        <Package className="w-12 h-12 mb-4" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-4xl font-extrabold mb-1">{price}</p>
        {isMonthly && <p className="text-sm opacity-75">per month</p>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-purple-600">Features:</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

