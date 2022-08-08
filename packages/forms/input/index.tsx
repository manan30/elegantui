import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { InputHTMLAttributes } from 'react';

export type InputProps = {
  name: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ name, label, type = 'text', ...props }: InputProps) {
  const { disabled, ...rest } = props;

  return (
    <div className='flex flex-col space-y-2'>
      <label
        htmlFor={name}
        className='text-sm font-medium capitalize tracking-wide text-current'
      >
        {label}
      </label>
      <input
        className={tm(
          'rounded-md border-[1.5px] border-gray-400 bg-default py-[0.375rem] px-3 shadow-sm transition-colors focus:border-current focus:outline-none focus:ring-1 focus:ring-current sm:text-sm',
          disabled && 'cursor-not-allowed opacity-50'
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
