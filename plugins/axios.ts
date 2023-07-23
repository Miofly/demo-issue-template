import {getToken} from "~/utils/token";
import ENV from "~/env";

export default ({$axios, store}) => {

  $axios.onRequest((config) => {
    const MODE: string = process.env.NUXT_ENV_MODE as string;
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.timeout = 10000;
    config.baseURL = ENV[MODE].NUXT_ENV_APP_BASE_URL;

    const needToken: boolean = (config.headers || {}).needToken === true;

    if (getToken() && needToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config;
  });


  $axios.onResponse((config) => {
    const code = config.data.code || 400;
    // 获取错误信息
    const msg = config.data.message || '请求操作失败'

    // 二进制数据则直接返回
    if (config.request.responseType === 'blob' || config.request.responseType === 'arraybuffer') {
      return config
    }
    if (code === 200) {
      return config.data
    } else {
      return Promise.reject('error')
    }
  });

  $axios.onError((error) => {
    console.log('error, ', error);
    return Promise.reject(error);
  });
}

