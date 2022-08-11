import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

export type LoadingSpinnerProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
};

function LoadingSpinner({ className, size = 'sm' }: LoadingSpinnerProps) {
  const loadingSpinnerSize = React.useMemo(() => {
    switch (size) {
      case 'sm':
        return 'h-5 w-5';
      case 'md':
        return 'h-7 w-7';
      case 'lg':
        return 'h-10 w-10';
      case 'xl':
        return 'h-14 w-14';
    }
  }, [size]);

  return (
    <svg
      className={tm('animate-spin text-current', loadingSpinnerSize, className)}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  );
}

export default LoadingSpinner;
