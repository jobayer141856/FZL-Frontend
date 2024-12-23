import { cn } from '@/lib/utils';
import React from 'react';

const PageContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn('my-10 max-w-[1400px] mx-auto', className)}>
      {children}
    </div>
  );
};

export default PageContainer;
