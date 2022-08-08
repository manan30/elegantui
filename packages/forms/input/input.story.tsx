import React, { useState } from 'react';
import { Variant } from '@vitebook/preact';
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

  return (
    <>
      <Variant name='Default'>
        <Input
          name='default'
          label='Input'
          placeholder='Enter text'
          disabled={disabled}
          onChange={eventCallback}
        />
      </Variant>

      <ControlsAddon>
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
      </ControlsAddon>
      <EventsAddon />
    </>
  );
}

InputStory.displayName = 'InputStory';

export default InputStory;
