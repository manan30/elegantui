import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import { Listbox } from '@headlessui/react';
import Option from './option';

import type { ReactElement } from 'react';

export type SelectProps = {
  name: string;
  selectedText: string;
  value: unknown;
  onChange: (value: unknown) => void;
  disabled?: boolean;
  multiple?: boolean;
  label: string;
  hideLabel?: boolean;
  children: ReactElement<typeof Option> | ReactElement<typeof Option>[];
  // variant?:
  //   | 'default'
  //   | 'primary'
  //   | 'secondary'
  //   | 'success'
  //   | 'warning'
  //   | 'error';
  className?: string;
};

function Select({
  value,
  onChange,
  selectedText,
  name,
  disabled = false,
  multiple = false,
  label,
  hideLabel,
  children,
  className: classes
}: SelectProps) {
  //   {
  //   name,
  //   radioButtonText,
  //   onChange,
  //   disabled,
  //   variant = 'primary',
  //   value,
  //   className: classes
  // }: RadioButtonProps
  // const radioButtonVariant = React.useMemo(() => {
  //   switch (variant) {
  //     case 'primary':
  //       return 'text-primary focus:border-primary focus:ring-primary';
  //     case 'secondary':
  //       return 'text-secondary focus:border-secondary focus:ring-secondary';
  //     case 'success':
  //       return 'text-success focus:border-success focus:ring-success';
  //     case 'error':
  //       return 'text-error focus:border-error focus:ring-error';
  //     case 'warning':
  //       return 'text-warning focus:border-warning focus:ring-warning';
  //     default:
  //       return 'text-gray-600 focus:border-gray-600 focus:ring-gray-600';
  //   }
  // }, [variant]);

  return (
    <Listbox
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      multiple={multiple}
      as='div'
      className='flex flex-col space-y-2'
    >
      <Listbox.Label
        className={tm(
          'text-sm font-medium capitalize text-gray-700',
          hideLabel && 'sr-only'
        )}
      >
        {label}
      </Listbox.Label>
      <Listbox.Button
        className={tm(
          'rounded-md border-[1.5px] border-gray-400 bg-gray-50 py-[0.375rem] px-3 text-left font-medium text-gray-600 shadow-sm transition-colors focus:outline-none focus:ring-1 sm:text-sm',
          disabled && 'cursor-not-allowed opacity-50',
          // inputVariant,
          classes
        )}
      >
        {selectedText}
      </Listbox.Button>
      <Listbox.Options>{children}</Listbox.Options>
    </Listbox>
  );
}

Select.displayName = 'Select';

export default Select;
