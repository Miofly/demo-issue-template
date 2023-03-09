/**
 * @description 判断是否 十六进制颜色值. 输入形式可为 #fff000 #f00
 * @author wfd
 * @date 2021/9/21 18:43
 * @param color 十六进制颜色值
 */
export function isHexColor(color: string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
  return reg.test(color);
}

/**
 * @description RGB 颜色值转换为 十六进制颜色值.r, g, 和 b 需要在 [0, 255] 范围内
 * @author wfd
 * @date 2021/9/21 18:44
 * @param r
 * @param g
 * @param b
 * @example rgbToHex('255','255','255') ===> '#ffffff'
 * @return  String 类似#ff00ff
 */
export function rgbToHex(r: number, g: number, b: number) {
  const hex = ((r << 16) | (g << 8) | b).toString(16);
  return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
}

/**
 * @description 将 16 进制值 转换为 rgb 格式
 * @author wfd
 * @date 2021/9/21 18:50
 * @example hexToRGB('#fff000') ===> 'RGB(255,240,0)'
 * @param hex 传入的十六进制参数值
 */
export function hexToRGB(hex: string) {
  /** 将传入的 hex 参数转为小写 */
  let sHex = hex.toLowerCase();
  /** 判断传入的 hex 是否是十六进制颜色值 */
  if (isHexColor(hex)) {
    /** 如果传入的字符为 4 个字符串长度 例如：#f00 */
    if (sHex.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1));
      }
      sHex = sColorNew;
    }
    const sColorChange: number[] = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sHex.slice(i, i + 2)));
    }
    return 'RGB(' + sColorChange.join(',') + ')';
  }
  return sHex;
}

/**
 * @description 颜色是否是暗色
 * @author wfd
 * @date 2021/9/21 18:54
 * @param color 传入的值不能是 rgba 格式，需要是十六进制 如 #000
 */
export function colorIsDark(color: string) {
  /** 传入的值不能是 rgba 格式，需要是十六进制 如 #000 */
  // if (!isHexColor(color)) return;

  if (isHexColor(color)) {
    color = hexToRGB(color);
  }

  /**
   * 将传入的十六进制的值进行 rgb 转换，
   * 并替换其中的 rgb 字符串
   * 然后对齐进行 split 分割，以 ，为分割符号
   * 再对数组进行 map 返回每一项被 Number 转换后的数组
   * 最后再对数组进行解构，取出 r,g,b 的每一个值
   */
  const [r, g, b] = color
    .replace(/(?:\(|\)|rgba|RGBA|rgb|RGB)*/g, '')
    .split(',')
    .map((item) => Number(item));

  return r * 0.299 + g * 0.578 + b * 0.114 < 192;
}

/**
 * @description 给定通过的百分比使十六进制颜色变暗
 * @author wfd
 * @date 2021/11/23 12:54
 * @example
 * @param color 要处理的颜色
 * @param amount 改变颜色的数量
 */
export function darken(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
  amount = Math.trunc((255 * amount) / 100);
  return `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(color.substring(2, 4), amount)}${subtractLight(color.substring(4, 6), amount)}`;
}

/**
 * @description 根据通过的百分比使 6 个字符的 HEX 颜色变亮
 * @author wfd
 * @date 2021/11/23 12:55
 * @example
 * @param color 要改变的颜色
 * @param amount 改变颜色的数量
 */
export function lighten(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
  amount = Math.trunc((255 * amount) / 100);
  return `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`;
}

/* Suma el porcentaje indicado a un color (RR, GG o BB) hexadecimal para aclararlo */
/**
 * Sums the passed percentage to the R, G or B of a HEX color
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed part of the color
 */
function addLight(color: string, amount: number) {
  const cc = parseInt(color, 16) + amount;
  const c = cc > 255 ? 255 : cc;
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}

/**
 * Calculates luminance of an rgb color
 * @param {number} r red
 * @param {number} g green
 * @param {number} b blue
 */
function luminanace(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Calculates contrast between two rgb colors
 * @param {string} rgb1 rgb color 1
 * @param {string} rgb2 rgb color 2
 */
function contrast(rgb1: string[], rgb2: number[]) {
  return (luminanace(~~rgb1[0], ~~rgb1[1], ~~rgb1[2]) + 0.05) / (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);
}

/**
 * Determines what the best text color is (black or white) based con the contrast with the background
 * @param hexColor - Last selected color by the user
 */
export function calculateBestTextColor(hexColor: string) {
  const rgbColor = hexToRGB(hexColor.substring(1));
  const contrastWithBlack = contrast(rgbColor.split(','), [0, 0, 0]);

  return contrastWithBlack >= 12 ? '#000000' : '#FFFFFF';
}

/**
 * Subtracts the indicated percentage to the R, G or B of a HEX color
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed part of the color
 */
function subtractLight(color: string, amount: number) {
  const cc = parseInt(color, 16) - amount;
  const c = cc < 0 ? 0 : cc;
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}
