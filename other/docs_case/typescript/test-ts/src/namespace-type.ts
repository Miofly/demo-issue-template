export namespace Test {
	export type Person = {name: string, age: number}
	
	export interface Props {
		name: string
		age?: number
	}
}

const person: Test.Person = {name: 'wf', age: 18}
const persons: Test.Props = {name: 'wf'}
