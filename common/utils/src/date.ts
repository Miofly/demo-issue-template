import type { ConfigType } from 'dayjs';
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

export const dateUtil = dayjs;

/**
 * @description 转换日期加时间
 * @author wfd
 * @date 2021/9/21 18:59
 * @param date
 * @param format 转换的时间格式
 */
export const formatToDateTime = (date: ConfigType, format = DATE_TIME_FORMAT): string => {
  return dateUtil(date).format(format);
};

/**
 * @description 转换日期
 * @author wfd
 * @date 2021/9/21 18:59
 * @param date
 * @param format 转换的时间格式
 */
export const formatToDate = (date: ConfigType, format = DATE_FORMAT): string => {
  return dateUtil(date).format(format);
};

export const getDayTimestamp = (dayNum = 8) => {
  return dayNum * 60 * 60 * 1000;
};

/**
 * 时间戳转时间：
 * timestampToTime('1640340006863', 'YYYY-MM-DD') 输出:2017-01-01
 * @param value
 * @param newFormat 新日期格式
 * @returns {String}
 */
export const timestampToTime = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + M + D;
  } else {
    return '';
  }
};

/**
 * @function 计算日期区间
 * @param {Number} days 间隔多少天
 */
export const dateInterval = (days: number | string) => {
  const start = new Date();
  const end = new Date();
  start.setTime(start.getTime() - 3600 * 1000 * 24 * Number(days));
  const startDate = formatDate(start, 'YYYY-MM-DD');
  const endDate = formatDate(end, 'YYYY-MM-DD');
  return [startDate, endDate];
};

/**
 * 日期格式化，如下示例：
 * formatDate('20170101', 'YYYYMMDD', 'YYYY.MM.DD') 输出:2017.01.01
 * formatDate(Date.now(), 'YYYY-MM-DD') 输出：当前时间的格式化
 * @param value
 * @param format 源日期格式
 * @param newFormat 新日期格式
 * @returns {String}
 */
export const formatDate = (value, format = 'YYYYMMDD', newFormat = 'YYYY-MM-DD') => {
  if (!value || value === '--') return '';
  if (value instanceof String && value.includes('19000101')) {
    return '';
  }
  const time = new Date(value);
  if (isNaN(+time)) {
    // 把日期从format转为newFormat
    const matches = format.match(/([a-zA-Z])\1{1,}/g);
    let start = 0;
    if (matches) {
      for (const match of matches) {
        if (newFormat && newFormat.indexOf(match) !== -1) {
          newFormat = newFormat.replace(new RegExp(match, 'g'), String(value).substr(start, match.length));
        }
        start += match.length;
      }
    }
    return newFormat;
  } else {
    // 把当前日期Date转为format
    const timeMaps = {
      'Y{4}': time.getFullYear(),
      'Y{2}': time.getFullYear().toString().substr(2),
      'M{2}': time.getMonth() + 1,
      'D{2}': time.getDate(),
      'H{2}': time.getHours(),
      'm{2}': time.getMinutes(),
      's{2}': time.getSeconds()
    };

    Object.keys(timeMaps).forEach((key) => {
      timeMaps[key] = timeMaps[key].toString().padStart(2, 0);
      format = format.replace(new RegExp(key, 'g'), timeMaps[key]);
    });
    return format;
  }
};
