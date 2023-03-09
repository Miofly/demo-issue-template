type DynamicProps<T> = {
	[P in keyof T]: Array<T[P]>|T[P];
};

type Person = {
	name: string
	age: number
}

/**
 * @description 相当于将 T (假设 T 是对象) 通过 keyof T 将会把 T 的每一个键拿出来
 	 [key in keyof T] ===> 相当于将 每一个键遍历出来
 	 最后形成如下：
 	 {
 	 		T 对象中的 key 值 1： number,
 	 		T 对象中的 key 值 2： number,
 	 }
 * @author wfd
 * @date 2021/10/9 13:30
 */
type TypeToNumber<T> = {
	[key in keyof T]: number
}

/**
 * @description
 		TypeToNumber<Person> 相当于转换成了
 	 {
 	 		name: number
 	 		age: number
 	 }
 * @author wfd
 * @date 2021/10/9 13:28
 */
const obj: TypeToNumber<Person> = { name: 10, age: 10 }
const obj1: {name: number, age: number} = { name: 10, age: 10 }

/** 直接用 Person 类型则 name 属性无法用字符串，因为 Person 中的 name 属性的类型是 string */
// const obj2: Person = { name: 10, age: 10 }

/** 下面这种实现的效果将会和 Person 一致 */
type TypeOne<T> = {
	[P in keyof T]: T[P]
}

const objTwo: TypeOne<Person> = { name: '10', age: 10 }
const objTwos: {name: string, age: number} = { name: '10', age: 10 }


/**
 * @description 相当于转换成了如下形式
 	 {
 	 		T 对象中的 key 值 1： Array<T 对象中的第一个 value 对应的类型>,
 	 		T 对象中的 key 值 1： Array<T 对象中的第二个 value 对应的类型>,
 	 }
 * @author wfd
 * @date 2021/10/9 13:37
 */
type TypeTwo<T> = {
	[P in keyof T]: Array<T[P]>
}

/**
 * @description TypeTwo<Person> 相当于转换成了
	 {name: Array<string>, age: Array<number>}
 * @author wfd
 * @date 2021/10/9 13:38
 */
const objThree: TypeTwo<Person> = { name: ['10'], age: [10] }
const objThrees: {name: Array<string>, age: Array<number>} = { name: ['10'], age: [10] }
