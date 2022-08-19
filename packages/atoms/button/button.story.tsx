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
  title: 'Button'
};

function ButtonStory() {
  const [text, setText] = useState('');
  const [size, setSize] = useState<ButtonProps['size']>('md');
  const [variant, setVariant] = useState<ButtonProps['variant']>('solid');
  const [appearance, setAppearance] =
    useState<ButtonProps['appearance']>('default');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button
        onClick={eventCallback}
        size={size}
        disabled={disabled}
        appearance={appearance}
        variant={variant}
        loading={loading}
        style={{ textTransform: 'capitalize' }}
      >
        {text.length ? text : variant}
      </Button>

      <ControlsAddon>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>Title</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Variant</label>
          <select
            style={{ marginLeft: '0.5rem' }}
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as ButtonProps['variant']);
            }}
          >
            <option value='solid'>Solid</option>
            <option value='outline'>Outline</option>
            <option value='link'>Link</option>
            <option value='ghost'>Ghost</option>
          </select>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Appearance</label>
          <select
            style={{ marginLeft: '0.5rem' }}
            value={appearance}
            onChange={(e) => {
              setAppearance(
                e.target.value.toLowerCase() as ButtonProps['appearance']
              );
            }}
          >
            {[
              'Default',
              'Primary',
              'Secondary',
              'Success',
              'Warning',
              'Error'
            ].map((variant) => (
              <option value={variant.toLowerCase()} key={variant}>
                {variant}
              </option>
            ))}
          </select>
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
            <option value='md'>Medium</option>
            <option value='lg'>Large</option>
          </select>
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
          <label>Loading</label>
          <input
            style={{ marginLeft: '0.5rem' }}
            type='checkbox'
            checked={loading}
            onChange={(e) => setLoading(e.target.checked)}
          />
        </div>
      </ControlsAddon>

      <EventsAddon />
    </>
  );
}

ButtonStory.displayName = 'ButtonStory';

export default ButtonStory;
