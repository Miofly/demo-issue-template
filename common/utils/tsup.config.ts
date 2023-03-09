import { resolve } from 'path';
import { defineConfig } from 'tsup';
import glob from 'fast-glob';


import fs from 'fs-extra';

export function stubHelper () {
  
  const distDir = resolve('./dist');
  const oldCjs = resolve(distDir, 'index.js');
  const oldMjs = resolve(distDir, 'index.mjs');
  
  const cjs = resolve(distDir, 'cjs/index.cjs');
  const mjs = resolve(distDir, 'es/index.js');
  
  fs.moveSync(oldCjs, cjs);
  fs.moveSync(oldMjs, mjs);
}

export default defineConfig(() => {
  return {
    entry: ['./src/index.ts'],
    external: ['@vue/shared', '@vueuse/core', 'vue', 'lodash'],
    format: ['cjs', 'esm'],
    watch: true,
    outDir: 'dist',
    onSuccess: () => {
      stubHelper()
    },
    dts: {
      resolve: true,
      compilerOptions: {
        skipLibCheck: true
      }
    },
    tsconfig: resolve('./tsconfig.json'),
    clean: true,
  }
});
