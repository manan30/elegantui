import React, { useState } from 'react';
import { ControlsAddon } from '@vitebook/preact/addons';
import Alert from '.';

import type { PageMeta } from '@vitebook/client';
import type { AlertProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Alert'
};

function AlertStory() {
  const [appearance, setAppearance] =
    useState<AlertProps['appearance']>('primary');
  const [variant, setVariant] = useState<AlertProps['variant']>('flat');
  const [text, setText] = useState(
    'Do dolor exercitation consectetur do ullamco est ut et laboris.'
  );

  return (
    <>
      <div className='w-96'>
        <Alert variant={variant} appearance={appearance}>
          {text}
        </Alert>
      </div>

      <ControlsAddon>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label>Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Appearance</label>
          <select
            value={appearance}
            onChange={(e) => {
              setAppearance(e.target.value as AlertProps['appearance']);
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
          <label>Variant</label>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as AlertProps['variant']);
            }}
          >
            {['flat', 'raised', 'bordered'].map((variant) => (
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

AlertStory.displayName = 'AlertStory';

export default AlertStory;
