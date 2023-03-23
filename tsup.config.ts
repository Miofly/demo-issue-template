import { resolve } from 'path';
import { defineConfig } from 'tsup';
import fs from 'fs-extra';

export default defineConfig({
  entry: [resolve('./src/service-worker.ts')],
  format: ['iife'],
  watch: true,
  onSuccess: () => {
    fs.copyFile('./dist/service-worker.global.js', './public/service-worker.js')
  },
  tsconfig: resolve('./tsconfig.node.json'),
  clean: true,
  replaceNodeEnv: true,
  // sourcemap: true
});
