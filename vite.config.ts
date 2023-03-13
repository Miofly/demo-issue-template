import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import VueMacros from 'unplugin-vue-macros/vite';
import { defineConfig } from 'vite'
import { CompResolver } from './comp-resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
      include: `${__dirname}/**`,
      resolvers: [
        CompResolver({ importStyle: 'sass', compName: 'wfly' }),
        ElementPlusResolver({ importStyle: 'sass' }),
      ],
      dts: true,
    }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
