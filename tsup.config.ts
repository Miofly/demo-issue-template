import { resolve } from 'path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/service-worker.ts'],
  format: ['cjs', 'esm'],
  outDir: 'src',
  tsconfig: resolve('./tsconfig.json'),
  clean: true,
  sourcemap: true
});
