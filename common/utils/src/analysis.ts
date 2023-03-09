export function getNavigatorData() {
  const { appCodeName, appName, appVersion, platform, product, userAgent } = navigator;

  const versionMap = new Map<string, any>([
    ['win', '1'],
    ['iphone', '1']
  ]);

  versionMap.get(userAgent);

  // let name = 'Unknown';
  // let version = 'Unknown';
  // if (userAgent.indexOf('win') > -1) {
  //   name = 'Windows';
  //   if (userAgent.indexOf('windows nt 5.0') > -1) {
  //     version = 'Windows 2000';
  //   } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf(
  //     'windows nt 5.2') > -1) {
  //     version = 'Windows XP';
  //   } else if (userAgent.indexOf('windows nt 6.0') > -1) {
  //     version = 'Windows Vista';
  //   } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
  //     version = 'Windows 7';
  //   } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
  //     version = 'Windows 8';
  //   } else if (userAgent.indexOf('windows nt 6.3') > -1) {
  //     version = 'Windows 8.1';
  //   } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf(
  //     'windows nt 10.0') > -1) {
  //     version = 'Windows 10';
  //   } else {
  //     version = 'Unknown';
  //   }
  // } else if (userAgent.indexOf('iphone') > -1) {
  //   name = 'iPhone';
  // } else if (userAgent.indexOf('mac') > -1) {
  //   name = 'Mac';
  // } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf(
  //   'sunname') > -1 || userAgent.indexOf('bsd') > -1) {
  //   name = 'Unix';
  // } else if (userAgent.indexOf('linux') > -1) {
  //   if (userAgent.indexOf('android') > -1) {
  //     name = 'Android';
  //   } else {
  //     name = 'Linux';
  //   }
  // } else {
  //   name = 'Unknown';
  // }
  //
  return {
    appCodeName,
    appName,
    appVersion,
    platform,
    product,
    userAgent
  };
}
