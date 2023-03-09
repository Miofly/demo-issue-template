import { isString } from '@vue/shared';
import { assign, camelCase, isArray, isPlainObject, keys, upperFirst } from 'lodash';
import type { Entries } from 'type-fest';
import { isNullOrUndefined, isNumber } from './index';

/**
 * @description 传入内容为空时展示处理
 * @param str 传入的内容
 * @param con 替代 str 的内容
 * @param emptyUnit 为空时的替代字符
 */
export const emptyHandle = (str: number | string | undefined, con?: any, emptyUnit = '-') => {
  return String(str)?.trim() ? (con ? con : str) : emptyUnit;
};

/**
 * @description 传入内容为空时展示处理且转换为数字后不是NaN的处理
 * @param str 传入的内容
 * @param con 替代 str 的内容
 * @param emptyUnit 为空时的替代字符
 */
export const emptyHandleNaN = (str: number | string, con: any, emptyUnit = '-') => {
  return String(str)?.trim() && !isNaN(Number(String(str)?.trim())) ? (con ? con : str) : emptyUnit;
};

/**
 * @description 去除空格
 * @author wfd
 * @date 2022/1/13 15:43
 * @example
 * @param str
 * @param pos
 */
export function trimBlank(str, pos = 'both') {
  if (pos === 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  } else if (pos === 'left') {
    return str.replace(/^\s*/, '');
  } else if (pos === 'right') {
    return str.replace(/(\s*$)/g, '');
  } else if (pos === 'all') {
    return str.replace(/\s+/g, '');
  } else {
    return str;
  }
}

/**
 * @description 特定的字符串传对象
 * @author wfd
 * @date 2022/2/7 21:04
 * @example
 * @param str 'color: red;background: blue'
 */
export const strToObj = (str) => {
  const obj = {};
  str
    ? trimBlank(String(str), 'all')
        ?.split(';')
        ?.forEach((item) => {
          const str = item.split(':');
          obj[str[0]] = str[1];
        })
    : {};

  return obj;
};

/**
 * @description 对象键合并
 * @author wfd
 * @date 2022/8/28 18:26
 * @example
 * objDeepKeyMerge({
 *   layoutHeader: {
 *     textColor: 'red'
 *   },
 *   menuHeader: {
 *     Test: '---',
 *     text: {
 *       size: 16,
 *       attrs: {
 *         love: 'love'
 *       }
 *     }
 *   },
 *   theme: 'dark'
 * })
 * {
 *   layoutHeaderTextColor: "red"
 *   menuHeaderTest: "---"
 *   menuHeaderTextAttrsLove: "love"
 *   menuHeaderTextSize: 16
 *   theme: "dark"
 * }
 * @param obj
 * @param isDeep
 */
export const objDeepKeyMerge = (obj, isDeep?) => {
  Object.keys(obj).forEach((item) => {
    if (isPlainObject(obj[item])) {
      Object.keys(obj[item]).forEach((subItem) => {
        obj[isDeep ? upperFirst(item) : item + upperFirst(subItem)] = obj[item][subItem];
      });
      delete obj[item];
      for (const key in obj) {
        if (isPlainObject(obj[key])) {
          objDeepKeyMerge(obj, isDeep);
        }
      }
    }
  });
  return obj;
};

/**
 * @description 删除对象中属性值不存的属性
 * @author wfd
 * @date 2022/9/2 13:48
 * @example
 * @param obj
 * @param strict
 */
export function delObjAttrNotExist(obj, strict?: boolean) {
  for (const key in obj) {
    if (strict ? !isNullOrUndefined(obj[key]) : obj[key]) {
      continue;
    }
    Reflect.deleteProperty(obj, key);
  }
}

/**
 * @description 根据数组的某一个 key 值区分数组
 * @author wfd
 * @date 2022/9/6 19:23
 * @example
 *   const data = [
 *     { title: '指标', isFixed: true, width: '2.4rem' },
 *     { title: '单位', isFixed: true, width: '2.4rem' },
 *     { title: '2011'  },
 *     { title: '2013'  },
 *     { title: '2013'  }
 *   ];
 *   console.log(divisionArrForKey(data, 'isFixed'));
 * @param arr
 * @param key
 * @returns {[any[], any[]]}
 */
