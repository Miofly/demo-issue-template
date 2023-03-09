function test () {
	console.log('触发 export.js 的 test 事件');
}

const test2 = '这是 export.js 的 test2 变量'

export { test, test2, test2 as test2s }
