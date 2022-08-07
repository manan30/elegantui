import React, { useState } from 'react';
import { Variant } from '@vitebook/preact';
import { ControlsAddon } from '@vitebook/preact/addons';
import Card from '.';

import type { PageMeta } from '@vitebook/client';
import type { CardProps } from '.';

export const __pageMeta: PageMeta = {
  title: 'Card'
};

function CardStory() {
  const [variant, setVariant] = useState<CardProps['variant']>('raised');
  const [rounded, setRounded] = useState(true);

  return (
    <>
      <Variant name='Default'>
        <Card rounded={rounded} variant={variant}>
          <h2 className='text-base font-semibold uppercase tracking-wide text-indigo-600'>
            Transactions
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            A better way to send money
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Lorem ipsum dolor sit amet new new new card
          </p>
        </Card>
      </Variant>

      <ControlsAddon>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Variant</label>
          <select
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value as CardProps['variant']);
            }}
          >
            <option value='raised'>Raised</option>
            <option value='flat'>Flat</option>
            <option value='bordered'>Bordered</option>
          </select>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}
        >
          <label>Rounded</label>
          <input
            style={{ marginLeft: '0.5rem' }}
            type='checkbox'
            checked={rounded}
            onChange={(e) => setRounded(e.target.checked)}
          />
        </div>
      </ControlsAddon>
    </>
  );
}

CardStory.displayName = 'CardStory';

export default CardStory;
