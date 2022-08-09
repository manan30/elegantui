import React, { useState } from 'react';
import { ControlsAddon } from '@vitebook/preact/addons';
import Button from '../button';
import Dialog from '.';

import type { PageMeta } from '@vitebook/client';
import type { DialogProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Dialog'
};

function DialogStory() {
  const [title, setTitle] = useState('Dialog title');
  const [open, setOpen] = useState(false);
  const [disableCloseOnEsc, setDisableCloseOnEsc] = useState(false);
  const [disableCloseButton, setDisableCloseButton] = useState(false);
  const [size, setSize] = useState<DialogProps['size']>('md');

  return (
    <>
      <div className='grid h-full w-full place-items-center'>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      </div>
      <div className='w-32'>
        <Dialog
          open={open}
          dismissHandler={() => setOpen(false)}
          title={title}
          disableCloseOnEsc={disableCloseOnEsc}
          disableCloseButton={disableCloseButton}
          size={size}
        >
          <p>Test</p>
        </Dialog>
      </div>

      <ControlsAddon>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Size</label>
          <select
            style={{ marginLeft: '0.5rem' }}
            value={size}
            onChange={(e) => {
              setSize(e.target.value as DialogProps['size']);
            }}
          >
            <option value='sm'>Small</option>
            <option value='md'>Medium</option>
            <option value='lg'>Large</option>
            <option value='xl'>Extra Large</option>
          </select>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Disable Outside Click</label>
          <input
            style={{ marginLeft: '0.5rem' }}
            type='checkbox'
            checked={disableCloseOnEsc}
            onChange={(e) => setDisableCloseOnEsc(e.target.checked)}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Disable Close Button</label>
          <input
            style={{ marginLeft: '0.5rem' }}
            type='checkbox'
            checked={disableCloseButton}
            onChange={(e) => setDisableCloseButton(e.target.checked)}
          />
        </div>
      </ControlsAddon>
    </>
  );
}

DialogStory.displayName = 'DialogStory';

export default DialogStory;
