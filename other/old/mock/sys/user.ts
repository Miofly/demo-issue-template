/* eslint-disable */
import type { MockMethod } from '../../plugin/vite-mock';
import { resultError, addPrefix, resultSuccess, getRequestToken, requestParams } from '../_util';

const prefixUrl = '/user-center';
const subPrefixUrl = '/v2/pc';

const Api = {
  /** 获取验证码 */
  GET_CAPTCHA: '/getCaptcha',
  /** 密码登录 */
  LOGIN_BY_PW: subPrefixUrl + '/loginByPw',
  /** 短信登录 */
  LOGIN_BY_SMS: subPrefixUrl + '/loginBySms',
  /** 注册 */
  REGISTER: subPrefixUrl + '/register',
  /** 改变密码 */
  CHANGEPW: subPrefixUrl + '/changePw',
  /** 发送验证码 */
  SENDSMS: '/sendSms',
  /** 获取用户信息 */
  GETUSERINFO: '/getUserInfo'
};

addPrefix(Api, prefixUrl);

export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: '17862983627',
      realName: 'Test Admin',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456Aa',
      token: 'fakeToken1',
      // 修改主页路径
      roles: ['super']
    },
    {
      userId: '2',
      username: '17862983626',
      password: '123456Aa',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: ['test']
    }
  ];
}

