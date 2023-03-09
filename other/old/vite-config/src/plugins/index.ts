import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { resolve } from 'path';
import VueMacros from 'unplugin-vue-macros/vite';
import type { PluginOption } from 'vite';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import proxy from 'vite-plugin-http2-proxy';
import svgLoader from 'vite-svg-loader';
import { UnocssToUni } from 'vite-plugin-unocss-to-uni';
import type { ProConfig } from '../';
import htmlTemplate from 'vite-plugin-html-template-mpa';
import viteVConsole from 'vite-plugin-vconsole-mpa';
import mpa from 'vite-plugin-multi-pages';
// import htmlTemplate from '../../../../other/vites/vite-plugin-html-template-mpa/src';
// import mpa from '../../../../other/vites/vite-plugin-multi-pages/src';
// import viteVConsole from '../../../../other/vites/vite-plugin-vconsole-mpa/src';
import { TOKEN_PROXY } from '../constants';
import type { ViteEnv } from '../utils';
import { resolveProxy } from '../utils';
import { autoComponents } from './autoComponents';
import autoImport from './autoImport';
import pwa from './pwa';
import { configCompressPlugin } from './compress';
import { unocss } from './unocss';
import Mkcert from 'vite-plugin-mkcert';
// import EntryShakingPlugin from 'vite-plugin-entry-shaking';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import dynamicImport from 'vite-plugin-dynamic-import';

export async function configVitePlugins(root: string, viteEnv: ViteEnv, isBuild: boolean, proConfig?: ProConfig) {
  const {
    VITE_LEGACY,
    VITE_BUILD_COMPRESS = 'none',
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE = false,
    VITE_USE_MORE_PAGE = true,
    VITE_BUILD_MATCH_FILE,
    VITE_BUILD_IGNORE_MATCH_FILE,
    VITE_BUILD_PREFIX_NAME = false,
    VITE_DEV_DEFAULT_PAGE,
    VITE_PAGEJUMP_TYPE,
    VITE_OPEN_VCONSOLE,
    VITE_USE_MOCK,
    VITE_IS_UNI,
    VITE_USE_HTTPS = true,
    VITE_PROJECT_TYPE,
    VITE_PROXY,
    VITE_OPEN_TS_CHECK,
    VITE_USE_PWA,
    VITE_PUBLIC_PATH
  } = viteEnv;

  let prefixName;
  const _root = root.replace(/\\/g, '/');

  const _pageName = _root.split('/')[_root.split('/').length - 1];

  if (VITE_BUILD_PREFIX_NAME) {
    if (typeof VITE_BUILD_PREFIX_NAME === 'boolean') {
      prefixName = _pageName + '-';
    } else {
      prefixName = VITE_BUILD_PREFIX_NAME + '-';
    }
  } else {
    prefixName = '';
  }

  const { pages, pwaCfg } = proConfig || { pages: {} };

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    VueMacros({
      reactivityTransform: true,
      betterDefine: false,
      defineModel: false,
      defineProps: false,
      definePropsRefs: false,
      defineSlots: false,
      exportProps: false,
      namedTemplate: false,
      setupBlock: false,
      setupComponent: false,
      setupSFC: false,
      shortEmits: false
    }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    // await EntryShakingPlugin({
    //   targets: [resolve(root, 'node_modules/@vft/utils'), resolve(root, 'node_modules/@vft/utils/src'), resolve(root, 'node_modules/@vft/use'), resolve(root, 'node_modules/@vft/use/src')]
    // }),
    svgLoader(),
    vueJsx(), // 如有需要
    // configMarkdown(),
    unocss(),
    autoComponents(VITE_PROJECT_TYPE === 'web', _root),
    autoImport(_root),
    VITE_USE_PWA ? pwa(pwaCfg, VITE_PUBLIC_PATH) : '',
    dynamicImport(/* options */)
  ];

  VITE_LEGACY && isBuild && !VITE_IS_UNI && vitePlugins.push(legacy());

  if (VITE_OPEN_VCONSOLE && !VITE_IS_UNI) {
    vitePlugins.push(
      // @ts-ignore
      viteVConsole({
        // entry: [resolve(root, 'src/pages/test-one/main.ts')], // 每个页面的入口文件，和上面不一样的地方，这里是一个数组
        enabled: VITE_OPEN_VCONSOLE,
        config: {
          maxLogNumber: 1000,
          theme: 'light'
        }
      })
    );
  }

  if (VITE_USE_MORE_PAGE) {
    vitePlugins.push(
      mpa({
        specialPageNames: isBuild ? VITE_BUILD_MATCH_FILE : '',
        ignorePageNames: isBuild ? VITE_BUILD_IGNORE_MATCH_FILE : '',
        defaultOpenPage: VITE_DEV_DEFAULT_PAGE
      })
    );
  }

  vitePlugins.push(
    htmlTemplate({
      pages: VITE_USE_MORE_PAGE ? pages : {},
      jumpTarget: VITE_PAGEJUMP_TYPE || '_self',
      buildCfg: {
        buildPrefixName: prefixName,
        moveHtmlTop: true,
        htmlHash: false,
        buildAssetDirName: _pageName + '/asset',
        buildChunkDirName: _pageName + '/js',
        buildEntryDirName: _pageName + '/js'
        // htmlPrefixSearchValue: '/static',
        // htmlPrefixReplaceValue: 'static'
      }
    })
  );

  // vitePlugins.push(configVisualizerConfig());

  if (isBuild) {
    if (!VITE_IS_UNI) {
      vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE));
    }
  }

  if (VITE_IS_UNI) {
    vitePlugins.push(UnocssToUni());
  }

  // 是否开启 mock 配置
  // VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  if (!isBuild) {
    vitePlugins
      .push
      // eslintPlugin({
      //   fix: true,
      //   include: ['**/*.{js,jsx,ts,tsx,vue}'],
      //   exclude: ['/registerSW.js', '/workbox-*', '/dev-sw.js', '**/**.json.**', '**/uni_modules/**', 'auto-imports.d.ts', 'components.d.ts']
      // })
      // Inspector({
      //   vue: 3,
      //   enabled: true
      // })
      ();
    if (VITE_OPEN_TS_CHECK) {
      vitePlugins.push(
        checker({
          vueTsc: true,
          typescript: true,
          overlay: {
            badgeStyle: 'font-size: 14px'
          }
        })
      );
    }
    if (VITE_USE_HTTPS) {
      vitePlugins.push(
        Mkcert({
          // autoUpgrade: true,
          // force: true,
          source: 'coding'
        }),
        // basicSsl(),
        proxy(resolveProxy(VITE_PROXY?.concat(TOKEN_PROXY)) as any)
      );
    }
  }

  return vitePlugins;
}
