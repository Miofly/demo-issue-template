import { EVENT_CODE } from '@vft/constants';
import { capitalize as toCapitalize } from '@vue/shared';
import { isBoolean, isNumber, isString } from 'lodash';
import type { CSSProperties } from 'vue';
import { isNullOrUndefined } from './is';

/**
 * @description addUnit
 * @example
 * @returns
 * @param value
 * @param unit
 * @param baseSize
 */
export function addUnit(value?: string | number, unit = false, baseSize = 50): string | undefined {
  if (!isNullOrUndefined(value)) {
    const _unit = isString(unit) ? unit : isBoolean(unit) && unit ? 'rem' : 'px';
    const isRem = _unit === 'rem';
    return isNumber(value) ? (isRem ? `${value / baseSize}rem` : `${value}${_unit}`) : String(value);
  }
  return undefined;
}

export function getZIndexStyle(zIndex?: Numberish) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

export const capitalize = <T extends string>(str: T) => toCapitalize(str) as Capitalize<T>;

// 手机号格式化加空格
export const phoneAddBlank = (value) => {
  let showValue = value.replace(/\D/g, '').trim();
  if (showValue.length > 11) {
    showValue = showValue.substr(0, 11);
  }
  let renderValue = '';

  for (let i = 0; i < showValue.length; i++) {
    renderValue += showValue[i];
    if (i === 2 || i === 6) {
      renderValue += ' ';
    }
  }
  return renderValue;
};

// 输入框去除空格
export const formatPhoneBlack = (e) => {
  const {
    target: { value },
    code
  } = e;
  let renderValue = phoneAddBlank(value);
  const renderLen = renderValue.length;
  if (code === EVENT_CODE.backspace && renderValue[renderLen - 1] === ' ') {
    renderValue = renderValue.substr(0, renderLen - 1);
  }
  return renderValue;
};

/**
 * @description formatNumberAddSymbol
 * @author wfd
 * @date 2022/5/2 23:52
 * @example
 * @param num
 * @param decimals 分割小数的位数
 * @param decimal 分割小数的符号
 * @param separator 千分位分割符号
 */
export function formatNumberAddSymbol(num, decimals = 2, decimal = '.', separator = ',') {
  // 取小数并转换成字符串
  num = numberToFixed(num, decimals);
  num += '';

  // 以小数位作为分割成数组
  const x = num.split('.');
  // 小数前面的整数
  let x1 = x[0];
  // 小数点后面的数 判断分割的 num 是否具有小数，有小数 length 大于 1
  const x2 = x.length > 1 ? decimal + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  if (separator && !isNumber(separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + separator + '$2');
    }
  }
  return x1 + x2;
}

/**
 * @description 简单添加千分位,调用 Number.prototype.toLocalString() 方法
 * @param { string | number } value
 * @param {string} replaceEmpty 代替空值的占位符 default : '-'
 * @param { 1|2|3|4 } fixed 保留小数位数
 * @returns { string }
 */
export const formatterDigit = (value: string | number, fixed?: 0 | 1 | 2 | 3 | 4, replaceEmpty?: string) => {
  if (isNaN(Number(`${value}`))) {
    return replaceEmpty ?? '-';
  } else {
    return Number(value).toLocaleString('zh', {
      minimumFractionDigits: fixed ?? 0,
      maximumFractionDigits: fixed ?? 0
    });
  }
};

/**
 * @description 四舍五入保留两位小数
 * @author wfd
 * @date 2022/1/13 14:20
 * @example
 * @param num
 * @param decimals
 */
export function numberToFixed(num, decimals = 2) {
  const result = parseFloat(String(num));
  if (isNaN(result)) {
    return num;
  }
  return (Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals);
}

export const formatPhoneHide = (phone) => {
  return phone?.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
};
