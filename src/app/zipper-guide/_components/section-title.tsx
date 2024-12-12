import { cn } from '@/lib/utils';
import React from 'react';

const SectionTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h2
      className={cn(
        'text-lg lg:text-3xl text-left font-poppins bg-secondary px-4 lg:px-6 py-1.5 lg:py-3 border-b',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
