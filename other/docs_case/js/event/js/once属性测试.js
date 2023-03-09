/**
 * 如下所示给 div1 div2 添加属性 once:true，div3 div4 添加属性 once:false
 * @example 当首次点击 div4 由于默认是冒泡事件流，div4 的事件会先触发，接着 div3 div2 div1 依次触发
 * 					打印 4,3,2,1，然后我们再点击 div4 默认情况下还会输出 4,3,2,1，但是由于 div1 div2 的 once 为 true
 * 				  所以只会书粗 4，3 标明当添加 once 为 true 的 listener 只会触发一次
 */
div1.addEventListener('click', function (e) {
	console.log('div1的监听事件输出：', 1);
}, { once: true })
div2.addEventListener('click', function (e) {
	console.log('div2的监听事件输出：', 2);
}, { once: true })
div3.addEventListener('click', function (e) {
	console.log('div3的监听事件输出：', 3);
}, { once: false })
div4.addEventListener('click', function (e) {
	console.log('div4的监听事件输出：', 4);
}, { once: false })
