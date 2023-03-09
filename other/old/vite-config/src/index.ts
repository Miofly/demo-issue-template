import Autoprefixer from 'autoprefixer';
import { join, resolve } from 'path';
import PostCssToRem from 'postcss-pxtorem';
import type { UserConfig, UserConfigFn } from 'vite';
import { defineConfig, loadEnv, mergeConfig } from 'vite';
import { type VitePWAOptions } from 'vite-plugin-pwa';

// import type { HtmlTemplateMpaOptions } from 'vite-plugin-html-template-mpa';
import type { HtmlTemplateMpaOptions } from 'vite-plugin-html-template-mpa';
import { ASSET_DIR, TOKEN_PROXY } from './constants';
import { configVitePlugins } from './plugins';
import { createDir, generateModifyVars, getOptimizeDepIncludes, getProRootPath, resolveProxy, soloveVueTstError, wrapperEnv } from './utils';

export type ViteConfig = Promise<UserConfig | UserConfigFn>;

export type ProConfig = {
  pages: HtmlTemplateMpaOptions['pages'];
  pwaCfg: Partial<VitePWAOptions>;
};

export async function createViteConfig(cwd: string, proConfig?: Partial<ProConfig>, proViteConfig?: Record<string, any>): Promise<UserConfig | UserConfigFn> {
  return defineConfig(async ({ command, mode }) => {
    const root = cwd;
    // loadEnv ---> mode: 启动模式 envDir：环境变量文件路径 prefixes：指定读取的变量名前缀
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env);

    const { VITE_PROXY, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_USE_MORE_PAGE = true, VITE_AUTO_OPEN = true, VITE_USE_HTTPS = true, VITE_REM_ROOT_VALUE = 50, VITE_PROJECT_TYPE } = viteEnv;

    // console.log(VITE_REM_ROOT_VALUE);

    const isAdmin = VITE_PROJECT_TYPE === 'web';
    const projectDirName = isAdmin ? 'admins' : 'apps';

    const isBuild = command === 'build';
    const _root = root.replace(/\\/g, '/');

    const outDir = join(getProRootPath(_root, projectDirName), `${projectDirName}/dist`);

    const packagesPath = join(getProRootPath(_root, projectDirName), 'packages');

    createDir(resolve(root, './types'));

    if (!isBuild) {
      soloveVueTstError(_root.split(`${projectDirName}/`)[0]);
    }

    const postCssPlugin = VITE_PROJECT_TYPE
      ? [Autoprefixer()]
      : [
          Autoprefixer(),
          PostCssToRem({
            rootValue: VITE_REM_ROOT_VALUE,
            propList: ['*']
          })
        ];

    const commonServer = {
      open: VITE_AUTO_OPEN,
      port: 8890,
      https: VITE_USE_HTTPS,
      host: true
    };

    const server = VITE_USE_HTTPS
      ? commonServer
      : {
          ...commonServer,
          proxy: isBuild ? {} : resolveProxy(VITE_PROXY?.concat(TOKEN_PROXY))
        };

    const commonConfig: UserConfig = {
      // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
      root,
      // 开发或生产环境服务的公共基础路径
      // 绝对 URL 路径名，例如 /foo/，完整的 URL，例如 https://foo.com/  空字符串或 ./（用于开发环境）
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: {
          '@/': `${resolve(root, 'src')}/`,
          '#/': `${resolve(root, 'types')}/`,
        }
      },
      // // 定义全局变量替换方式。在开发时会被定义为全局变量，生产环境静态替换。
      define: {
        // __APP_INFO__: JSON.stringify({
        //   pkg: { dependencies, devDependencies, name, version },
        //   lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
        // })
      },
      json: {
        // 是否支持从 .json 文件中进行按名导入。
        namedExports: true,
        // 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")，
        // 这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。
        stringify: false
      },
      server,
      esbuild: {
        pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            // 在全局less文件后面添加变量的配置。modifyVars 对应的对象属性名会加上@追加到less文件后。
            modifyVars: generateModifyVars(VITE_PROJECT_TYPE)
          },
          scss: {
            additionalData: '@import "./node_modules/@vri/styles/web/index.scss";' + '@import' +
              ' "src/styles/vars.scss";' + '@import "./node_modules/vft-ui/src/styles/vars.scss";',
            javascriptEnabled: true
          }
        },
        postcss: {
          plugins: postCssPlugin
        }
      },
      build: {
        assetsDir: ASSET_DIR, // 静态资源文件夹，和outDir同级 默认assets
        target: 'es2015',
        cssTarget: 'chrome61',
        outDir: 'dist',
        emptyOutDir: false,
        /** 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。 */
        reportCompressedSize: false,
        /**
         * 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
         * 如果你指定了 build.lib，那么 build.assetsInlineLimit 将被忽略，无论文件大小，资源都会被内联。
         */
        assetsInlineLimit: 4096,
        /**
         * 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。
         * 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
         */
        cssCodeSplit: true,
        /** chunk 大小警告的限制（以 kbs 为单位） */
        chunkSizeWarningLimit: 2048,
        rollupOptions: {
          output: {
            manualChunks: {
              vue: ['vue', 'pinia', 'vue-router']
              // echarts: ['echarts']
              // mockjs: ['mockjs']
            },
            // 入口文件
            entryFileNames: `${ASSET_DIR}/js/[name]-[hash].js`,
            chunkFileNames: `${ASSET_DIR}/chunk/[name]-[hash].js`,
            // 静态资源文件
            assetFileNames: `${ASSET_DIR}/[name]-[hash].[ext]`
          }
        }
      },
      optimizeDeps: {
        include: getOptimizeDepIncludes(VITE_PROJECT_TYPE, VITE_USE_MORE_PAGE),
        exclude: ['vue-demi']
      },
      plugins: await configVitePlugins(root, viteEnv, isBuild, proConfig)
    };

    return mergeConfig(commonConfig, proViteConfig as Record<string, any>);
  });
}
