/** 泛型 */
// function identity<T>(arg: T): T {
// 	return arg;
// }
// let myIdentity: <U>(arg: U) => U = identity;
//
//
// function identity1 (arg: string): string {
// 	return arg
// }

enum E {
	A = 1, B = 100, C, D, E = 200, F
}

function f(obj: { Y: number }) {
	return obj.Y;
}

const a: number | undefined = undefined;
const b: number = a!;

console.log(b)

interface Person {
	name: string
	age: number
}

type PersonKey = keyof Person // 'age' | 'name'

const test: PersonKey = 'age'

type TestOne = {
	a: string
}

type TestTwo= {
	b: string
}

type TestThree = {
	c?: string
}

const myTest: TestOne & TestTwo & TestThree = { a: '1', b: '2' }

interface TestOnes {
	a: string
}

interface TestTwos extends TestOnes{
	d?: string
}

const myTests: TestTwos = { a: '1', d: '2' }


interface Animal {
	canFly: boolean
	canSwim: boolean
}

// 变可选，能够只赋值局部属性
let animal: Partial<Animal> = {
	canFly: false,
}

// 实现：获取 T 类型(函数)对应的返回值类型
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// 获取函数返回值类型
function bar(x: string | number): string | number {
	return 'hello'
}
// string | number
type FooType = ReturnType<typeof bar>
