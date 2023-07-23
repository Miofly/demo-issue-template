import Cookies from "cookies-ts";
import Base64 from "~/utils/base64";

const Cookie = new Cookies();
const base64 = new Base64();

const TokenKey: string = 'token';

export function setToken(token: string) {
  Cookie.set(TokenKey, base64.encode(token));
}

export function getToken(): string | null {
  let token: string | null = Cookie.get(TokenKey);
  if(token) token = base64.decode(token);
  return token;
}

export function removeToken() {
  Cookie.remove(TokenKey)
}
