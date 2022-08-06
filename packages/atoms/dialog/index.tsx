import * as React from 'react';
import { Transition, Dialog as HUIDialog } from '@headlessui/react';
import { twMerge as tm } from 'tailwind-merge';
import Button from '../button';

import type { ReactNode } from 'react';

export type DialogProps = {
  open: boolean;
  dismissHandler: () => void;
  children: ReactNode;
  title?: string;
  disableCloseOnEsc?: boolean;
  disableCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

function Dialog({
  open,
  dismissHandler,
  children,
  title,
  disableCloseOnEsc,
  disableCloseButton,
  size = 'md'
}: DialogProps) {
  return (
    <Transition appear show={open} as={React.Fragment}>
      <HUIDialog
        as='div'
        className='relative z-10'
        onClose={
          disableCloseOnEsc || disableCloseButton ? noop : dismissHandler
        }
      >
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500/75' />
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
              <HUIDialog.Panel
                className={tm(
                  'w-full max-w-lg transform overflow-hidden rounded-xl bg-default px-6 py-4 text-left align-middle shadow-xl transition-all',
                  size === 'sm' && 'max-w-sm',
                  size === 'md' && 'max-w-md',
                  size === 'lg' && 'max-w-lg',
                  size === 'xl' && 'max-w-xl'
                )}
              >
                {title ? (
                  <div className='flex w-full items-center'>
                    <HUIDialog.Title className='text-lg font-medium leading-6 text-secondary lg:text-xl'>
                      {title}
                    </HUIDialog.Title>
                    <Button
                      appearance='ghost'
                      size='sm'
                      className='ml-auto'
                      onClick={dismissHandler}
                      disabled={disableCloseButton}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Button>
                  </div>
                ) : null}
                <div className='max-h-72 overflow-y-auto py-3'>{children}</div>
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
