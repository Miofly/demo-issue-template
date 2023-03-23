import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import VueMacros from 'unplugin-vue-macros/vite';
import { CompResolver } from 'wfly';

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
    
    Components({
      resolvers: CompResolver({ importStyle: 'sass' }),
      dts: false,
    })
  ],
  server: {
    port: 7786
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
