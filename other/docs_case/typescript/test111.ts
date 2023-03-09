
// function createContext (obj) {
// 	return obj
// }
// type regionLevelType = '0' | '1' | '2' | '3';
// interface CommonState {
// 	regionCode: string, // 当前地区代码
// 	selectYear: string, // 当前的年份
// 	regionLevel: regionLevelType,
// }
//
// const defaultContext = {
// 	regionCode: '',
// 	selectYear: '',
// 	regionLevel: '0',
// };



function simpleExample(a: number | undefined) {
	const b: number = a;
	const c: number = a!; // OK
	console.log(b);
}

function myFunc(maybeString: string | undefined | null) {
	const onlyString: string = maybeString; //compilation error: string | undefined | null is not assignable to string
	const ignoreUndefinedAndNull: string = maybeString!; //no problem
}
type NumGenerator = () => number;

function myFunc1(numGenerator: NumGenerator | undefined) {
	const num1 = numGenerator(); //compilation error: cannot invoke an object which is possibly undefined
	const num2 = numGenerator!(); //no problem
}
