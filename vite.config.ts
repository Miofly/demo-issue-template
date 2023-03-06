import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { VftResolver } from './element-plus';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(),
		
		Components({
			// include: `${__dirname}/**`,
			resolvers: VftResolver({ importStyle: 'css' }),
			dts: false,
		}),],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
