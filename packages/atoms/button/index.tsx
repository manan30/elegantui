import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import LoadingSpinner from '../loading-spinner';

export type ButtonProps = {
  children: ReactNode;
  appearance?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'link' | 'ghost';
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  appearance = 'default',
  variant = 'solid',
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

  const buttonAppearance = React.useMemo(() => {
    const baseAppearanceStyles = 'focus:ring focus:ring-offset-2 text-default';

    switch (appearance) {
      case 'primary':
        return `${baseAppearanceStyles} bg-primary focus:ring-primary/75`;
      case 'secondary':
        return `${baseAppearanceStyles} bg-secondary focus:ring-secondary/75`;
      case 'success':
        return `${baseAppearanceStyles} bg-success focus:ring-success/75`;
      case 'error':
        return `${baseAppearanceStyles} bg-error focus:ring-error/75`;
      case 'warning':
        return `${baseAppearanceStyles} bg-warning focus:ring-warning/75`;
      default:
        return `${baseAppearanceStyles} bg-default text-primary focus:ring-default/75`;
    }
  }, [appearance]);

  const buttonVariant = React.useMemo(() => {
    const currentButtonAppearance = buttonAppearance
      .match(/bg-\S+\b/g)?.[0]
      .split('-')[1];
    const baseVariantStyles = `focus:ring-transparent focus:ring-offset-0 bg-transparent text-${currentButtonAppearance}`;

    switch (variant) {
      case 'solid':
        return `rounded-md shadow-sm transition-shadow duration-100 ease-in hover:shadow-md focus:shadow-md`;
      case 'outline':
        return `${baseVariantStyles} rounded-md shadow-sm border border-${currentButtonAppearance} border-[3px] py-[0.55rem]`;
      case 'link':
        return `${baseVariantStyles} hover:underline focus:underline hover:underline-offset-1 focus:underline-offset-1`;
      case 'ghost':
        return baseVariantStyles;
    }
  }, [variant, buttonAppearance]);

  return (
    <button
      className={tm(
        'text-center focus:outline-none',
        buttonSize,
        buttonAppearance,
        buttonVariant,
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
