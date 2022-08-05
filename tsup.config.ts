import { defineConfig } from 'tsup';

export default defineConfig({
  external: ['react'],
  dts: { only: true },
  format: ['cjs', 'esm'],
  minify: true,
  clean: true,
  legacyOutput: true,
  minifyIdentifiers: true,
  outDir: 'dist',
  replaceNodeEnv: true
});
