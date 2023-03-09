import pkg from 'crypto-js/aes.js';
const { encrypt, decrypt } = pkg;
import parses from 'crypto-js/enc-utf8.js';
const { parse } = parses;

import pkcs7 from 'crypto-js/pad-pkcs7.js';
import ECB from 'crypto-js/mode-ecb.js';
import md5 from 'crypto-js/md5.js';
import UTF8 from 'crypto-js/enc-utf8.js';
import Base64 from 'crypto-js/enc-base64.js';

function encryptByBase64 (cipherText) {
	return UTF8.parse(cipherText).toString(Base64);
}
