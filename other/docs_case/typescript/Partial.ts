type CopyPartial<T> = {
	[P in keyof T]?: T[P]
}

type Person = {
	name: string
	age: number
	firends: any[]
}

const PersonTest:Person = {
	name: 'wfd',
	age: 18,
	firends: []
}

const PersonTestTwo:CopyPartial<Person> = {
	name: 'wfd',
	age: 18,
}
