import React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  children: ReactNode;
  appearance:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ disabled, onClick, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={tm(
        'rounded-md bg-red-500 p-4 shadow-sm hover:shadow-md focus:shadow-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-1'
      )}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';

export default Button;
