import './global.css';

import type { ReactNode } from 'react';

type AppProps = {
  Component: ReactNode;
};

function App({ Component }: AppProps) {
  return <Component />;
}

App.displayName = 'ElegantUI Atoms';

export default App;
