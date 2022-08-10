import * as React from 'react';
import { twMerge as tm } from 'tailwind-merge';
import { Listbox } from '@headlessui/react';

export type SelectProps = {
  name: string;
  selectedText: string;
  value: unknown;
  onChange: (value: unknown) => void;
  disabled?: boolean;
  multiple?: boolean;
  label: string;
  hideLabel?: boolean;
  children?: typeof Option | Array<typeof Option>;
  // variant?:
  //   | 'default'
  //   | 'primary'
  //   | 'secondary'
  //   | 'success'
  //   | 'warning'
  //   | 'error';
  // className?: string;
};

function Select({
  value,
  onChange,
  selectedText,
  name,
  disabled = false,
  multiple = false,
  label,
  hideLabel
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
    >
      <Listbox.Label className={tm(hideLabel && 'sr-only')}>
        {label}
      </Listbox.Label>
      <Listbox.Button>{selectedText}</Listbox.Button>
      <Listbox.Options></Listbox.Options>
    </Listbox>
  );
}

Select.displayName = 'Select';

export default Select;
