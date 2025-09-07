import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  title?: string;
  icon?: IconType;
  variant?: 'default' | 'bordered';
}

function Card({ children, title, icon: Icon, variant = 'default' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 ${
        variant === 'bordered' ? 'border-2 border-teal-600' : ''
      }`}
    >
      {title && (
        <h3 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
          {Icon && <Icon className="text-teal-600 h-5 w-5" />}
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}

export default Card;