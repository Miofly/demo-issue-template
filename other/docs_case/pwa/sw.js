// 监听它的 install 事件了
this.addEventListener('install', function (event) {
  console.log('Service Worker install');
});

// 监听 activate 事件。
this.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
})

// 在 ServiceWorker 实例上调用 postMessage 方法
this.addEventListener('message', function (event) {
  console.log(event.data); // this message is from page
})
