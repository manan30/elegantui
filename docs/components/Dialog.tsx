import React from 'react';
import { Button, Dialog } from '@elegantui/atoms';

const DialogComponent = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button style={{ marginTop: '1rem' }} onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={open} dismissHandler={() => setOpen(false)}>
        <h2
          style={{
            marginTop: 0,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'black'
          }}
        >
          Transactions
        </h2>
        <p style={{ marginTop: '0.5rem', color: 'teal' }}>
          A better way to send money
        </p>
      </Dialog>
    </>
  );
};

export default DialogComponent;
