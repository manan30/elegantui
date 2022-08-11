import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import { Combobox as HUICombobox, Transition } from '@headlessui/react';
import Option from './option';

import type { ReactElement, ChangeEvent } from 'react';

export type ComboboxProps = {
  name: string;
  value: unknown;
  inputDisplayValue?: (item: unknown) => string;
  onChange: (value: unknown) => void;
  inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  multiple?: boolean;
  label: string;
  nullable?: boolean;
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

function Combobox({
  value,
  onChange,
  inputChangeHandler,
  inputDisplayValue,
  name,
  disabled = false,
  multiple = false,
  nullable = true,
  label,
  hideLabel,
  children,
  className: classes,
  variant = 'primary'
}: ComboboxProps) {
  const comboboxVariant = React.useMemo(() => {
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
    <HUICombobox
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      multiple={multiple}
      nullable={nullable}
      as='div'
      className='flex flex-col space-y-2'
    >
      <div className='relative'>
        <HUICombobox.Label
          className={tm(
            'text-sm font-medium capitalize text-gray-700',
            hideLabel && 'sr-only'
          )}
        >
          {label}
        </HUICombobox.Label>
        <HUICombobox.Input
          className={tm(
            'relative w-full rounded-md border-[1.5px] border-gray-400 bg-gray-50 py-[0.375rem] px-3 text-left font-medium text-gray-600 shadow-sm transition-colors focus:outline-none focus-visible:ring-1 sm:text-sm',
            disabled && 'cursor-not-allowed opacity-50',
            !hideLabel && 'mt-1',
            comboboxVariant,
            classes
          )}
          onChange={inputChangeHandler}
          displayValue={inputDisplayValue}
        />
        <Transition
          as={React.Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <HUICombobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {children}
          </HUICombobox.Options>
        </Transition>
      </div>
    </HUICombobox>
  );
}

Combobox.displayName = 'Combobox';

Combobox.Option = Option;

export default Combobox;
