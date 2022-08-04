import React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  children: ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'sm' | 'md' | 'lg';
  appearance?: 'solid' | 'outline' | 'link' | 'ghost';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  variant = 'default',
  appearance = 'solid',
  size = 'md',
  ...rest
}: ButtonProps) {
  const buttonSize = React.useMemo(() => {
    switch (size) {
      case 'sm':
        return 'p-2 font-medium text-sm';
      case 'md':
        return 'p-4 font-medium text-med';
      case 'lg':
        return 'p-6 font-semibold text-lg';
    }
  }, [size]);

  const buttonVariant = React.useMemo(() => {
    const baseVariantStyles = 'focus:ring focus:ring-offset-2 text-default';
    switch (variant) {
      case 'primary':
        return `${baseVariantStyles} bg-primary focus:ring-primary/75`;
      case 'secondary':
        return `${baseVariantStyles} bg-secondary focus:ring-secondary/75`;
      case 'success':
        return `${baseVariantStyles} bg-success focus:ring-success/75`;
      case 'error':
        return `${baseVariantStyles} bg-error focus:ring-error/75`;
      case 'warning':
        return `${baseVariantStyles} bg-warning focus:ring-warning/75`;
      default:
        return `${baseVariantStyles} bg-default text-primary focus:ring-default/75`;
    }
  }, [variant]);

  return (
    <button
      className={tm(
        'rounded-md text-default shadow-sm transition-shadow duration-100 ease-in hover:shadow-md focus:shadow-md focus:outline-none',
        buttonSize,
        buttonVariant,
        rest.disabled && 'cursor-default opacity-50'
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';

export default Button;
