import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay?: number;
  iconBgColor: string;
  iconTextColor: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  delay = 0,
  iconBgColor,
  iconTextColor
}: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 reveal card"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={`w-14 h-14 rounded-lg ${iconBgColor} flex items-center justify-center mb-6`}>
        <div className={`h-8 w-8 ${iconTextColor}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[hsl(var(--jupita-gray))] mb-6">{description}</p>
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--jupita-success))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-[hsl(var(--jupita-gray))]">{benefit}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
