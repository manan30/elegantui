# ElegantUI Dialog component

## Installation

```bash
npm i @elegantui/atoms
```

## Usage

```js
import { Dialog } from '@elegantui/atoms';

<Dialog
  open={open}
  dismissHandler={() => setOpen(false)}
  title='Dialog title'
  disableCloseOnEsc={false}
  disableCloseButton={false}
  size='lg'
>
  <p>Dialog content</p>
</Dialog>;
```

## License

MIT © [Manan Joshi](https://mananjoshi.me)
