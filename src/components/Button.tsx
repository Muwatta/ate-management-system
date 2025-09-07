import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { IconType } from 'lucide-react';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  to?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  icon?: IconType;
  variant?: 'primary' | 'secondary' | 'gradient';
  isLoading?: boolean;
}

export function Button({ to, children, onClick, ariaLabel, icon: Icon, variant = 'primary', isLoading }: ButtonProps) {
  const handleClick = () => {
    toast.success(`Navigating to ${ariaLabel}!`);
    if (onClick) onClick();
  };

  const className = {
    primary: 'bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-50 hover:scale-105 transition transform duration-200 focus:ring-2 focus:ring-cyan-400',
    secondary: 'bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-300 hover:scale-105 transition transform duration-200 focus:ring-2 focus:ring-cyan-400',
    gradient: 'bg-gradient-to-r from-teal-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition transform duration-200 focus:ring-2 focus:ring-cyan-400',
  }[variant];

  return to ? (
    <Link to={to} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2 inline" /> : Icon && <Icon className="inline mr-2 h-5 w-5" />}
      {children}
    </Link>
  ) : (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="animate-spin h-5 w-5 mr-2 inline" /> : Icon && <Icon className="inline mr-2 h-5 w-5" />}
      {children}
    </motion.button>
  );
}
