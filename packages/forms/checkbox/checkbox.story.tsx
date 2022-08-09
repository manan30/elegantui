import React from 'react';
import { Variant } from '@vitebook/preact';
import {
  // ControlsAddon,
  eventCallback,
  EventsAddon
} from '@vitebook/preact/addons';
import Checkbox from '.';

import type { PageMeta } from '@vitebook/client';
// import type { CheckboxProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Checkbox'
};

function CheckboxStory() {
  // const [variant, setVariant] = useState<InputProps['variant']>('primary');

  return (
    <>
      <Variant name='Default'>
        <Checkbox
          name='default'
          checkboxText='Subscribe to my newsletter'
          onChange={eventCallback}
          value=''
        />
      </Variant>

      {/* <ControlsAddon>
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
      </ControlsAddon> */}
      <EventsAddon />
    </>
  );
}

CheckboxStory.displayName = 'CheckboxStory';

export default CheckboxStory;
