let list: number[] = [1, 2, 3];

/** 数组泛型，Array<元素类型> */
let list1: Array<number> = [1, 2, 3];

let list2: any[] = [1, true, "free"];

/** 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：*/
let unusable: void = undefined;

/** 类型断言有两种形式。 其一是“尖括号”语法：*/
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

/** 另一个为as语法
 在TypeScript里使用JSX时，只有 as语法断言是被允许的。
 */
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;

function printLabel (labelledObj: {label: string}) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'str1' };
printLabel(myObj);

/** 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性: */
interface Point {
	readonly x: number;
	readonly y: number;
}

/** TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改： */
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
/** 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写： */
a = ro as number[];

/** 额外的属性检查 */
interface SquareConfig {
	color?: string;
	width?: number;
	
	[propName: string]: any;
}

function createSquare (config: SquareConfig): {color: string; area: number} {
	return
}

let mySquare = createSquare({ colour: 1, width: 100 });

/** 函数类型 */
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	let result = source.search(subString);
	return result > -1;
}

let mySearchs: SearchFunc;
mySearchs = function (src: string, sub: string): boolean {
	let result = src.search(sub);
	return result > -1;
}

/** 混合类型 */
interface Counter {
	(start: number): string;
	
	interval: number;
	
	reset (): void;
}

function getCounter (): Counter {
	let counter = <Counter>function (start: number) { };
	counter.interval = 123;
	counter.reset = function () { };
	return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

/** 剩余参数 */
function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
