
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const NavButton: React.FC<NavButtonProps> = ({ 
  icon, 
  label, 
  onClick, 
  className,
  variant = 'primary'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'hero-button group flex items-center justify-center gap-3 min-w-[240px] animate-scale stagger-item',
        variant === 'primary' 
          ? 'bg-gradient-to-r from-cs-blue-600 to-cs-purple-600 hover:from-cs-blue-700 hover:to-cs-purple-700' 
          : 'bg-gradient-to-r from-cs-indigo-500 to-cs-indigo-700 hover:from-cs-indigo-600 hover:to-cs-indigo-800',
        className
      )}
    >
      <span className={cn(
        'transition-transform duration-300 ease-in-out',
        isHovered ? 'translate-x-[-4px]' : ''
      )}>
        {icon}
      </span>
      <span className="font-medium text-base">{label}</span>
      <ArrowRight 
        className={cn(
          'h-4 w-4 transition-all duration-300 ease-in-out',
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        )} 
      />
    </button>
  );
};

export default NavButton;
