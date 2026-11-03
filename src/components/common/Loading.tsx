import React from 'react';

export const Loading: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-primary-container/20 border-t-primary-container animate-spin" />
      </div>
      <p className="mt-4 text-sm font-medium text-on-surface-variant">{message}</p>
    </div>
  );
};
