/**
 * 当在某一个逻辑中添加 event.stopPropagation(); 会阻止当前的事件向下或向上传播
 * 如：在捕获事件流当中，当我们在 div2 中添加 event.stopPropagation() 时，
 * 点击 div4 只会输出 1, 2 因为在 div2 中 event.stopPropagation() 阻止了事件向下传播
 *
 * 在 div1 中添加。则无论点击哪个 div 都永远只会输出 1,因为在捕获事件流中事件是由 window 传至 目标节点
 * 相当于在 div1 中触发 listener 后，事件传播被终止了
 */
div1.addEventListener('click', function (e) {
	console.log('div1的监听事件输出：', 1);
	// event.stopPropagation();
}, true)
div2.addEventListener('click', function (e) {
	console.log('div2的监听事件输出：', 2);
	// event.stopPropagation();
}, true)
div3.addEventListener('click', function (e) {
	console.log('div3的监听事件输出：', 3);
	// event.stopPropagation();
}, true)
div4.addEventListener('click', function (e) {
	console.log('div4的监听事件输出：', 4);
	event.stopPropagation();
}, true)
