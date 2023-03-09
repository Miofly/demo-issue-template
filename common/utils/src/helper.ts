import { type App, unref } from 'vue';

/** 设置某个 dom 节点的挂载位置 */
export function getPopupContainer(node?: HTMLElement): HTMLElement {
  /**
   * 判断当前节点的上一节点是否为 Null or undefined 如果是，则返回 document.body，
   * 否则返回当前节点的父节点
   */
  return (node?.parentNode as HTMLElement) ?? document.body;
}

/**
 * @description 将对象作为参数添加到URL
 * @param baseUrl 要被添加的 url 字符串
 * @param obj 添加到 URL 后面的对象参数
 * @returns {string}
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  /** 对要拼接的 obj 进行 for in 循环，并对 key 值做 encodeURIComponent 编码处理 */
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  /** 去掉最后一个参数拼接的 & 符号 */
  parameters = parameters.replace(/&$/, '');
  /**
   *  /\?$/.test(baseUrl): 判断 baseUrl 是否以 ? 结尾
   *  如果是则返回 baseUrl + parameters
   *  如果不是则再 baseUrl 后面拼接一个 ？==> baseUrl.replace(/\/?$/, '?')
   */
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

export type OpenWinType = { target?: TargetContext; noopener?: boolean; noreferrer?: boolean };

/**
 * @description window.open 的方式打开一个新标签页
 * @author wfd
 * @date 2021-07-22 09:25:00
 * @param url 要打开的网址链接
 * @param opt target- _self 当前标签页打开 | _blank 打开一个新 tab
 */
export function openWindow(url: string, opt?: OpenWinType) {
  const { target = '_blank', noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');

  window.open(url, target, feature.join(','));
}

/**
 * @description 获取动态 props
 * @author wfd
 * @date 2021/10/5 09:37
 * @param props
 */
export function getDynamicProps<T, U>(props: T): Partial<U> {
  const ret: Recordable = {};

  // @ts-ignore
  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });

  return ret as Partial<U>;
}

export const withInstall = (component, alias?: string) => {
  // 获取传入的组件
  const comp = component as any;
  comp.install = (app: App) => {
    // console.log('自动调用', comp, app);
    // 注册全局组件 第一个参数为 组件名称 第二个是组件
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component;
};

/**
 * @description 根据 package.json 创建项目存储前缀
 * @author wfd
 * @date 2022/8/29 13:29
 * @result APP_0.0.1_DEVELOPMENT
 * @param pkgJson package.json 的数据
 */
export const createStoragePrefixName = (pkgJson) => {
  const { name, version } = pkgJson;
  return `${name}_${version}_`.toUpperCase();
};

/**
 * @description 复制文本
 * @author wfd
 * @date 2022/8/31 17:13
 * @example
 * @param content
 * @param callback
 */
export const copyToClipBoard = (content: string, callback?: () => any) => {
  if (!document.queryCommandSupported('copy')) {
    // 为了兼容有些浏览器 queryCommandSupported 的判断
    // 不支持
    callback?.();
  }
  const textarea: HTMLTextAreaElement = document.createElement('textarea');
  textarea.value = content;
  textarea.readOnly = true;
  document.body.appendChild(textarea);
  textarea.select(); // 选择对象
  textarea.setSelectionRange(0, content.length);
  const result = document.execCommand('copy');
  if (result) {
    callback?.();
  } else {
    callback?.();
  }
  textarea.remove();
};

export function nofn() {}

/**
 * 在新的tab打开url地址
 * @param {string} url
 * @param target
 */
export const openNewTab = (url: string, target = '_blank') => {
  const link = document.createElement('a');
  link.href = url;
  link.target = target;
  link.rel = 'noopener';
  link.click();
  link.remove();
};

/** 判断是否为 pwa 应用 */
export function isPwa() {
  return ['fullscreen', 'standalone', 'minimal-ui'].some((displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches);
}

// 跳转至微信
export function jumpWechat(): void {
  window.location.replace('weixin://');
}

// 返回
export function back(): void {
  window.history.back();
}

export function getMobile() {
  const prefixArray = ['130', '131', '132', '133', '135', '137', '138', '170', '187', '189'];
  const i = parseInt(String(10 * Math.random()));
  let prefix = prefixArray[i];
  for (let j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix;
}
