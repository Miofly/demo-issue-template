import { isFunction, isNull, isNumber, isObject, isPlainObject, isString, isUndefined } from 'lodash';

export { isClient, isWindow } from '@vueuse/core';
export { isVNode } from 'vue';

export function isUrl(path: string): boolean {
  const reg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  return reg.test(path);
}

export const isDef = <T = unknown>(val?: T): val is T => !isUndefined(val);

export const isNullOrUndefined = <T = unknown>(val?: T): val is T => isUndefined(val) || isNull(val);

export const inBrowser = typeof window !== 'undefined';

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  // @ts-ignore
  isObject(val) && isFunction(val.then) && isFunction(val.catch);

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false;
  return e instanceof Element;
};

export const isNumberish = (value: unknown): value is string | number => isString(value) || isNumber(value);

export { isArray, isString, isNull, isEmpty, isNumber, isBoolean, isEqual, isUndefined, isObject, isPlainObject, isFunction } from 'lodash';

export const isKorean = (text: string) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);

export const isLeaf = (el: HTMLElement) => !el.getAttribute('aria-owns');

/** 是否为空对象 */
export const isEmptyObject = <T = unknown>(val?: T): val is T => isPlainObject(val) && JSON.stringify(val) === '{}';
