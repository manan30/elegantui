import React, { useState } from 'react';
import { Variant } from '@vitebook/preact';
import {
  ControlsAddon,
  eventCallback,
  EventsAddon
} from '@vitebook/preact/addons';
import Button from '.';

import type { PageMeta } from '@vitebook/client';
import type { ButtonProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Button',
  description: 'My awesome button.'
};

function ButtonStory() {
  const [title, setTitle] = useState('Click Me');
  const [size, setSize] = useState<ButtonProps['size']>('md');
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Variant name='Default'>
        <Button
          onClick={eventCallback}
          size={size}
          disabled={disabled}
          variant='default'
        >
          {title}
        </Button>
      </Variant>

      <Variant name='Primary'>
        <Button
          onClick={eventCallback}
          size={size}
          disabled={disabled}
          variant='primary'
        >
          {title}
        </Button>
      </Variant>

      <Variant name='Secondary'>
        <Button
          onClick={eventCallback}
          size={size}
          disabled={disabled}
          variant='secondary'
        >
          {title}
        </Button>
      </Variant>

      <Variant name='Success'>
        <Button
          onClick={eventCallback}
          size={size}
          disabled={disabled}
          variant='success'
        >
          {title}
        </Button>
      </Variant>

      <Variant name='Error'>
        <Button
          onClick={eventCallback}
          size={size}
          disabled={disabled}
          variant='error'
        >
          {title}
        </Button>
      </Variant>

      <Variant name='Warning'>
        <Button
          onClick={eventCallback}
          size={size}
          disabled={disabled}
          variant='warning'
        >
          {title}
        </Button>
      </Variant>

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
          <label>Disabled</label>
          <input
            style={{ marginLeft: '0.5rem' }}
            type='checkbox'
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
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
              setSize(e.target.value as ButtonProps['size']);
            }}
          >
            <option value='sm'>Small</option>
            <option value='med'>Medium</option>
            <option value='lg'>Large</option>
          </select>
        </div>
      </ControlsAddon>

      <EventsAddon />
    </>
  );
}

ButtonStory.displayName = 'ButtonStory';

export default ButtonStory;
