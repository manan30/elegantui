import React, { useState } from 'react';
import { ControlsAddon, EventsAddon } from '@vitebook/preact/addons';
import Select from '.';
import Option from './option';

import type { PageMeta } from '@vitebook/client';
import type { SelectProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Select'
};

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
];

function SelectStory() {
  const [person, setPerson] = useState(people[0]);
  const [disabled, setDisabled] = useState(false);
  const [variant, setVariant] = useState<SelectProps['variant']>('primary');

  return (
    <>
      <div className='w-72'>
        <Select
          name='Default'
          label='Select'
          selectedText={person.name}
          value={person}
          disabled={disabled}
          onChange={(p) => {
            setPerson(p as typeof person);
          }}
          variant={variant}
        >
          {people.map((person) => (
            <Option
              key={person.id}
              optionText={person.name}
              value={person}
              disabled={person.unavailable}
            />
          ))}
        </Select>
      </div>

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
              setVariant(e.target.value as SelectProps['variant']);
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

SelectStory.displayName = 'SelectStory';

export default SelectStory;
