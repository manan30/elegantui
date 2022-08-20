import React, { useState } from 'react';
import {
  ControlsAddon,
  eventCallback,
  EventsAddon
} from '@vitebook/preact/addons';
import Input from '.';

import type { PageMeta } from '@vitebook/client';
import type { InputProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Input'
};

function InputStory() {
  const [disabled, setDisabled] = useState(false);
  const [variant, setVariant] = useState<InputProps['variant']>('primary');
  const [hideLabel, setHideLabel] = useState(false);

  return (
    <>
      <Input
        name='default'
        label='Input'
        placeholder='Enter text'
        disabled={disabled}
        onChange={eventCallback}
        variant={variant}
        hideLabel={hideLabel}
      />

      <ControlsAddon>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
          <label>Hide Label</label>
          <input
            style={{ marginLeft: '0.5rem' }}
            type='checkbox'
            checked={hideLabel}
            onChange={(e) => setHideLabel(e.target.checked)}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Variant</label>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as InputProps['variant']);
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
      <EventsAddon />
    </>
  );
}

InputStory.displayName = 'InputStory';

export default InputStory;
