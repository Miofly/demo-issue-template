import { camelize } from '@vue/shared';
import { isClient } from '@vueuse/core';
import { isFunction, kebabCase } from 'lodash';
import { type CSSProperties, Fragment, h, type Slots, unref } from 'vue';
import { addUnit } from './format';
import { isNullOrUndefined, isObject } from './is';

/**
 * @description 阻止事件传播
 * @author wfd
 * @date 2022/7/6 11:21
 * @example
 * @param event
 */
export const stopPropagation = (event: Event) => event.stopPropagation();

/**
 * @description preventDefault
 * @author wfd
 * @date 2022/7/6 11:26
 * @example
 * @param event
 * @param isStopPropagation
 */
export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

function genBem(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    // @ts-ignore
    return mods.reduce<string>((ret, item) => ret + genBem(name, item), '');
  }

  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name, key) : ''), '');
}

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export function createBEM(name: string) {
  return (el?: Mods, mods?: Mods): Mods => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${genBem(el, mods)}`;
  };
}

/**
 * @description 根据 attrName 获取 css var 变量
 * @author wfd
 * @date 2022/9/2 13:14
 * @example
 * @param bemName
 * @returns {(attrName) => string}
 */
export const cssVarName = (bemName) => {
  return (attrName, hasVar) => {
    if (hasVar) {
      return `var(--${bemName}-${attrName})`;
    }
    return `--${bemName}-${attrName}`;
  };
};

/**
 * @description
 * @author wfd
 * @date 2022/9/6 11:05
 * @example
 * @param {(attrName, hasVar) => string} cssVarName
 * @param keyNames
 * @param {boolean} hasUnit
 * @returns {{}}
 */
export const getStyleVars = (cssVarName: (attrName, hasVar) => string, keyNames, hasUnit = true) => {
  const obj = {};
  for (const item of keyNames) {
    if (item) {
      obj[cssVarName(item['key'], false)] = hasUnit ? addUnit(unref(item['value'])) : unref(item['value']);
    }
  }
  return obj;
};

/**
 * @description 页面尺寸初始化
 * @author wfd
 * @date 2022/9/8 13:43
 * @example
 * @param {number} designWidth 设计稿宽度
 * @param {number} baseSize 基础的 fontSize 需要与 postcss-to-rem 一致
 * @param {boolean} rotate 是否适配横屏
 */
export const resize = (designWidth = 375, baseSize = 50, rotate = true) => {
  let width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  if (rotate) {
    if (width > height) {
      [width] = [height, width];
    }

    if (width < 320) {
      const screen = window.screen;
      width = screen[screen.width > screen.height ? 'height' : 'width'];
      if (width < 320) width = 320;
    }
  }

  function setRem() {
    const scale = document.documentElement.clientWidth / designWidth;
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
  }

  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem();
  };
};

/**
 * @description 判断元素是否含有某个 class 名称
 * @author wfd
 * @date 2021/9/19 09:13
 * @param el 元素
 * @param cls class 名称
 */
export function hasClass(el: Element, cls: string) {
  /** 如果 el 与 cls 任意一个没有传值，或者为 false 则直接返回 false */
  if (!el || !cls) return false;
  /** 判断 class 中是否包含空格，如果包含空格，提示报错 */
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  /** 判断当前 element 元素中的 classList 是否包含 class 对应的字符串 */
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    /** 如果当前 el.classList 为 false,则去判断 元素的 className 中是否拥有 class 字符串 */
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/**
 * @description 去除左右两边空格
 * @author wfd
 * @date 2021/10/5 09:55
 * @param string 要去除的字符串
 */
function trim(string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

/**
 * @description 给元素添加 class
 * @author wfd
 * @date 2021/9/19 09:24
 * @param el 传入的 element 元素
 * @param cls 传入的类名，多个类名用空格分割
 */
export function addClass(el: Element, cls: string) {
  /** 元素是必传，不传直接 return */
  if (!el) return;
  /** 获取当前元素的所有 className example:'container d-flex clearfix' */
  let curClass = el.className;
  /** 对传入的 class 字符串进行分割成数组 */
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    /** 获取每一个传入的 class 元素 */
    const clsName = classes[i];
    /** 如果不存在则中断此次循环进行下一次循环 */
    if (!clsName) continue;

    /** 如果当前 classList 属性存在，则添加本次的 class 属性 */
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      /** 否则判断当前元素是否包含此次的 class 属性，如果为 false 则 curClass 拼接传入的 class 属性 */
      curClass += ' ' + clsName;
    }
  }
  /** 如果 classList 存在说明添加的 class 属性在循环中已经 add 到元素的 classList 当中 */
  if (!el.classList) {
    /** 当元素的 classList 不存在，则把之前拼接好的 curClass 字符串赋给元素的 className 属性 */
    el.className = curClass;
  }
}

/**
 * @description 移除元素的 class 属性
 * @author wfd
 * @date 2021/9/19 09:36
 * @param el
 * @param cls
 */
export function removeClass(el: Element, cls: string) {
  /** 要移除的元素和 class 都必须同时存在 */
  if (!el || !cls) return;
  /** 对 cls 属性使用 split 分割成数组 */
  const classes = cls.split(' ');
  /** 对元素的 className 属性左右各加一个空格 */
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    /** 获取每一个传入的 class 元素 */
    const clsName = classes[i];
    /** 如果不存在则中断此次循环进行下一次循环 */
    if (!clsName) continue;

    /** 如果当前 classList 属性存在，则移除本次的 class 属性 */
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      /** 否则判断当前元素是否包含此次的 class 属性，如果为 true 则 curClass 把此 class 替换为空 */
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  /** 如果 classList 存在说明添加的 class 属性在循环中已经在 classList 中移除了 */
  if (!el.classList) {
    /** 当元素的 classList 不存在，则把之前处理好的 curClass 字符串赋给元素的 className 属性，且需要除去空格 */
    el.className = trim(curClass);
  }
}

/**
 * @description  Get slot to prevent empty error
 */
export function getSlot(slots: Slots, slot = 'default', data?: any) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn) return null;
  return slotFn(data);
}

/**
 * extends slots
 * @param slots
 * @param excludeKeys
 */
export function extendSlots(slots: Slots, excludeKeys: string[] = []) {
  const slotKeys = Object.keys(slots);
  const ret: any = {};
  slotKeys.map((key) => {
    if (excludeKeys.includes(key)) {
      return null;
    }
    ret[key] = () => getSlot(slots, key);
  });
  return ret;
}

/**
 * Trigger an event
 * mouseenter, mouseleave, mouseover, keyup, change, click, etc.
 * @param  {HTMLElement} elm
 * @param  {String} name
 * @param  {*} opts
 */
export const triggerEvent = function (elm: HTMLElement, name: string, ...opts: Array<boolean>): HTMLElement {
  let eventName: string;

  if (name.includes('mouse') || name.includes('click')) {
    eventName = 'MouseEvents';
  } else if (name.includes('key')) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};

export const isInContainer = (el?: Element, container?: Element | Window): boolean => {
  if (!isClient || !el || !container) return false;

  const elRect = el.getBoundingClientRect();

  let containerRect: Pick<DOMRect, 'top' | 'bottom' | 'left' | 'right'>;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};

export const isScroll = (el: HTMLElement, isVertical?: boolean): boolean => {
  if (!isClient) return false;

  const key = (
    {
      undefined: 'overflow',
      true: 'overflow-y',
      false: 'overflow-x'
    } as const
  )[String(isVertical)]!;
  const overflow = getStyle(el, key);
  return ['scroll', 'auto', 'overlay'].some((s) => overflow.includes(s));
};

export const getScrollContainer = (el: HTMLElement, isVertical?: boolean): Window | HTMLElement | undefined => {
  if (!isClient) return;

  let parent: HTMLElement = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) return window;

    if (isScroll(parent, isVertical)) return parent;

    parent = parent.parentNode as HTMLElement;
  }

  return parent;
};

/**
 * @description 动态加载 css link
 * @author wfd
 * @date 2022/12/25 19:35
 * @example
 * @param url
 */
export function loadStyle(url) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
}

/** 元素跳转 */
export function jumpElement(
  id,
  options = {
    behavior: 'smooth',
    block: 'start'
  } as ScrollIntoViewOptions
) {
  (document.getElementById(id) as HTMLElement)?.scrollIntoView(options);
}

export const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
  if (!isClient || !element || !styleName) return '';

  let key = camelize(styleName);
  if (key === 'float') key = 'cssFloat';
  try {
    const style = (element.style as any)[key];
    if (style) return style;
    const computed: any = document.defaultView?.getComputedStyle(element, '');
    return computed ? computed[key] : '';
  } catch {
    return (element.style as any)[key];
  }
};

type CssPropertiesType = CSSProperties | keyof CSSProperties;

/**
 * @description set ele style and vars
 * @author wfd
 * @date 2023/1/30 09:26
 * @example setStyle(document.documentElement, { 'color': 'red', 'display': 'block' })
 *          setStyle(document.documentElement, 'color', 'red')
 * @param {HTMLElement} element
 * @param {CssPropertiesType} styleName
 * @param {string | number} value
 */
export const setStyle = (element: HTMLElement, styleName: CssPropertiesType, value?: string | number) => {
  if (!element || !styleName) return;

  if (isObject(styleName)) {
    Object.entries(styleName).forEach(([prop, value]) => setStyle(element, prop as CssPropertiesType, value));
  } else {
    element.style.setProperty(styleName, value as any);
  }
};

export const removeStyle = (element: HTMLElement, style: CssPropertiesType) => {
  if (!element || !style) return;

  if (isObject(style)) {
    Object.keys(style).forEach((prop) => removeStyle(element, prop as CssPropertiesType));
  } else {
    setStyle(element, style, '');
  }
};

/**
 * @description 将驼峰形式的对象转化为 css var 变量
 * @author wfd
 * @date 2022/9/21 15:05
 * @example
 * @param {Record<string, Numberish>} vars
 * @param name
 * @param namespace
 * @returns {Record<string, Numberish>}
 */
export function generateCssVars(vars: Record<string, Numberish | undefined>, name?, namespace = 'vft') {
  const cssVars: Record<string, Numberish | undefined> = {};
  Object.keys(vars).forEach((key) => {
    cssVars[`--${namespace}-${name ? name + '-' : ''}${kebabCase(key)}`] = vars[key];
  });
  return cssVars;
}

/**
 * @description set html vars
 * @author wfd
 * @date 2023/1/30 09:35
 * @example
 * @param {Record<string, Numberish | undefined>} vars
 * @param name
 * @param {string} namespace
 */
export function setRootCssVar(vars: Record<string, Numberish | undefined>, name?, namespace = 'vri') {
  setStyle(document.documentElement, generateCssVars(vars, name, namespace));
}

/**
 * @description set media style string
 * @author wfd
 * @date 2023/2/4 19:03
 * @param mediaText
 */
export const mediaStyle = (mediaText) => {
  const style = document.createElement('style');
  style.innerHTML = mediaText;
  style.type = 'text/css';
  return style;
};

export function setTargetScrollTop(target, scrollTop = 0) {
  document.querySelector(target).scrollTop = scrollTop;
}

export const getCssVarValue = (varName, target = document.documentElement) => {
  return getComputedStyle(target).getPropertyValue(varName);
};

/**
 * @description set dom width and height
 * @example
 * @returns
 * @param size
 */
export function setSize(size?: Numberish | Numberish[]): CSSProperties {
  if (Array.isArray(size)) {
    return {
      width: addUnit(size[0]),
      height: addUnit(size[1])
    };
  }
  const _size = addUnit(size);
  return {
    width: _size,
    height: _size
  };
}

export function highlight(contents: string, keyword: string[] | string = '', tag = 'span', props = { class: 'danger-color' }) {
  function doNotEscape(s: string) {
    return s.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  keyword = isNullOrUndefined(keyword) ? '' : Array.isArray(keyword) ? (keyword as string[]).map((d) => d.toLowerCase()) : (keyword as string).toLowerCase();
  const reg = new RegExp(`(${Array.isArray(keyword) ? keyword.map((k) => doNotEscape(k)).join('|') : doNotEscape(keyword)})`, 'ig');
  if (!contents || !keyword) {
    return contents;
  }
  contents = contents.toString();
  const nodes = contents?.split(reg).map((res, index) => {
    const contentKey = res.toLowerCase();
    if (Array.isArray(keyword)) {
      return keyword.includes(contentKey) ? h(tag, { ...props, key: index }, res) : res;
    } else if (contentKey === keyword) {
      return h(tag, { ...props, key: index }, res);
    }
    return res;
  });

  return h(Fragment, null, nodes);
}
