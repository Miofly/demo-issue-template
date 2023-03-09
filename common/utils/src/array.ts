import { cloneDeep } from 'lodash';
import { isArray } from './is';

/**
 * @description
 * @author wfd
 * @date 2023/2/3 06:59
 * @param arr
 */
export const randArrSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const iRand = parseInt(String(arr.length * Math.random()));
    const temp = arr[i];
    arr[i] = arr[iRand];
    arr[iRand] = temp;
  }
  return arr;
};

/**
 * @description 数组排序
 * @author wfd
 * @date 2022/1/6 19:25
 * @example arrSort(['sortOrder', 'number']) or arrSort('sortOrder')
 * @param arr
 * @param attr
 * @param isAsc 是否为升序 默认 true
 * @param deepName
 */
export function arrSort<T>(arr: T[], attr: string | Array<Numberish>, isAsc = true, deepName?: string) {
  function sortFn() {
    // 第二个参数没有传递 默认升序排列
    const _order = isAsc ? 1 : -1;

    return function (a, b) {
      if (!isArray(attr)) {
        attr = [attr as Numberish];
      }
      for (const item of attr) {
        a = a[item] || Number.MAX_VALUE;
        b = b[item] || Number.MAX_VALUE;
      }
      if (a < b) {
        return _order * -1;
      }
      if (a > b) {
        return _order * 1;
      }
      return 0;
    };
  }

  arr.sort(sortFn());

  if (deepName) {
    for (const item of arr) {
      if (item[deepName]?.length) {
        arrSort(item[deepName], attr, isAsc, deepName);
      }
    }
  }

  return arr;
}

/**
 * @description 对数组对象进行去重
 * @author wfd
 * @date 2022/1/6 19:27
 * @example
 * @param arr
 */
export function arrUnique(arr: any[]) {
  const map = new Map();
  return arr.filter((item: any) => !map.has(JSON.stringify(item)) && map.set(JSON.stringify(item), 1));
}

/**
 * @description 去除空数组
 * @author wfd
 * @date 2022/1/13 14:11
 * @example
 * @param arr
 */
export const arrDelBlank = (arr: any[]): any[] => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '' || arr[i] === null || typeof arr[i] === 'undefined') {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  return arr;
};

/**
 * @description 随机从数组中取出 num 个元素
 * @author wfd
 * @date 2022/1/13 14:12
 * @example
 * @param arrList
 * @param num
 */
export const getRandomElementForArr = <T = any>(arrList: T[], num = 1) => {
  const temp_array = cloneDeep(arrList);
  // 取出的数值项,保存在此数组
  const return_array: T[] = [];
  for (let i = 0; i < num; i++) {
    // 判断如果数组还有可以取出的元素,以防下标越界
    if (temp_array.length) {
      // 在数组中产生一个随机索引
      const arrIndex = Math.floor(Math.random() * temp_array.length);
      // 将此随机索引的对应的数组元素值复制出来
      return_array[i] = temp_array[arrIndex];
      // 然后删掉此索引的数组元素,这时候temp_array变为新的数组
      temp_array.splice(arrIndex, 1);
    } else {
      // 数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
      break;
    }
  }
  return return_array;
};

/**
 * @Description: 获取数组的差集
 * @author wfd
 * @date 2021/3/15 22:35
 * @detail difference([1,3,5,7], [5, 8]
 */
export function differenceArr(arr1: any[], arr2: any[]): any {
  // 判断参数
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice();
  }
  return arr1.filter((item) => !arr2.includes(item));
}

/**
 * @description 获取两个正数数字之间的数组
 * @author wfd
 * @date 2022/2/15 13:11
 * @example getNumberSctionArr(0, 10) // [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
 * @param start
 * @param end
 */
export function getNumberSectionArr(start, end) {
  end = isNaN(end) ? 0 : end;
  return Array.from(new Array(end + 1).keys()).slice(start);
}

/**
 * @description 获取某个元素在数组中的位置
 * @author wfd
 * @date 2022/2/15 13:35
 * @example
 * @param arr
 * @param defaultNumber 未获取到的自定义 number
 */
export const getArrMaxIndex = (arr, defaultNumber = 0) => {
  const index = arr.indexOf(Math.max(...arr));
  return index === -1 ? defaultNumber : index;
};

/**
 * @description 生成从 start 数值 到 end 数值之间包含其本身组成的一个数子数组
 * @author wfd
 * @date 2022/4/19 14:19
 * @example
 * @param start
 * @param end
 */
export const generateArray = (start, end) => {
  return Array.from(new Array(end + 1).keys()).slice(start);
};

/**
 * @description 删除数组的指定元素
 * @author wfd
 * @date 2022/5/2 20:34
 * @example
 * @param arr
 * @param item
 */
export const delAppointElement = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      // 从i出开始删除1个元素
      arr.splice(i, 1);
    }
  }
  return arr;
};
