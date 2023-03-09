import { formatToDateTime } from '@vft/utils';
import { defineStore, type Pinia } from 'pinia';
import { type ErrorLogInfo, ErrorTypeEnum } from './types';

/** 错误日志信息类型 */
export interface ErrorLogState {
  errorStatus: boolean
  /** 错误日志信息列表 */
  errorLogInfoList: Nullable<ErrorLogInfo[]>;
  /** 错误日志信息数量 */
  errorLogListCount: number;
}

/**
 * 异常处理 store
 */
export const useErrorLogStore = defineStore({
  id: 'app-error-log',
  state: (): ErrorLogState => ({
    errorStatus: false,
    // 异常日志信息列表
    errorLogInfoList: null,
    // 异常日志列表数量
    errorLogListCount: 0
  }),
  getters: {
    /** 获取异常日志信息列表 */
    getErrorLogInfoList(): ErrorLogInfo[] {
      return this.errorLogInfoList || [];
    },
    /** 获取异常日志列表数量 */
    getErrorLogListCount(): number {
      return this.errorLogListCount;
    },
    getErrorStatus (): boolean {
    	return this.errorStatus;
    }
  },
  actions: {
    /**
     * @description 添加异常信息
     * @author wfd
     * @date 2021/10/31 19:20
     * @param info
     */
    addErrorLogInfo(info: ErrorLogInfo) {
      // 将异常信息与 time 拼装成一个对象
      const item = {
        ...info,
        time: formatToDateTime(new Date())
      };
      // 将新的异常信息放到列表最前方，同时异常日志列表数量 + 1
      this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])];
      this.errorLogListCount += 1;
    },

    /**
     * @description 设置异常信息列表的数量
     * @author wfd
     * @date 2021/10/31 19:23
     * @param count
     */
    setErrorLogListCount(count: number): void {
      this.errorLogListCount = count;
    },

    /**
     * @description 在 ajax 请求完成后触发，供 axios 封装的报错使用
     * @author wfd
     * @date 2021/10/31 19:23
     * @param error
     */
    addAjaxErrorInfo(error: Error & {response: any}) {
      // 定义错误信息，包括一个错误类型的属性
      const errInfo: Partial<ErrorLogInfo> = {
        message: error.message,
        type: ErrorTypeEnum.AJAX
      };
      // 添加错误信息的属性
      if (error.response) {
        const {
          config: { url = '', data: params = '', method = 'get', headers = {} } = {},
          data = {}
        } = error.response;
        errInfo.url = url;
        errInfo.name = 'Ajax Error!';
        errInfo.file = '-';
        errInfo.stack = JSON.stringify(data);
        errInfo.detail = JSON.stringify({ params, method, headers });
      }
      // 调用添加错误信息
      this.addErrorLogInfo(errInfo as ErrorLogInfo);
    },
    setErrorStatus (status: boolean): void {
      this.errorStatus = status;
    }
  }
});

export function useErrorLogStoreWithOut(pinia: Pinia) {
  return useErrorLogStore(pinia);
}
