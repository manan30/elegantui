import * as React from 'react';
// import { twMerge as tm } from 'tailwind-merge';
import { Listbox } from '@headlessui/react';

export type OptionProps = {
  value: unknown;
  optionText: string;
  disabled?: boolean;
};

function Option({ value, optionText, disabled }: OptionProps) {
  return (
    <Listbox.Option value={value} disabled={disabled}>
      {optionText}
    </Listbox.Option>
  );
}

export default Option;
