import * as React from 'react';
import { Transition, Dialog as HUIDialog } from '@headlessui/react';

export type DialogProps = {
  open: boolean;
  dismissHandler: (value: boolean) => void;
};

function Dialog({ open, dismissHandler }: DialogProps) {
  return (
    <Transition appear show={open} as={React.Fragment}>
      <HUIDialog as='div' className='relative z-10' onClose={dismissHandler}>
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <HUIDialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <HUIDialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Payment successful
                </HUIDialog.Title>
              </HUIDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HUIDialog>
    </Transition>
  );
}

Dialog.displayName = 'Dialog';

export default Dialog;
