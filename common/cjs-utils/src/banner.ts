// https://www.npmjs.com/package/gradient-string
import gradientString from 'gradient-string';

export function banner(str = 'App Template - Fast Generate Template') {
  return gradientString([
    { color: '#42d392', pos: 0 },
    { color: '#42d392', pos: 0.1 },
    { color: '#647eff', pos: 1 }
  ])(str);
}
