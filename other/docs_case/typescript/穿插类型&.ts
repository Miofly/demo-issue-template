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
const myTest1: TestOne & TestTwo & TestThree = { a: '1', b: '2', c: '3' }
/** d 不包含在 TestOne & TestTwo & TestThree 类型中 */
// const myTest2: TestOne & TestTwo & TestThree = { a: '1', b: '2', c: '3', d: 4 }

// b 在 TestOne & TestTwo & TestThree 是必须拥有的
// const myTest3: TestOne & TestTwo & TestThree = { a: '1' }
