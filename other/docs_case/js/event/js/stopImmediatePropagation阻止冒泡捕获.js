/**
 * event.stopImmediatePropagation 与 event.stopPropagation() 对阻止事件的冒泡与捕获有相同的作用
 * 区别是当给 div2 增加两个 addEventListener click 事件时，
 * 给 div2 的第一个 addEventListener 事件改用 stopImmediatePropagation 时，输出 4，3，2，
 * 而使用 stopPropagation 会输出  4，3，2，22
 */
div1.addEventListener('click', function (e) {
	console.log('div1的监听事件输出：', 1);
	// event.stopPropagation();
})
div2.addEventListener('click', function (e) {
	console.log('div2的监听事件输出：', 2);
	// event.stopPropagation();
	event.stopImmediatePropagation();
})
div2.addEventListener('click', function (e) {
	console.log('div2另一个的监听事件输出：', 22);
})
div3.addEventListener('click', function (e) {
	console.log('div3的监听事件输出：', 3);
	// event.stopPropagation();
})
div4.addEventListener('click', function (e) {
	console.log('div4的监听事件输出：', 4);
	// event.stopPropagation();
})
