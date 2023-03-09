/**
 * 当在某一个逻辑中添加 event.stopPropagation(); 会阻止当前的事件向下或向上传播
 * 如：在冒泡事件流当中，当我们在 div4 中添加 event.stopPropagation() 时，
 * 点击 div4 只会输出 4, 2 因为在 div4 中 event.stopPropagation() 阻止了事件向上传播
 *
 * 在 div2 中添加。点击div4 会输出 4,3,2 因为在 div2 中事件被组件向上传播
 */
div1.addEventListener('click', function (e) {
	console.log('div1的监听事件输出：', 1);
	// event.stopPropagation();
})
div2.addEventListener('click', function (e) {
	console.log('div2的监听事件输出：', 2);
	event.stopPropagation();
})
div3.addEventListener('click', function (e) {
	console.log('div3的监听事件输出：', 3);
	// event.stopPropagation();
})
div4.addEventListener('click', function (e) {
	console.log('div4的监听事件输出：', 4);
	// event.stopPropagation();
})
