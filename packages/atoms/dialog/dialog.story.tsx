import React, { useState } from 'react';
import { Variant } from '@vitebook/preact';
// import {
//   ControlsAddon,
//   eventCallback,
//   EventsAddon
// } from '@vitebook/preact/addons';
import Button from '../button';
import Dialog from '.';

import type { PageMeta } from '@vitebook/client';

export const __pageMeta: PageMeta = {
  title: 'Dialog'
};

function DialogStory() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Variant name='Default'>
        <div className='grid h-full w-full place-items-center'>
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        </div>
        <Dialog open={open} dismissHandler={setOpen} />
      </Variant>

      {/* <ControlsAddon></ControlsAddon> */}
    </>
  );
}

DialogStory.displayName = 'DialogStory';

export default DialogStory;
