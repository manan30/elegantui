import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import LoadingSpinner from '../loading-spinner';

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
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  variant = 'default',
  appearance = 'solid',
  size = 'md',
  loading,
  ...remProps
}: ButtonProps) {
  const { disabled, className, ...rest } = remProps;

  const buttonSize = React.useMemo(() => {
    switch (size) {
      case 'sm':
        return 'py-2 px-4 font-medium text-sm';
      case 'md':
        return 'py-3 px-6 font-medium text-med';
      case 'lg':
        return 'py-4 px-8 font-semibold text-xl';
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

  const buttonAppearance = React.useMemo(() => {
    const currentButtonVariant = buttonVariant
      .match(/bg-\S+\b/g)?.[0]
      .split('-')[1];
    const baseAppearanceStyles = `focus:ring-transparent focus:ring-offset-0 bg-transparent text-${currentButtonVariant}`;

    switch (appearance) {
      case 'solid':
        return `rounded-md shadow-sm transition-shadow duration-100 ease-in hover:shadow-md focus:shadow-md`;
      case 'outline':
        return `${baseAppearanceStyles} rounded-md shadow-sm border border-${currentButtonVariant} border-[3px]`;
      case 'link':
        return `${baseAppearanceStyles} hover:underline focus:underline hover:underline-offset-1 focus:underline-offset-1`;
      case 'ghost':
        return baseAppearanceStyles;
    }
  }, [appearance, buttonVariant]);

  return (
    <button
      className={tm(
        'text-center focus:outline-none',
        buttonSize,
        buttonVariant,
        buttonAppearance,
        disabled &&
          'under cursor-not-allowed opacity-50 hover:no-underline hover:shadow-none',
        className,
        loading && 'flex items-center space-x-1'
      )}
      disabled={disabled}
      {...rest}
    >
      {loading ? <LoadingSpinner className='-ml-1 mr-3' /> : null}
      {loading ? <div>{children}</div> : children}
    </button>
  );
}

Button.displayName = 'Button';

export default Button;
