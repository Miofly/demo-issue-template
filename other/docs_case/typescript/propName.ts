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
	// TS2413: Numeric index type 'string | number | any[]' is not assignable to string index type 'string | number'.
	[key: string]: number|string;
}