const fakeCodeList: any = {
  '1': ['1000', '3000', '5000'],

  '2': ['2000', '4000', '6000']
};
export default [
  // mock user login
  {
    url: Api.LOGIN_BY_PW,
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { phone } = body;
      const checkUser = createFakeUserList().find((item) => item.username === phone);
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      const { userId, username: _username, token, realName, desc, roles } = checkUser;
      return resultSuccess({
        accessToken: token,
        refreshToken: 'key'
      });
    }
  },
  {
    url: Api.GET_CAPTCHA,
    timeout: 200,
    method: 'post',
    response: () => {
      return resultSuccess({
        captchaKey: 'key',
        jpgBase64:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAyCAIAAAAydXkgAAASmklEQVR42u3bZbRkVXrG8Yu7NdANC3e6gW5cGoeF0zRuwR2Ce+PO4BAsaIJDcHeJTJxhEhhiREgyIRObCG4rvz7Puu861L23bt0G5tO8H2qdOnVk7/9+Xtnn7Op7o99+u7Hfaex3G/u9xn7Y2O/32x809oeN/VFjf9zYnzT2p4292diPGnur337c2J819ueNvd3YO439pLF3G/uLxv6ysb9q7K/77W8ae6+xv23s7xr7+8b+obH3++0fG/unxv65sZ829i+NfdDYvzb2s8b+rbF/b+w/GvvPxv6r337e2H839j+N/W9j/9dY34hQ9sJxUJRDcRwRyu4cO1D2wnFEKH/eb8Og7M5xRCi/c0l+fyh74diBciiOvaLshWMXlG2O0+zd3yHHafDuYSX54Ycf9nXhOA3e/R1K8vv27u4cB0U5kGOvKHvhOCzKH/fb9yHJQRPOQI7fMuH0IsmpKNscv2XC+ZaS/EUmnIEch0XZ5jg8yu4cywroL6YGGsgxKIeqhIrjd1ID9SjJjz76aHiUbaBteXYR5og4dkfZXZiDlpYlzF44tlUZoF0kOTzKLjVQ0RyIdVBPbwuzS1HZRZKDCnMg0MLaATdA29rsgrK7MEckyW4oOz6ZX6+66qpzzjnnySefzH5M4+yVggjT1zbQ4pjPXorzjjw+cM5Tlv0PP/zw5Zdf/sQTT4Rpm2YJs4NjhxVQavBZwhwZyu4cQ9ABiJ977rl9/bbLLrtkDHJkef2tt9760EMPvfDCC3H2QYX5/PPPF9CftOzdlkF5//33A23D18suu+zSSy9995vmlFdeeWWttdaqVq2//vq8JIKNs0ebEWah7PiMOXKPPfYglLabR5i9cOyGsjhC9vrrr2v0hAkT+lq2wAILXH311a+99ppfHXPzzTfvvvvuG2+88eTJk2+77TaCjUg70tGBBx7o16FCZz4fffTRbbbZxpV9zQHhtemmm7pXhsTwnHTSSX0DbNy4cRdeeCEhA5oYGm12FOcsX0P57rvvdq6Wa5KfQrPCZS8oP/74474uHCNGXXrppZceeOCBau70009f28svv/zWW289fvz4JZZYYrbZZptpppnmnHPOM844o9yfTF588cVNNtlkiy22mGWWWeabb75Sazt6hs5jjz02ceLEeeaZh7dGyI58+eWX27BIb6uttnKd2jN27Fht0BInkpU9Y8aM2W233e666y7+Xp4eYYZmINpJuQ8++KBT5phjjldffTXQ4/IRZlQ56EyxV5Tx63B85plnjjrqqGo6Lvvss0+2p5tuOmRnnHHGbEetBx98MPnUlU877bQ6d4cddkhspdbo1Lbb6c9ZZ5218sorzzvvvGeeeWZKAsMgbpx++ul9Q9jo0aOvuOKK55577vnGbr/9digNp58WXXRRIyoOoIlXCqOSoW177HeusdFy6AVfYcF+h0EZYSZWDivJqSg7Zopl8etw5HFrr712deCQQw654YYbBC9CGNi9mWeeWR90jJqEBUO90UYb1a/nnXdeImzCq4sDx7NWX311EGntuOOOqxIibdhwww3rdNqp7UmTJv1WY6KzT8mHqI1HBDvrrLOecsopTufs3Jw225MfOrUTuwMOOECD559/fm7nyKJJmNw8Ph5VDpwpdkPZlqRuAIGI9skAc801V/UBqYsvvvgHje20007LLbccVZbX277lllvQf+qpp55++mmwMKpzXYq/46uTQu2qq66qG07RcxsnnniiwcsTFsc40unctk6//vrrHXP44Yfb+M3GfqPfbN9zzz2EKcLk4B133NFFhA5ZPkEz5RGsvtrprFGjRpHknnvuyQ8cKcsJso6MMAeiHIrjJ598MjhKwokk4TDmnKg6o2McdsqUKYCeffbZp5566r777rvaaquVvy+22GL6o1d8llhuvPHGOnfBBReknccffxwgonYkZ0Rw6aWXJkxKt/+lxkB89tlnVV3t03X71xrD8cbGbm7s1/tN/eCnhRZayMEzzDCDMaY1oVn6AigVEqfm8pARijzmSCp2mLAjpIjaEDtGEEi4rFjZE8pBE47xVNOQpOzWDpRLLbXUMcccc+yxxx5//PEEIo3a3nbbbfMrcW233XbXXXcdYd55550C/wknnFDnyk60c99999EjjkZFnHIROKhVqomKfRpCxA2GX+v0FVZYgTcYA1WkCvfaa6+F9YbGQtaG/RtssEEGVSbUSH2R0LDjvCBiCpahEoLlSQ6x2WabpQhB05HcHPQOlMNyHBxlvFuk0yuSRGTnnXeu/qyyyir864gjjsD3Vxs78sgj0/oEe3uUgfp50003pUKqcwVNvQUaUxFDcWrbUFWwExYMHog27DQSXK9OX3PN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'
      });
    }
  },
  {
    url: Api.GETUSERINFO,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token.replace('Bearer' + ' ', ''));
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    }
  },
  {
    url: '/basic-api/getPermCode',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      console.log(token.replace('Bearer' + ' ', ''));
      const checkUser = createFakeUserList().find((item) => item.token === token.replace('Bearer' + ' ', ''));
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      const codeList = fakeCodeList[checkUser.userId];

      return resultSuccess(codeList);
    }
  },
  {
    url: '/basic-api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      return resultSuccess(undefined, { message: 'Token has been destroyed' });
    }
  }
] as MockMethod[];
