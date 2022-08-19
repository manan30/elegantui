import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { InputHTMLAttributes } from 'react';

export type RadioButtonProps = {
  name: string;
  radioButtonText: string;
  value: string;
  disabled?: boolean;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function RadioButton({
  name,
  radioButtonText,
  onChange,
  disabled,
  variant = 'primary',
  value,
  className: classes,
  ...remProps
}: RadioButtonProps) {
  const radioButtonVariant = React.useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'text-primary focus:border-primary focus:ring-primary';
      case 'secondary':
        return 'text-secondary focus:border-secondary focus:ring-secondary';
      case 'success':
        return 'text-success focus:border-success focus:ring-success';
      case 'error':
        return 'text-error focus:border-error focus:ring-error';
      case 'warning':
        return 'text-warning focus:border-warning focus:ring-warning';
      default:
        return 'text-gray-600 focus:border-gray-600 focus:ring-gray-600';
    }
  }, [variant]);

  return (
    <label htmlFor={name} className='inline-flex items-center'>
      <input
        className={tm(
          'rounded-full border-gray-400 bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-offset-2',
          disabled && 'cursor-not-allowed bg-gray-300 opacity-50',
          radioButtonVariant,
          classes
        )}
        id={name}
        name={name}
        value={value}
        type='radio'
        onChange={onChange}
        disabled={disabled}
        {...remProps}
      />
      <span className={tm('ml-2 text-sm', disabled && 'opacity-50')}>
        {radioButtonText}
      </span>
    </label>
  );
}

RadioButton.displayName = 'RadioButton';

export default RadioButton;
