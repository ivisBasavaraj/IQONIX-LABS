import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  inverted?: boolean;
  align?: 'left' | 'center' | 'between';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  inverted = false,
  align = 'between',
  className = '',
  action,
}) => {
  if (align === 'center') {
    return (
      <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-12 ${className}`}>
        {tag && (
          <span
            className={`text-caption-caps font-bold block mb-2 ${
              inverted ? 'text-primary-fixed' : 'text-primary'
            }`}
          >
            {tag}
          </span>
        )}
        <h2
          className={`text-section-title font-semibold tracking-tight ${
            inverted ? 'text-white' : 'text-on-surface'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-3 text-body max-w-xl mx-auto leading-relaxed ${
              inverted ? 'text-on-primary-container/80' : 'text-on-surface-variant'
            }`}
          >
            {description}
          </p>
        )}
        {action && <div className="mt-5">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 ${className}`}
    >
      <div>
        {tag && (
          <span
            className={`text-caption-caps font-bold block mb-1.5 ${
              inverted ? 'text-primary-fixed' : 'text-primary'
            }`}
          >
            {tag}
          </span>
        )}
        <h2
          className={`text-section-title font-semibold tracking-tight ${
            inverted ? 'text-white' : 'text-on-surface'
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-body-sm sm:text-body max-w-md leading-relaxed ${
            inverted ? 'text-on-primary-container/80' : 'text-on-surface-variant'
          }`}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-3 md:mt-0">{action}</div>}
    </div>
  );
};
