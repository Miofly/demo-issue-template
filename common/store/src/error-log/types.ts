/** 错误日志信息 */
export interface ErrorLogInfo {
  /** 错误类型 */
  type: ErrorTypeEnum;
  /** 错误文件 */
  file: string;
  // Error name
  name?: string;
  /** 具体错误信息 */
  message: string;
  // Error stack
  stack?: string;
  /** 发生错误的详细信息 */
  detail: string;
  /** 发生错误的 url 地址 */
  url: string;
  /** 发生错误的时间 */
  time?: string;
}

/**
 * 错误类型枚举
 */
export enum ErrorTypeEnum {
  VUE = 'vue',
  SCRIPT = 'script',
  RESOURCE = 'resource',
  AJAX = 'ajax',
  PROMISE = 'promise',
}
