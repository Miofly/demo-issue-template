class Animal {
	name: string;
}
class Dog extends Animal {
	breed: string;
}

interface NotOkay {
	test: string;
	[y: number]: number;
	test1: string;
}


interface NotOkays {
	[x: number]: Animal;
	[x: string]: Animal;
}


