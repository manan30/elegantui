import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  name: string;
  checkboxText: string;
  value: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  disabled?: boolean;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  className?: string;
};

function Checkbox({
  name,
  checkboxText,
  onChange,
  disabled,
  variant,
  value,
  className: classes
}: CheckboxProps) {
  const checkboxVariant = React.useMemo(() => {
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
          'rounded border-gray-400 bg-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-offset-2',
          disabled && 'cursor-not-allowed bg-gray-300 opacity-50',
          checkboxVariant,
          classes
        )}
        id={name}
        name={name}
        value={value}
        type='checkbox'
        onChange={onChange}
        disabled={disabled}
      />
      <span className='ml-2 text-sm'>{checkboxText}</span>
    </label>
  );
}

Checkbox.displayName = 'Checkbox';

export default Checkbox;
