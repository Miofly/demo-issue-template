/** 引入 AES 加密的方法 */
import { AesEncryption, type EncryptionParams } from './cipher';
import { isNullOrUndefined } from './is';

/** createStorage 中参数的类型 */
export interface CreateStorageParams extends EncryptionParams {
  prefixKey: string;
  storage: Storage;
  hasEncrypt: boolean;
  timeout?: Nullable<number>;
}

/**
 * @description 创建本地存储
 * @author wfd
 * @date 2021-05-18 12:52:54
 * @example 测试用列
 *  const testLocale = new createStorage({ prefixKey: 'mio', storage: localStorage, timeout: 4, hasEncrypt: true })
 testLocale.set('km', '我得测试')
 const test = setInterval(() => {
			console.log(testLocale.get('km'))
		}, 2000)
 setTimeout(() => {
		    clearInterval(test)
		}, 6000)
 * @param prefixKey 加密的前缀 key 值
 * @param storage 加密的方式，localStorage or sessionStorage
 * @param key aes 加密 key 值
 * @param iv aes 加密 偏移量的值
 * @param timeout
 * @param hasEncrypt 是否加密
 */
export const createStorage = ({ prefixKey = '', storage = localStorage, key, iv, timeout = null, hasEncrypt = false }: Partial<CreateStorageParams> = {}) => {
  /** 验证加密的 key, iv 是否正确 */
  if (hasEncrypt && [key?.length, iv?.length].some((item) => item !== 16)) {
    throw new Error('When hasEncrypt is true, the key or iv must be 16 bits!');
  }
  /** 实例化一个 AES 类的对象 */
  const encryption = new AesEncryption({ key, iv });

  /**
   * @description 构造参数 storage 可以传递 sessionStorage，localStorage
   * @author wfd
   * @date 2021-07-14 14:36:01
   */
  const WebStorage = class WebStorage {
    storage: Storage;
    prefixKey?: string;
    encryption: AesEncryption;
    hasEncrypt: boolean;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
      this.encryption = encryption;
      this.hasEncrypt = hasEncrypt;
    }

    /**
     * @description 缓存的 key 值
     * @author wfd
     * @date 2021-07-14 15:20:59
     * @param key
     * @private
     */
    getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase();
    }

    /**
     * @description set
     * @author wfd
     * @date 2021-07-14 15:17:35
     * @param key
     * @param value
     * @param expire 以秒为单位的过期时间
     */
    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: !isNullOrUndefined(expire) ? new Date().getTime() + expire * 1000 : null
      });
      /** 数据是否加密 */
      const stringifyValue = this.hasEncrypt ? this.encryption.encryptByAES(stringData) : stringData;
      this.storage.setItem(this.getKey(key), stringifyValue);
    }

    /**
     * @description 读取缓存
     * @author wfd
     * @date 2021-07-14 15:18:38
     * @param key
     * @param def
     */
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;

      try {
        // 是否加密
        const decVal = this.hasEncrypt ? this.encryption.decryptByAES(val) : val;
        const data = JSON.parse(decVal);
        const { value, expire } = data;
        // 没过期返回val
        if (isNullOrUndefined(expire) || expire >= new Date().getTime()) {
          return value;
        }
        // 过期移除
        this.remove(key);
      } catch (e) {
        return def;
      }
    }

    /**
     * @description 根据键删除缓存
     * @author wfd
     * @date 2021-07-14 15:22:46
     * @param key
     */
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    /**
     * @description 删除该实例的所有缓存
     * @author wfd
     * @date 2021-07-14 15:24:44
     */
    clear(): void {
      this.storage.clear();
    }
  };

  return new WebStorage();
};

export const createSessionStorage = (options: Partial<CreateStorageParams> = {}) => {
  return createStorage({
    storage: sessionStorage,
    ...options
  });
};
