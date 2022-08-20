// FILE: /Users/manan/Spaces/Nebula/packages/component-library/elegantui/packages/atoms/.vitebook/config.ts

import __vitebook__path from 'path';
import { fileURLToPath as __vitebook__fileURLToPath } from 'url';
import { createRequire as __vitebook__createRequire } from 'module';
const require = __vitebook__createRequire(import.meta.url);
var __require = function (x) {
  return require(x);
};
__require.__proto__.resolve = require.resolve;
const __filename = __vitebook__fileURLToPath(import.meta.url);
const __dirname = __vitebook__path.dirname(__filename);

// .vitebook/config.ts
import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { preactPlugin } from '@vitebook/preact/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';
var config_default = defineConfig({
  include: ['src/**/*.story.{jsx,tsx}'],
  plugins: [
    preactPlugin({ appFile: 'App.tsx' }),
    clientPlugin(),
    defaultThemePlugin()
  ],
  site: {
    title: 'ElegantUI Atoms',
    description: 'ElegantUI base components',
    theme: {}
  }
});
export { config_default as default };
