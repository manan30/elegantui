import React, { useState } from 'react';
import {
  ControlsAddon,
  eventCallback,
  EventsAddon
} from '@vitebook/preact/addons';
import RadioButton from '.';

import type { PageMeta } from '@vitebook/client';
import type { RadioButtonProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'RadioButton'
};

function RadioButtonStory() {
  const [disabled, setDisabled] = useState(false);
  const [variant, setVariant] =
    useState<RadioButtonProps['variant']>('primary');

  return (
    <>
      <RadioButton
        name='default'
        radioButtonText='Radio Button'
        onChange={eventCallback}
        value='default'
        disabled={disabled}
        variant={variant}
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
          <label>Variant</label>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as RadioButtonProps['variant']);
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

RadioButtonStory.displayName = 'RadioButtonStory';

export default RadioButtonStory;
