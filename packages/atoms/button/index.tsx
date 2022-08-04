import React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  children: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  appearance?: 'solid' | 'outline' | 'link' | 'ghost';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  color = 'default',
  appearance = 'solid',
  size = 'md',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={tm(
        'rounded-md bg-primary p-4 font-semibold text-default shadow-sm transition-shadow duration-100 ease-in hover:shadow-md focus:shadow-md focus:outline-none focus:ring focus:ring-primary/75 focus:ring-offset-1'
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';

export default Button;
