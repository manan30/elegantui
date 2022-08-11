import React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { ReactNode } from 'react';

export type AlertProps = {
  variant?: 'raised' | 'flat' | 'bordered';
  appearance?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  children: ReactNode;
};

function Alert({
  variant = 'flat',
  appearance = 'primary',
  children
}: AlertProps) {
  const alertVariant = React.useMemo(() => {
    switch (variant) {
      case 'flat':
        return 'shadow-none';
      case 'raised':
        return 'shadow-md shadow-gray-300';
      case 'bordered':
        return 'shadow-none border border-current';
    }
  }, [variant]);

  const alertAppearance = React.useMemo(() => {
    switch (appearance) {
      case 'error':
        return {
          styles: 'bg-red-500 text-red-700',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          )
        };
      case 'primary':
      case 'secondary':
        return {
          styles: `bg-${appearance} text-${appearance}`,
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          )
        };
      case 'success':
        return {
          styles: 'bg-green-400 text-green-700',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              />
            </svg>
          )
        };
      case 'warning':
        return {
          styles: 'bg-yellow-500 text-yellow-800',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
          )
        };
      default:
        return {
          styles: 'bg-slate-500 text-slate-700',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          )
        };
    }
  }, [appearance]);

  return (
    <div
      className={tm(
        'text-medium flex items-center space-x-4 rounded-md bg-opacity-10 p-3',
        alertAppearance.styles,
        alertVariant
      )}
    >
      {alertAppearance.icon}
      <span>{children}</span>
    </div>
  );
}

export default Alert;
