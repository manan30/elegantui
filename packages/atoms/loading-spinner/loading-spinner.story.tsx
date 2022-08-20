import React, { useState } from 'react';
import { ControlsAddon } from '@vitebook/preact/addons';
import LoadingSpinner from '.';

import type { PageMeta } from '@vitebook/client';
import type { LoadingSpinnerProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'LoadingSpinner'
};

function LoadingSpinnerStory() {
  const [size, setSize] = useState<LoadingSpinnerProps['size']>('md');
  const [appearance, setAppearance] =
    useState<LoadingSpinnerProps['appearance']>('primary');

  return (
    <>
      <LoadingSpinner size={size} appearance={appearance} />

      <ControlsAddon>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>Size</label>
          <select
            style={{ marginLeft: '0.5rem' }}
            value={size}
            onChange={(e) => {
              setSize(e.target.value as LoadingSpinnerProps['size']);
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
          <label>Appearance</label>
          <select
            value={appearance}
            onChange={(e) => {
              setAppearance(
                e.target.value as LoadingSpinnerProps['appearance']
              );
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
      </ControlsAddon>
    </>
  );
}

LoadingSpinnerStory.displayName = 'LoadingSpinnerStory';

export default LoadingSpinnerStory;
