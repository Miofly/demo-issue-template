import fg from 'fast-glob';

async function test() {
  const entries = fg.sync('**', {
    /** 只显示文件 */
    onlyFiles: false,
    onlyDirectories: true
  });
  console.log(entries);
}

test();
