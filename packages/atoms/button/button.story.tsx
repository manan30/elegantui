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
  const [title, setTitle] = useState('');
  const [size, setSize] = useState<ButtonProps['size']>('md');
  const [appearance, setAppearance] =
    useState<ButtonProps['appearance']>('solid');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {['Default', 'Primary', 'Secondary', 'Success', 'Warning', 'Error'].map(
        (variant) => {
          return (
            <Variant name={variant} key={variant}>
              <Button
                onClick={eventCallback}
                size={size}
                disabled={disabled}
                variant={variant.toLowerCase() as ButtonProps['variant']}
                appearance={appearance}
                loading={loading}
              >
                {title.length ? title : variant}
              </Button>
            </Variant>
          );
        }
      )}

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
          <label>Appearance</label>
          <select
            style={{ marginLeft: '0.5rem' }}
            value={appearance}
            onChange={(e) => {
              setAppearance(e.target.value as ButtonProps['appearance']);
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
