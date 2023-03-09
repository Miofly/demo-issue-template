export {};

declare global {
	type AnyFunction<T> = (...args: any[]) => T;
	type Nullable<T> = T | null;
	type Recordable<T = any> = Record<string, T>;
	type Numberish = number | string;
	type TimeoutHandle = ReturnType<typeof setTimeout>;
	type IntervalHandle = ReturnType<typeof setInterval>;
	
	type DeepPartial<T> = {
		[P in keyof T]?: DeepPartial<T[P]>;
	};
	type TargetContext = '_self' | '_blank';
	type Theme = 'light' | 'dark';
	
	interface ChangeEvent extends Event {
		target: HTMLInputElement;
	}
	
	type ClassObjectType = Record<string, boolean>;
	
	type ClassType = string | ClassObjectType | ClassType[];
	
	type ModulesDefaultType = Record<string, {default: Record<string, any>}>;
	
	interface Fn<T = any, R = T> {
		(...arg: T[]): R;
	}
}
