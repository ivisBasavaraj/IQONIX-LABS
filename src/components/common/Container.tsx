import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1360px] mx-auto px-5 md:px-10 lg:px-20 ${className}`}>
      {children}
    </div>
  );
};
