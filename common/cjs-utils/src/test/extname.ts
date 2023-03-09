import path from 'path';

const { extname} = path;

console.log(extname('readme.md'));
console.log(extname('hello.txt'));
console.log(extname('fileDump'));
console.log(extname('example.'));
console.log(extname('readme.md.txt'));
