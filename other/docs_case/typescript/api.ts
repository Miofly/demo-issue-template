type TestApi = Pick<TestObj, 'name'>

type CopyExclude<T, U> = T extends U ? never : T;
type CopyExtract<T, U> = T extends U ? T : never;
type CopyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};
type CopyRecord<K extends keyof any, T> = {
	[P in K]: T;
};

type TestObj = { name: string, age: number }

/** 'a' | 'b' */
type CommonKeys = CopyExclude<'a'| 'b' | 'c', 'd'|'c'>
/** 'c' */
type CommonKeys1 = CopyExtract<'a'| 'b' | 'c', 'd'|'c'>

/** {name: string} */
type CommonKeys2 = CopyPick<TestObj, 'name'>

type CommonKeys3 = CopyRecord<string, TestObj>
