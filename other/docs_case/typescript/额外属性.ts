type a = {
	a: 1,
	b: 2,
	[x: string]: number
}

interface SquareConfig {
	color: string;
	width: number;
	test: Array<any>;
	[propName: number]: number|string|Array<any>;
}

interface testRandom{
	length: number;
	callee: Function;
	[index: number]: string;
}

var a: testRandom = {
	length: 3,
	callee: function () {
	
	}
}
