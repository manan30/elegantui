# ElegantUI

ElegantUI is a [React](https://reactjs.org/docs/getting-started.html) component library built with [TailwindCSS](https://tailwindcss.com/). It is offered in two separate packages [`atoms`](https://www.npmjs.com/package/@elegantui/atoms) and [`forms`](https://www.npmjs.com/package/@elegantui/forms). The `atoms` package contains base components whereas the `forms` package contains HTML form specific components. ElegantUI supports all key features which includes:

- Works out of the box with any React meta-frameworks, setups and bundlers
- Served in ESM and CJS formats
- Tree shakeable
- Very small footprint
- Customizable styling
- Written in TypeScript

## Getting Started

### Installation

To install the ElegantUI packages run the following command within your project directory.

```bash
# atoms and forms are separate packages
# so feel free to skip the one that is not needed

npm i @elegantui/atoms @elegantui/forms

# OR

pnpm i @elegantui/atoms @elegantui/forms

# OR

yarn add @elegantui/atoms @elegantui/forms
```

### Quick start

Here's a quick example to get you started, **it's literally all you need:**

```jsx
import * as React from 'react';
import { Button } from '@elegantui/atoms';
import '@elegantui/atoms/dist/styles.css';

function App() {
  return <Button>Hello Friend</Button>;
}
```

### Configuration

The default styles of this library depends on the package that is being used. To use the default styles, add the following `styles` import to the root element.

```jsx
// For atoms package
import '@elegantui/atoms/dist/styles.css';

// For forms package
import '@elegantui/forms/dist/styles.css';
```

For detailed component explanations please checkout the [docs](https://elegantui.vercel.app/).

## Issues / Feature Requests

Please file any issues or feature requests underneath the [issues](https://github.com/manan30/elegantui/issues) tab.

## Contributing

See [Contributing](./CONTRIBUTING.md) guide.

## License

MIT © [Manan Joshi](https://mananjoshi.me)
