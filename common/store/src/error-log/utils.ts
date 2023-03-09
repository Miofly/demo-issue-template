/**
 * @description 用于配置全局错误处理功能，该功能可以监视vue错误、脚本错误、静态资源错误和 promise 错误
 * @author wfd
 * @date 2021/11/7 12:08
 */
import { listenerRouteChange, offChangeListener, useRouterHelper } from '@vft/router';
import { type App, type ComponentPublicInstance, watch } from 'vue';
import { type Router } from 'vue-router';
import { useMultipleTabStore, useTabs } from '../multiple-tab';
import { type ErrorLogInfo, ErrorTypeEnum, useErrorLogStore } from './index';

/**
 * @description 处理错误堆栈信息
 * @param error
 */
function processStackMsg(error: Error) {
  if (!error.stack) {
    return '';
  }
  let stack = error.stack
    .replace(/\n/gi, '') // 删除换行符以保存传输内容的大小
    .replace(/\bat\b/gi, '@') // chrome中是at，ff中是@
    .split('@') // 以@分割信息
    .slice(0, 9) // 最大堆栈长度（Error.stackTraceLimit = 10），所以只取前10条
    .map((v) => v.replace(/^\s*|\s*$/g, '')) // 去除多余空格
    .join('~') // 手动添加分隔符，便于后期展示
    .replace(/\?[^:]+/gi, ''); // 去除js文件链接的多余参数(?x=1之类)
  const msg = error.toString();
  if (stack.indexOf(msg) < 0) {
    stack = msg + '@' + stack;
  }
  return stack;
}

/**
 * @description 获取组件名称
 * @author wfd
 * @date 2021/10/31 19:02
 * @param vm
 */
function formatComponentName(vm: ComponentPublicInstance) {
  if (vm.$root === vm) {
    return {
      name: 'root',
      path: 'root'
    };
  }

  const options = vm.$options;
  if (!options) {
    return {
      name: 'anonymous',
      path: 'anonymous'
    };
  }
  const name = options.name || options._componentTag;
  return {
    name: name,
    path: options.__file
  };
}

/**
 * @description 配置 Promise 错误处理功能
 * @author wfd
 * @date 2021/11/1 09:03
 */
function registerPromiseErrorHandler() {
  window.addEventListener(
    'unhandledrejection',
    function (event) {
      console.error(event);

      const errorLogStore = useErrorLogStore();
      errorLogStore.addErrorLogInfo({
        type: ErrorTypeEnum.PROMISE,
        name: 'Promise Error!',
        file: 'none',
        detail: 'promise error!',
        url: window.location.href,
        stack: 'promise error!',
        message: event.reason
      });
    },
    true
  );
}

/**
 * @description 监控资源加载错误（img、脚本、css和jsonp）
 * @author wfd
 * @date 2021/11/1 09:05
 */
function registerResourceErrorHandler() {
  window.addEventListener(
    'error',
    function (e: Event) {
      const target = e.target ? e.target : (e.srcElement as any);
      const isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
      if (!isElementTarget) return false;

      console.error(e);

      const errorLogStore = useErrorLogStore();
      errorLogStore.addErrorLogInfo({
        type: ErrorTypeEnum.RESOURCE,
        name: 'Resource Error!',
        file: (e.target || ({} as any)).currentSrc,
        detail: JSON.stringify({
          tagName: target.localName,
          html: target.outerHTML,
          type: e.type
        }),
        url: window.location.href,
        stack: 'resource is not found',
        message: (e.target || ({} as any)).localName + ' is load error'
      });
    },
    true
  );
}

/**
 * @description 配置全局错误处理
 * @author wfd
 * @date 2021/10/31 18:59
 * @param app
 * @param router
 * @param error_tab_title
 * @param white_route_name_list
 */
export function setupErrorHandle(app: App, router: Router, error_tab_title, white_route_name_list) {
  const errorLogStore = useErrorLogStore();
  const tabStore = useMultipleTabStore();

  const { getTitle, getName } = useRouterHelper(router);

  // 配置 vue 异常处理
  app.config.errorHandler = (err: unknown, vm: ComponentPublicInstance | null, info: string) => {
    console.log('vue文件发现异常', err);
    const { name, path } = formatComponentName(vm!);
    errorLogStore.addErrorLogInfo({
      type: ErrorTypeEnum.VUE,
      name,
      file: path!,
      message: (err as Error).message,
      stack: processStackMsg(err as Error),
      detail: info,
      url: window.location.href
    });

    errorTrue();
  };

  // script error
  window.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
    if (event === 'Script error.' && !source) {
      return false;
    }

    const ignoreEvent = ['ResizeObserver loop completed with undelivered notifications.', 'ResizeObserver loop limit exceeded'];

    if (ignoreEvent.includes(event as string)) {
      console.warn('Ignored: ', event);
      return false;
    }

    console.error('javaScript 发现异常', error, source, lineno, colno, event);

    const errorInfo: Partial<ErrorLogInfo> = {};
    // 不一定所有浏览器都支持col参数，如果不支持就用window.event来兼容
    colno = colno || (window.event && (window.event as any).errorCharacter) || 0;
    errorInfo.message = event as string;
    if (error?.stack) {
      errorInfo.stack = error.stack;
    } else {
      errorInfo.stack = '';
    }
    const name = source ? source.substr(source.lastIndexOf('/') + 1) : 'script';
    const errorLogStore = useErrorLogStore();
    errorLogStore.addErrorLogInfo({
      type: ErrorTypeEnum.SCRIPT,
      name: name,
      file: source as string,
      detail: 'lineno' + lineno,
      url: window.location.href,
      ...(errorInfo as Pick<ErrorLogInfo, 'message' | 'stack'>)
    });
    errorTrue();
    return true;
  };

  function errorTrue() {
    if (!white_route_name_list.includes(getName)) {
      errorLogStore.setErrorStatus(true);
    }
  }

  // promise 异常处理
  registerPromiseErrorHandler();

  // 静态资源异常处理
  registerResourceErrorHandler();

  function callback() {
    errorLogStore.setErrorStatus(false);
  }

  // 监听 error 状态，设置异常 title，监听路由跳转执行更改 error 状态
  watch(
    () => errorLogStore.getErrorStatus,
    (val) => {
      if (val) {
        const { setTitle } = useTabs(router);
        if (error_tab_title) {
          setTitle(error_tab_title);
        }
        listenerRouteChange(callback, false);
      } else {
        offChangeListener(callback);
      }
    }
  );

  // 监听页面刷新，更改 error 状态，恢复原始 title
  watch(
    () => tabStore.getReloadFlag,
    (val) => {
      if (val) {
        callback();
        const originTitle: string = getTitle as string;
        const { getCurrentTab, setTitle } = useTabs(router);
        const title = getCurrentTab()?.meta?.title;
        if (title === error_tab_title) {
          setTitle(originTitle);
        }
      }
    }
  );
}
