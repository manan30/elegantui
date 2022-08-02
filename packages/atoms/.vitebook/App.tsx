import './global.css';

import type { ComponentChildren } from 'preact';

type AppProps = {
  Component: ComponentChildren;
};

function App({ Component }: AppProps) {
  return <Component />;
}

App.displayName = 'Elegant UI';

export default App;
