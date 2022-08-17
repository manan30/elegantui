import React from 'react';
import { Button, Dialog } from '@elegantui/atoms';

const DialogComponent = ({
  title,
  disableCloseOnEsc,
  disableCloseButton,
  size
}: {
  title?: string;
  disableCloseOnEsc?: boolean;
  disableCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        style={{ marginTop: '1rem', marginRight: '0.5rem' }}
        onClick={() => setOpen(true)}
      >
        {title && title !== 'My Dialog' ? title : 'Open Dialog'}
      </Button>
      <Dialog
        open={open}
        dismissHandler={() => setOpen(false)}
        title={title}
        disableCloseOnEsc={disableCloseOnEsc}
        disableCloseButton={disableCloseButton}
        size={size}
      >
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
