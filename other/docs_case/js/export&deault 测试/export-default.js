function test () {
	console.log('test');
}

function testOne () {
	console.log('testOne');
}

// 第一种写法
// export default testOne

// 第二种写法
// export default function testOne () {
// 	console.log('testOne');
// }

// 第三种写法
export { testOne as default }
