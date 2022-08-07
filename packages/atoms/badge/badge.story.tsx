import React, { useState } from 'react';
import { Variant } from '@vitebook/preact';
import { ControlsAddon } from '@vitebook/preact/addons';
import Badge from '.';

import type { PageMeta } from '@vitebook/client';
import type { BadgeProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Badge'
};

function BadgeStory() {
  const [variant, setVariant] = useState<BadgeProps['appearance']>('default');
  const [size, setSize] = useState<BadgeProps['size']>('sm');
  const [text, setText] = useState('Badge');

  return (
    <>
      <Variant name='Default'>
        <Badge text={text} appearance={variant} size={size} />
      </Variant>

      <ControlsAddon>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>Text</label>
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
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as BadgeProps['appearance']);
            }}
          >
            {[
              'default',
              'primary',
              'secondary',
              'success',
              'warning',
              'error'
            ].map((variant) => (
              <option value={variant} key={variant}>
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
            value={size}
            onChange={(e) => {
              setSize(e.target.value as BadgeProps['size']);
            }}
          >
            {['sm', 'md', 'lg'].map((sz) => (
              <option value={sz} key={sz}>
                {sz}
              </option>
            ))}
          </select>
        </div>
      </ControlsAddon>
    </>
  );
}

BadgeStory.displayName = 'BadgeStory';

export default BadgeStory;
