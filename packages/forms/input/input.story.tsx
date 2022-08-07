import React from 'react';
import { Variant } from '@vitebook/preact';
// import { ControlsAddon } from '@vitebook/preact/addons';
import Input from '.';

import type { PageMeta } from '@vitebook/client';
// import type { DialogProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Input'
};

function InputStory() {
  return (
    <>
      <Variant name='Default'>
        <Input />
      </Variant>

      {/* <ControlsAddon>
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
      </ControlsAddon> */}
    </>
  );
}

InputStory.displayName = 'InputStory';

export default InputStory;
