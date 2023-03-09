/**
 * useCapture 指定事件是否在捕获或冒泡阶段执行。
 * true - 事件句柄在捕获阶段执行
 * false- false- 默认。事件句柄在冒泡阶段执行
 */
div1.addEventListener('click', function (e) {
	console.log('div1的监听事件输出：', 1);
}, false)
div2.addEventListener('click', function (e) {
	console.log('div2的监听事件输出：', 2);
}, false)
div3.addEventListener('click', function (e) {
	console.log('div3的监听事件输出：', 3);
}, false)
div4.addEventListener('click', function (e) {
	console.log('div4的监听事件输出：', 4);
}, false)