export const divisionArrForKey = (arr, key) => {
  const trueData: any[] = [];
  const falseData: any[] = [];
  for (const item of arr) {
    if (item[key]) {
      trueData.push(item);
    } else {
      falseData.push(item);
    }
  }
  return [trueData, falseData];
};

/**
 * @description Deep merge When the targetObject has the corresponding key value in the sourceObject, the targetObject overwrites the sourceObject, and the rest of the sourceObject remains
 * @param src sourceObject
 * @param target targetObject
 * @author wfd
 * @date 2021/9/15 22:16
 * @example deepMerge({a: 1, b:2, d:6, e:{a: 3, b:4}}, {a:3, b: 4, c:5, e: {a:1, f:2}})
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  /**
   * 对 target 进行 for in 循环，取到 target 中每一个对象的 key 属性名
   * 然后判断 src[key] 对应的属性值是否是对象，如果是对象再次进行一次 deepMerge 函数处理
   * 如果不是对象则把 target 对应 key 值给 src 对应的 key 值
   *
   */
  for (key in target) {
    src[key] = isPlainObject(src[key]) || isArray(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

export const keysOf = <T>(arr: T) => Object.keys(arr!) as Array<keyof T>;
export const entriesOf = <T>(arr: T) => Object.entries(arr!) as Entries<T>;

/**
 * @description 单个属性值转对象
 * @author wfd
 * @date 2022/11/9 09:38
 * @example
 * @param params
 * @param attributeName
 * @param defaultParams
 * @returns {any}
 */
export function singleAttrToObj(params?: string | Record<string, any>, attributeName?: string, defaultParams?: Record<string, any>) {
  return params ? (isString(params) ? { [attributeName!]: params, ...defaultParams } : { ...defaultParams, ...params }) : { ...defaultParams };
}

/*
 * 递归辅助函数
 * @param data 待递归的数据
 * @param callback 每一个叶子项的回调
 * @param key 表示下一个节点的`key`，默认为`children`
 */
export function recursion<T extends Record<string, any>>(data: T, callback: (item: T) => void, key?: string): T;
export function recursion<T extends Record<string, any>>(data: T[], callback: (item: T) => void, key?: string): T[];
export function recursion<T extends Record<string, any>>(data: T | T[], callback: (item: T) => T, childrenKey = 'children'): T[] | T {
  const _r = (data: T): T => {
    callback(data);
    return keys(data).reduce((result, key) => {
      if (key === childrenKey && isArray(data[childrenKey])) {
        return assign({ result }, { [childrenKey]: (data[childrenKey] as T[]).map((row) => _r(row)) });
      } else {
        return assign(result, { [key]: data[key] });
      }
    }, {}) as T;
  };

  if (isArray(data)) {
    return data.map((row) => _r(row));
  }
  return _r(data);
}

export function recursionFilterTree<T>(data: T[], callback: (item: T) => boolean, childrenKey = 'children'): T[] {
  if (!isArray(data)) return [];

  return data
    .filter((item) => {
      return callback(item);
    })
    .map((item) => {
      item = Object.assign({}, item);
      if (isArray(item[childrenKey]) && item[childrenKey]?.length) {
        item[childrenKey] = recursionFilterTree(item[childrenKey], callback);
      }
      return item;
    }) as T[];
}

export function recursionMapTree<T>(data: T[], callback: (item: T) => Record<string, any>, childrenKey = 'children'): T[] {
  if (!isArray(data)) return [];

  return data
    .map((item) => {
      return callback(item);
    })
    .map((item) => {
      item = Object.assign({}, item);
      if (isArray(item[childrenKey]) && item[childrenKey]?.length) {
        item[childrenKey] = recursionMapTree(item[childrenKey], callback);
      }
      return item;
    }) as T[];
}

/**
 * @description 给 obj 对应的 value 加入前缀
 * @author wfd
 * @date 2022/11/29 15:45
 * @example
 * @param obj
 * @param prefix
 */
export const objAddPrefix = (obj, prefix) => {
  for (const key in obj) {
    obj[key] = prefix + obj[key];
  }
};

/**
 * @description 随机生成 max > your want num > min
 * @author wfd
 * @date 2022/1/13 14:17
 * @example
 * @param min
 * @param max
 */
export const randomNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @description 生成随机数加小数
 * @author wfd
 * @date 2022/1/13 14:17
 * @example
 * @param min
 * @param max
 */
export const randomNumDecimal = (min: number, max: number): string => (Math.random() * (max - min + 1) + min).toFixed(2);

/**
 * @description 根据路径创建对象
 * @author wfd
 * @date 2022/12/29 20:16
 * @example
 * @param path
 * @param value
 */
export const createObjByPath = (path, value) => {
  let keyPath: Numberish[] = [];
  if (isArray(path)) keyPath = [...path];
  if (keyPath.length) {
    const key = keyPath.shift();
    if (key) {
      if (isNumber(key)) {
        const object = new Array(key + 1);
        object[key] = createObjByPath(keyPath, value);
        return object;
      } else return { [key]: createObjByPath(keyPath, value) };
    }
  } else return value;
};

/**
 * @description 根据路径设置对象值
 * @author wfd
 * @date 2022/12/29 20:16
 * @example
 * @param object
 * @param path
 * @param value
 */
export const setObjValByPath = (object, path, value) => {
  let keyPath: Numberish[] = [];

  if (isArray(path)) keyPath = [...path];

  if (keyPath.length) {
    const key = keyPath.shift();
    if (key) {
      if (object && object[key]) object[key] = setObjValByPath(object[key], keyPath, value);
      else object[key] = createObjByPath(keyPath, value);
    }
  } else object = value;
  return object;
};

/**
 * @description 根据路径获取对象值
 * @author wfd
 * @date 2022/12/29 20:16
 * @example
 * @param object
 * @param path
 */
export const getObjValByPath = (object, path) => {
  let keyPath: Numberish[] = [];

  if (isArray(path)) keyPath = [...path];
  else if (isString(path) || isNumber(path)) keyPath = [path];

  if (keyPath.length) {
    const key = keyPath.shift();
    if (object && key && !isNullOrUndefined(object[key])) return getObjValByPath(object[key], keyPath);
    else return undefined;
  } else return object;
};

/**
 * @description 给子级添加父级的属性
 * @author wfd
 * @date 2022/12/29 20:31
 * @example
 * @param list
 * @param path
 * @param parentVal
 * @param childrenName
 */
export function joinParentAttr(list: any[], path: Numberish | Numberish[], parentVal?: string, childrenName = 'children') {
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    if (!isNullOrUndefined(parentVal)) {
      setObjValByPath(item, path, parentVal);
    }

    if (item?.[childrenName]?.length) {
      joinParentAttr(item[childrenName], path, getObjValByPath(item, path));
    }
  }
}

type TreeOption = { children?: string; conversion: Fn };

/**
 * @description 对数组进行处理
 * @author wfd
 * @date 2022/12/29 21:55
 * @example
 * @param treeData
 * @param opt
 */
export function treeMap(treeData: any[], opt: TreeOption) {
  return treeData.map((item) => treeMapEach(item, opt));
}

export function treeMapEach(data: any, { children = 'children', conversion }: TreeOption) {
  const haveChildren = Array.isArray(data[children]) && data[children].length > 0;
  const conversionData = conversion(data) || {};
  if (haveChildren) {
    return {
      ...conversionData,
      [children]: data[children].map((i: number) =>
        treeMapEach(i, {
          children,
          conversion
        })
      )
    };
  } else {
    return {
      ...conversionData
    };
  }
}

export const upperCamelCase = (str) => {
  return upperFirst(camelCase(str));
};
