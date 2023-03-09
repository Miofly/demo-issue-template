// 正则表达式
export const mobile = /^1\d{10}$/; // 手机号
export const activityMobile = /^1[3-9]\d{9}$/; // 活动手机号
export const activityName = /^[\u4e00-\u9fa5]{2,6}$/; // 活动手机号
export const checkCodeFour = /^\d{4}$/; // 4 位验证码
export const checkCodeSix = /^\d{6}$/; // 6 位验证码
export const password = /(?=.*([a-z].*))(?=.*([A-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
export const pictureCode = /^\w{4}$/;
export const searchRegExp = /[\\\t\n]/g; // 去除搜索特殊字符
export const keywordCodeRegExp = /^(.*)\([A-z]{0,2}\d{5,10}\)$/; // 可以匹配出券带括号字母数组结尾字符串，并返回前半部分
export const address = /^\w+[^\s]+(\.[^\s]+)+$/; // 网址
export const emailRegExp = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/; // 邮箱

export const emojiReg = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g;
export const videoUrl = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i;
export const imgUrl = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
