/**
 * @description record 的实现如下
 */
type RecordCopy<K extends keyof any, T> = {
	[P in K]: T;
};

/** 对象的值类型 */
interface DatabaseInfo {
	id: string
}

/** 对象的键类型 */
type DataSource = string
type RecordTest = Record<DataSource, DatabaseInfo>

const x: RecordTest = {
	false: { id: '1' },
	undefined: { id: '2' },
	null: { id: '3' },
}

const x1: {user: {id: string}, detail: {id: string}, list: {id: string}} = {
	user: { id: '1' },
	detail: { id: '2' },
	list: { id: '3' },
}

type EventType = string;
type RecordUnknown = Record<EventType, unknown>

const test: RecordUnknown = {
	Array: [],
	a: 1,
	b: 2,
	c: 3,
	1: [],
}

type Handler<T = unknown> = (event: T) => void;

function newTest<T> (par: T) {
	type Test = Handler<T[]>
	return par
}

newTest('222')


