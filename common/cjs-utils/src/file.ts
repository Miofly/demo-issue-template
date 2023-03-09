import fs from 'fs-extra';
import path from 'path';

export function getAllFile(filePath: string, ignoreDir?: Array<string>, isDir?: boolean, callback?: Function) {
  // const files = [];
  // 根据文件路径读取文件，返回文件列表
  if (fs.existsSync(filePath)) {
    fs.readdir(filePath, function (err, files) {
      if (err) {
        console.warn(err, '读取文件夹错误！');
      } else {
        // 遍历读取到的文件列表
        files.forEach(function (filename) {
          // 获取当前文件的绝对路径
          const filedir = path.join(filePath, filename);
          // 根据文件路径获取文件信息，返回一个fs.Stats对象
          fs.stat(filedir, function (eror, stats) {
            if (eror) {
              console.warn('获取文件stats失败');
            } else {
              if (ignoreDir?.includes(filename)) {
                return;
              }
              const isFile = stats.isFile(); // 是文件
              const _isDir = stats.isDirectory(); // 是文件夹
              if (isFile && !isDir) {
                callback?.(filedir, filename);
                // files.push(filedir);
              }
              if (_isDir) {
                if (isDir) {
                  callback?.(filedir, filename, true);
                }
                getAllFile(filedir, ignoreDir, isDir, callback); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
              }
            }
          });
        });
      }
    });
  }
}

const cwd = process.cwd();

const ignoreDir = ['node_modules', 'lib', 'dist'];

export function getExt(fileName: string) {
  return path.extname(fileName);
}

export async function deleteFile(name: string, options: any) {
  getAllFile(cwd, ignoreDir, options.dir, function (file: string, filename: string) {
    if (options.match) {
      if (filename === name) {
        fs.removeSync(file);
      }
    } else {
      if (filename.includes(name)) {
        fs.removeSync(file);
      }
    }
  });
}

export async function editFileContent(name: string, options: any) {
  let readFile;
  if (options.readFile) {
    readFile = options.readFile;
  }

  let content: string | Buffer = '';

  if (readFile) {
    const readFilePath = path.join(cwd, readFile);
    content = fs.readFileSync(readFilePath);
  } else {
    content = String(options.content || '');
  }

  let regExpContent: string[] = [];

  if (options.replace?.length) {
    regExpContent = options.replace;
  }

  function replaceContent(file: string) {
    if (regExpContent.length) {
      const data = fs.readFileSync(file);
      content = data.toString().replace(new RegExp(regExpContent[0], regExpContent[2] ?? 'g'), regExpContent[1] || '');
    }
    fs.outputFileSync(file, content);
  }

  getAllFile(cwd, ignoreDir, false, function (file: string, filename: string) {
    if (options.match) {
      if (filename === name) {
        replaceContent(file);
      }
    } else {
      if (filename.includes(name)) {
        replaceContent(file);
      }
    }
  });
}

export function renameFile(filePath = cwd) {
  getAllFile(filePath, ignoreDir, false, function (file: string, filename: string) {
    if (getExt(file) === '.vue') {
      fs.renameSync(file, file.replace(filename, 'index.vue'));
    }
  });
}
