import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'default' | 'bordered';
}

export function Card({ children, title, icon: Icon, variant = 'default' }: CardProps) {
  const className = {
    default: 'bg-white rounded-lg shadow-md p-6',
    bordered: 'bg-white rounded-lg border border-gray-200 shadow-md p-6',
  }[variant];

  return (
    <div className={className}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {Icon && <Icon className="h-6 w-6 text-teal-600" />}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="text-gray-600">{children}</div>;
}