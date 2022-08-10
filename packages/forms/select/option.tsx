import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import { Listbox } from '@headlessui/react';

export type OptionProps = {
  value: unknown;
  optionText: string;
  disabled?: boolean;
  className?: string;
};

function Option({
  value,
  optionText,
  disabled,
  className: classes
}: OptionProps) {
  return (
    <Listbox.Option
      value={value}
      disabled={disabled}
      className={({ active }) =>
        tm(
          'relative cursor-default select-none py-2 pl-10 pr-4',
          active ? 'bg-primary bg-opacity-20 text-secondary' : 'text-gray-600',
          classes
        )
      }
    >
      {({ selected }) => (
        <>
          <span
            className={tm(
              'block truncate',
              selected ? 'font-medium text-primary' : 'font-normal'
            )}
          >
            {optionText}
          </span>
          {selected ? (
            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
}

export default Option;
