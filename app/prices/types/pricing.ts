export interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    isMonthly: boolean;
    isActive: boolean;
    onClick: () => void;
    position: 'left' | 'right';
  }
  
  