// var mod = require('./lib');
var mod = require('./lib_two');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
