import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import VueMacros from 'unplugin-vue-macros/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros({
    setupComponent: false,
    setupSFC: false,
    plugins: {
      vue: vue(),
      vueJsx: vueJsx(),
    },
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
