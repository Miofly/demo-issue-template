export namespace Test {
	const name = 'wfly'
	
	export const getName = () => {
		return name
	}
	
	export const getAge = () => {
		return '18'
	}
}

console.log(Test.getName());
console.log(Test.getAge());
