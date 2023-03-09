/**
 * @description 指定升级打包的页面
 * @author wfd
 * @date 2022/8/8 09:37
 * @example
 *  [] // 打包 apps 下所有
 *  ['test'] // 只打包 test 目录下所有项目
 *  ['test', 'apps-template'] // 打包 test，apps-template 目录下所有项目
 *  ['test', 'apps-template/pro-template'] // 打包 test 和 apps-template/pro-template 目录
 */
import * as process from 'process';

export const buildFileNames = [];

// console.log(process.env.NODE_ENV);
