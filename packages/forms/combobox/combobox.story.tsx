import React, { useState } from 'react';
import { ControlsAddon, EventsAddon } from '@vitebook/preact/addons';
import Combobox from '.';

import type { PageMeta } from '@vitebook/client';
import type { ComboboxProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Combobox'
};

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan'
];

function ComboboxStory() {
  const [person, setPerson] = useState(people[0]);
  const [query, setQuery] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [variant, setVariant] = useState<ComboboxProps['variant']>('primary');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className='w-72'>
        <Combobox
          name='Default'
          label='Combobox'
          value={person}
          disabled={disabled}
          onChange={(p) => {
            setPerson(p as typeof person);
          }}
          variant={variant}
          inputChangeHandler={(e) => setQuery(e.target.value)}
        >
          {filteredPeople.map((person) => (
            <Combobox.Option key={person} optionText={person} value={person} />
          ))}
        </Combobox>
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
              setVariant(e.target.value as ComboboxProps['variant']);
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

ComboboxStory.displayName = 'ComboboxStory';

export default ComboboxStory;
