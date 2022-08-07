import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { preactPlugin } from '@vitebook/preact/node';
import {
  defaultThemePlugin,
  DefaultThemeConfig
} from '@vitebook/theme-default/node';

console.log('');

export default defineConfig<DefaultThemeConfig>({
  include: ['**/*.story.tsx'],
  plugins: [
    preactPlugin({ appFile: 'App.tsx' }),
    clientPlugin(),
    defaultThemePlugin()
  ],
  site: {
    title: 'ElegantUI Forms',
    description: 'ElegantUI form components',
    theme: {}
  }
});
