/**
 * @description crypto-js 加密库 Crypto-JS 相关 encrypt 函数会并不直接返回字符串 需要调用返回对象的 toString 方法，
 * 或者通过 Crypto-JS 转码才能得到真实的结果。
 * @author wfd
 * @date 2021-07-14 13:53:44
 */
import { decrypt, encrypt } from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';
import UTF8, { parse } from 'crypto-js/enc-utf8';
import md5 from 'crypto-js/md5';
import ECB from 'crypto-js/mode-ecb';
import pkcs7 from 'crypto-js/pad-pkcs7';

/**
 * @description 定义密钥类型
 */
export interface EncryptionParams {
  key: string;
  iv: string;
}

/**
 * @description Aes 对称加密算法
 * @author wfd
 * @date 2021-07-14 13:51:04
 * @example console.log(new AesEncryption({ key: '_11111000001111@', iv: '@11111000001111_' }).encryptByAES('1'));
 *				 console.log(new AesEncryption({ key: '_11111000001111@', iv: '@11111000001111_' }).decryptByAES('8qgsJj9tmT8zECAL0Nsagw'));
 */
export class AesEncryption {
  /** 密钥 */
  private key;
  /** 密钥偏移量 */
  private iv;

  constructor(opt: Partial<EncryptionParams> = {}) {
    const { key, iv } = opt;
    if (key) {
      this.key = parse(key);
    }
    if (iv) {
      this.iv = parse(iv);
    }
  }

  get getOptions() {
    return {
      /**
       * @description 加密模式 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
       * CBC模式: 密码分组链接模式.先将明文切分成若干小段，然后每一小段与初始块或者上一段的密文段进行异或运算后，再与密钥进行加密
       * ECB模式: 即电码本模式.将整个明文分成若干段相同的小段，然后对每一小段进行加密。
       * @author wfd
       * @date 2021-07-14 14:04:18
       */
      mode: ECB,
      /**
       * @description 补码方式 支持 Pkcs7、AnsiX923、Iso10126、NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
       * @author wfd
       * @date 2021-07-14 14:07:08
       */
      padding: pkcs7,
      iv: this.iv
    };
  }

  /**
   * @description AES 加密
   * @author wfd
   * @date 2021-07-14 13:42:45
   * @param cipherText 需要加密的字符串
   */
  encryptByAES(cipherText: string) {
    return encrypt(cipherText, this.key, this.getOptions).toString();
  }

  /**
   * @description 对 加密后得到的字符串 进行解密
   * @author wfd
   * @date 2021-07-14 13:43:08
   * @param cipherText 加密后得到的字符串
   */
  decryptByAES(cipherText: string) {
    return decrypt(cipherText, this.key, this.getOptions).toString(UTF8);
  }
}

/**
 * @description base64 加密
 * @author wfd
 * @date 2021-07-14 14:08:17
 * @example console.log(encryptByBase64('测试'));
 * @param cipherText
 */
export function encryptByBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64);
}

/**
 * @description base64 解密
 * @author wfd
 * @date 2021-07-14 14:08:17
 * @example console.log(decodeByBase64('5rWL6K+V'));
 * @param cipherText
 */
export function decodeByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8);
}

/**
 * @description md5 加密
 * @author wfd
 * @date 2021-07-14 13:52:46
 * @example console.log(encryptByMd5('111'));
 * @param password
 */
export function encryptByMd5(password: string) {
  return md5(password).toString();
}
