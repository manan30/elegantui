import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import { Listbox, Transition } from '@headlessui/react';
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
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
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
  className: classes,
  variant = 'primary'
}: SelectProps) {
  const selectVariant = React.useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'text-primary focus-visible:border-primary focus-visible:ring-primary';
      case 'secondary':
        return 'text-secondary focus-visible:border-secondary focus-visible:ring-secondary';
      case 'success':
        return 'text-success focus-visible:border-success focus-visible:ring-success';
      case 'error':
        return 'text-error focus-visible:border-error focus-visible:ring-error';
      case 'warning':
        return 'text-warning focus-visible:border-warning focus-visible:ring-warning';
      default:
        return 'text-gray-600 focus-visible:border-gray-600 focus-visible:ring-gray-600';
    }
  }, [variant]);

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
      <div className='relative'>
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
            'relative w-full rounded-md border-[1.5px] border-gray-400 bg-gray-50 py-[0.375rem] px-3 text-left font-medium text-gray-600 shadow-sm transition-colors focus:outline-none focus-visible:ring-1 sm:text-sm',
            disabled && 'cursor-not-allowed opacity-50',
            !hideLabel && 'mt-1',
            selectVariant,
            classes
          )}
        >
          <span className='block truncate'>{selectedText}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </svg>
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {children}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

Select.displayName = 'Select';

Select.Option = Option;

export default Select;
