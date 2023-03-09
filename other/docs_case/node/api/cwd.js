const { resolve } = require('path')

console.log('process.cwd():', process.cwd())
console.log('__dirname:', __dirname)

function pathResolve(dir) {
	return resolve(process.cwd(), '.', dir);
}

console.log(pathResolve('test'))
