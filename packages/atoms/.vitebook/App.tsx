import React from 'react';
import './global.css';

import type { ReactNode } from 'react';

type AppProps = {
  Component: ReactNode;
};

function App({ Component }: AppProps) {
  // @ts-ignore
  return <Component />;
}

App.displayName = 'ElegantUI Atoms';

export default App;
