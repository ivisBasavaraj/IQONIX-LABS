import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'inverted' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  loading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-container disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'h-8 px-3 text-caption gap-1.5',
    md: 'h-11 px-5 text-btn gap-2',
    lg: 'h-12 px-6 text-btn gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-primary-container text-white shadow-md hover:bg-secondary-container hover:shadow-[0_4px_16px_rgba(23,105,224,0.28)] active:scale-[0.99]',
    secondary:
      'bg-surface-container-lowest text-primary-container border border-primary-container/20 hover:bg-on-tertiary-container hover:border-primary-container/40 shadow-sm',
    outline:
      'bg-transparent text-on-surface border border-primary-container/25 hover:bg-on-tertiary-container hover:text-primary-container',
    inverted:
      'bg-white text-on-surface hover:bg-on-tertiary-container hover:text-primary-container shadow-md font-semibold',
    ghost:
      'bg-transparent text-primary-container hover:bg-primary-container/10',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
};
