import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';

import type { InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  name: string;
  checkboxText: string;
  value: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
};

function Checkbox({ name, checkboxText, onChange }: CheckboxProps) {
  // const { disabled, className: classes, ...rest } = props;

  // const inputVariant = React.useMemo(() => {
  //   switch (variant) {
  //     case 'primary':
  //       return 'focus:border-primary focus:ring-primary';
  //     case 'secondary':
  //       return 'focus:border-secondary focus:ring-secondary';
  //     case 'success':
  //       return 'focus:border-success focus:ring-success';
  //     case 'error':
  //       return 'focus:border-error focus:ring-error';
  //     case 'warning':
  //       return 'focus:border-warning focus:ring-warning';
  //     default:
  //       return 'focus:border-gray-600 focus:ring-gray-600';
  //   }
  // }, [variant]);

  return (
    <label>
      <input
        className={tm(
          'rounded-md border-gray-400 bg-gray-50 shadow-sm transition-colors focus:border-indigo-300 focus:outline-none focus:ring-1',
          'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
          // disabled && 'cursor-not-allowed opacity-50',
          // inputVariant,
          // classes
        )}
        id={name}
        name={name}
        type='checkbox'
        onChange={onChange}
        // disabled={disabled}
        // autoComplete={type}
        // {...rest}
      />
      <span>{checkboxText}</span>
    </label>
  );
}

Checkbox.displayName = 'Checkbox';

export default Checkbox;
