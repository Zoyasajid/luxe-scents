import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-gold-500 hover:bg-gold-600 text-black transform hover:scale-105',
    secondary: 'bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black',
    outline: 'bg-transparent border border-charcoal-600 text-white hover:border-gold-500 hover:text-gold-500',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

