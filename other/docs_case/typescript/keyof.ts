interface Person {
	name: string;
	age: number;
	location: string;
}

const test:Person = {name: '11', age: 11, location: '22'}
type K1 = keyof Person; // "name" | "age" | "location"
const tests: K1 = 'name'

const test1:Person[] = [{name: '11', age: 11, location: '22'}]
/** 为什么会有 number 是否是继承造成的 */
type K2 = keyof Person[]; // number | "length" | "push" | "concat" | ...
/** type K2s = keyof []; // 等同于 K2 */
type K2s = keyof []; // number | "length" | "push" | "concat" | ...
const test1s: K2 = 10 || 'length' || 'push'

const test2:{ [x: string]: Person } = { 1: {name: '11', age: 11, location: '22'} }
// 索引签名参数类型必须为 "string" 或 "number"。
type K3 = keyof { [x: string]: Person };  // string | number
const test2s:K3 = 10 || '333'

type K4 = keyof boolean;
const test3: K4 = 'valueOf'

let K2: keyof number = 'valueOf' || 'toFixed'

// 期望用户输入的属性是对象上已存在的属性
function prop(obj, key) {
	return obj[key];
}

function propTs(obj: object, key: string) {
	return obj[key];
}

function propTss<T extends object, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

console.log(propTss(['a'], 0))
console.log(propTss(['a'], 1))
