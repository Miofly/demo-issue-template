/* eslint-disable */
/**
 * .env.development 的 代理配置
 */
import type { ProxyOptions } from 'vite';
import fs from 'fs-extra';
import { devDependencies } from '../../package.json';
import path, { resolve } from 'path';

export interface ViteEnv {
  VITE_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_USE_CDN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_LEGACY: boolean;
  VITE_USE_IMAGEMIN: boolean;
  VITE_IS_UNI: boolean;
  VITE_GENERATE_UI: string;
  VITE_USE_MORE_PAGE: string;
  VITE_AUTO_OPEN: boolean;
  VITE_OPEN_VCONSOLE: boolean;
  /** 打包特定的文件 */
  VITE_BUILD_MATCH_FILE: string;
  VITE_BUILD_IGNORE_MATCH_FILE: string;
  VITE_BUILD_PREFIX_NAME: string;
  VITE_DEV_DEFAULT_PAGE?: string;
  VITE_PAGEJUMP_TYPE?: '_self' | '_blank';
  VITE_USE_HTTPS?: boolean;
  VITE_OPEN_TS_CHECK?: boolean;
  VITE_PROJECT_TYPE?: 'app' | 'web';
  VITE_REM_ROOT_VALUE?: number;
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Record<string, any>): ViteEnv {
  const viteEnv: Partial<ViteEnv> = {};

  for (const key of Object.keys(envConf)) {
    let realName = envConf[key].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (key === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = '';
      }
    }

    viteEnv[key] = realName;
    if (typeof realName === 'string') {
      process.env[key] = realName;
    } else if (typeof realName === 'object') {
      process.env[key] = JSON.stringify(realName);
    }
  }
  return viteEnv as ViteEnv;
}

/**
 * Configure according to the proxy list
 * @param proxyList
 */
export function resolveProxy(proxyList: [string, string][] = []) {
  const proxy: Record<string, ProxyOptions> = {};
  for (const [prefix, target] of proxyList) {
    const isHttps = /^https:\/\//.test(target);
    // https://github.com/http-party/node-http-proxy#options
    proxy[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    };
  }
  return proxy;
}

/**
 * Configure according to the proxy list
 * @param proxyList
 */
export function resolveProxyHttp2(proxyList: [string, string][] = []) {
  const proxy: Record<string, ProxyOptions> = {};
  for (const [prefix, target] of proxyList) {
    const isHttps = /^https:\/\//.test(target);
    // https://github.com/http-party/node-http-proxy#options
    proxy[prefix] = {
      target: target,
      // changeOrigin: true,
      // ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '')
      // https is require secure=false
      // ...(isHttps ? { secure: false } : {})
    };
  }
  return proxy;
}

/**
 * @description 目录不存在则自动创建
 * @author wfd
 * @date 2022/8/3 13:01
 * @example
 * @param targetDir
 */
export function createDir(targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirsSync(targetDir);
  }
}

export function soloveVueTstError(root) {
  const viteVersion = devDependencies.vite.replace('^', '');
  const vitePluginCheckerVersion = devDependencies['vite-plugin-checker'].replace('^', '');

  const _vitePluginPath = path.join(root, '/configs/vite/node_modules/vite-plugin-checker/lib/checkers/vueTsc/typescript-vue-tsc');

  if (fs.existsSync(_vitePluginPath) && !fs.existsSync(_vitePluginPath + '/package.json')) {
    fs.copyFileSync(path.join(root, '/configs/vite/src/utils/vue-tsc-error'), _vitePluginPath + '/package.json');
  }
}

export function getOptimizeDepIncludes(isAdmin: string | undefined, isMorePage: string | boolean) {
  let optimizeDepInclude = ['vue', '@vueuse/core', 'lodash-es', 'axios'];
  if (isAdmin) {
    optimizeDepInclude = optimizeDepInclude.concat([
      'dayjs',
      'pinia',
      'vue-router',
      'vue-request',
      'pinia-plugin-persistedstate',
      'element-plus/es',
      'element-plus/es/components/form/style/css',
      'element-plus/es/components/form-item/style/css',
      'element-plus/es/components/input/style/css',
      'element-plus/es/components/button/style/css',
      'element-plus/es/components/checkbox/style/css',
      'element-plus/es/components/radio/style/css',
      'element-plus/es/components/select/style/css',
      'element-plus/es/components/option/style/css',
      'element-plus/es/components/upload/style/css'
    ]);
  } else {
    optimizeDepInclude = optimizeDepInclude.concat([
      'vconsole',
      'vant',
      'vant/es',
      'vant/es/loading/style/index',
      'vant/es/action-sheet/style/index',
      'vant/es/button/style/index',
      'vant/es/picker/style/index'
    ]);
  }

  if (!isMorePage) {
    optimizeDepInclude = optimizeDepInclude.concat(['pinia', 'vue-router']);
  }
  return optimizeDepInclude;
}

export function generateModifyVars(isAdmin: string | undefined) {
  const primary = '#2a7dc9';

  const proName = isAdmin ? 'web' : 'app';

  return {
    // 用于全局导入，以避免需要单独导入每个样式文件。
    // reference: 避免重复引用
    hack: `true; @import (reference) "${resolve(`./node_modules/@vri/styles/vars/${proName}/index.less`)}";`
  };
}

/**
 * @description getProRootPath
 * @author wfd
 * @date 2022/8/10 22:07
 * @example
 * getPwd('/Users/miofly/Documents/mio/new-mio/apps/wfly-monorepo/apps/apps-template/pro-template', '/apps/')
 * 输出：'/Users/miofly/Documents/mio/new-mio/apps/wfly-monorepo'
 * @param root
 * @param projectDirName
 */
export function getProRootPath(root: string, projectDirName: string) {
  projectDirName = '/' + projectDirName + '/';
  const rootSplit = root.split(projectDirName);
  rootSplit.pop();
  return rootSplit.join(projectDirName);
}
