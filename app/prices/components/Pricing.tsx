import { useState } from 'react';
import { PricingCard } from './PricingCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fixedCostFeatures = [
  'Custom Website Design',
  'Up to 5 Pages',
  'Mobile Responsive',
  'SEO Optimization',
  '1 Round of Revisions',
];

const monthlyFeatures = [
  'Ongoing Website Maintenance',
  'Monthly Content Updates',
  '24/7 Support',
  'Performance Optimization',
  'Monthly Analytics Report',
];

export const Pricing: React.FC = () => {
  const [activeCard, setActiveCard] = useState<'fixed' | 'monthly' | null>(null);

  const toggleCard = (card: 'fixed' | 'monthly') => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center pt-12 mb-8">
        {"Our Pricing Plans".split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block bg-gradient-to-b from-red-900 to-red-600 bg-clip-text text-transparent"
            animate={{
              rotateX: [0, 360]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 5,
              repeatDelay: 10,
              ease: "linear"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      
      <div className="relative h-[calc(65vh)] max-w-7xl mx-auto flex items-center justify-center">
        <PricingCard
          title="Fixed Cost Plan"
          price="$1,999"
          features={fixedCostFeatures}
          isMonthly={false}
          isActive={activeCard === 'fixed'}
          onClick={() => toggleCard('fixed')}
          position="left"
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={() => toggleCard('fixed')}
              className="p-2 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition-colors fixed left-8 top-[80vh]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={() => toggleCard('monthly')} 
              className="p-2 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition-colors fixed right-8 top-[80vh]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        <PricingCard
          title="Monthly Plan"
          price="$299"
          features={monthlyFeatures}
          isMonthly={true}
          isActive={activeCard === 'monthly'}
          onClick={() => toggleCard('monthly')}
          position="right"
        />
      </div>
    </div>
  );
};

