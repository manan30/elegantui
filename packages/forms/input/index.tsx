import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { InputHTMLAttributes } from 'react';

export type InputProps = {
  name: string;
  label: string;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
} & InputHTMLAttributes<HTMLInputElement>;

function Input({
  name,
  label,
  variant = 'primary',
  type = 'text',
  ...props
}: InputProps) {
  const { disabled, ...rest } = props;

  const inputVariant = React.useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'focus:border-primary focus:ring-primary';
      case 'secondary':
        return 'focus:border-secondary focus:ring-secondary';
      case 'success':
        return 'focus:border-success focus:ring-success';
      case 'error':
        return 'focus:border-error focus:ring-error';
      case 'warning':
        return 'focus:border-warning focus:ring-warning';
      default:
        return 'focus:border-gray-600 focus:ring-gray-600';
    }
  }, [variant]);

  return (
    <div className='flex flex-col space-y-2'>
      <label
        htmlFor={name}
        className={`text-sm font-medium capitalize text-gray-700`}
      >
        {label}
      </label>
      <input
        className={tm(
          'rounded-md border-[1.5px] border-gray-400 bg-default py-[0.375rem] px-3 text-gray-600 shadow-sm transition-colors focus:outline-none focus:ring-1 sm:text-sm',
          disabled && 'cursor-not-allowed opacity-50',
          inputVariant,
          props.className
        )}
        id={name}
        name={name}
        disabled={disabled}
        type={type}
        autoComplete={type}
        {...rest}
      />
    </div>
  );
}

Input.displayName = 'Input';

export default Input;
