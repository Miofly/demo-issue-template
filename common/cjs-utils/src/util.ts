import fs from 'fs-extra';
import path from 'node:path';
import { banner } from './banner';

/**
 * @description 判断当前文件夹是否可以被覆盖
 * @author wfd
 * @date 2022/8/19 13:53
 * @example
 * @param dir
 */
export function canSkipEmptying(dir: string) {
  if (!fs.existsSync(dir)) {
    return true;
  }

  const files = fs.readdirSync(dir);
  if (files.length === 0) {
    return true;
  }
  return files.length === 1 && files[0] === '.git';
}

export function emptyDir(dir: any) {
  if (!fs.existsSync(dir)) {
    return;
  }

  postOrderDirectoryTraverse(
    dir,
    (dir) => fs.rmdirSync(dir),
    (file) => fs.unlinkSync(file)
  );
}

export function postOrderDirectoryTraverse(
  dir: any,
  dirCallback: { (dir: any): void; (arg0: string): void },
  fileCallback: { (file: any): void; (arg0: string): void }
) {
  for (const filename of fs.readdirSync(dir)) {
    if (filename === '.git') {
      continue;
    }
    const fullpath = path.resolve(dir, filename);
    if (fs.lstatSync(fullpath).isDirectory()) {
      postOrderDirectoryTraverse(fullpath, dirCallback, fileCallback);
      dirCallback(fullpath);
      continue;
    }
    fileCallback(fullpath);
  }
}

/**
 * @description 循环创建命令
 * @author wfd
 * @date 2022/8/19 15:23
 * @example
 * @param actionsMap
 * @param program
 */
export function createProgram(actionsMap: any, program: any) {
  /** 循环创建命令 */
  Object.keys(actionsMap).forEach((action) => {
    const _program = program
      .command(action)
      .alias(actionsMap[action].alias || '')
      .description(actionsMap[action]?.description || '')
      .action(actionsMap[action].action);

    const options = actionsMap[action]?.options;

    if (options) {
      for (const item of options) {
        _program.option(item[0], item[1]);
      }
    }
  });
}
