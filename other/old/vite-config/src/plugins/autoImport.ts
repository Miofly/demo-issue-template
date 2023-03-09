import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
export default function autoImport(root: string) {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      '@vueuse/core',
      {
        'vue/macros': ['$$', '$ref', '$computed', '$toRef']
      },
      {
        'vue-request': ['useRequest']
      },
      {
        '@vft/router': ['useRouterHelper']
      },
      {
        'pinia-plugin-persistedstate': ['createPersistedState']
      }
      // {
      //   '@dcloudio/uni-app': [
      //     'onHide',
      //     'onLaunch',
      //     'onShow',
      //     'onLoad',
      //     'onPullDownRefresh',
      //     'onPageScroll',
      //     'onReachBottom'
      //   ]
      // }
    ],
    dts: resolve(root, './types/auto-imports.d.ts')
  });
}
