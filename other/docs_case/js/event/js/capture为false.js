div1.addEventListener('click', function (e) {
	console.log('div1的监听事件输出：', 1);
}, { capture: false })
div2.addEventListener('click', function (e) {
	console.log('div2的监听事件输出：', 2);
}, { capture: false })
div3.addEventListener('click', function (e) {
	console.log('div3的监听事件输出：', 3);
}, { capture: false })
div4.addEventListener('click', function (e) {
	console.log('div4的监听事件输出：', 4);
}, { capture: false })
