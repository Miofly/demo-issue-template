import { computed, inject, ref, unref } from 'vue';

import type { InjectionKey, Ref } from 'vue';

export const defaultNamespace = 'vft';
const statePrefix = 'is-';

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
	Symbol('localeContextKey');

export const useGetDerivedNamespace = (namespaceOverrides?: Ref<string>) => {
	const derivedNamespace =
		namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace));
	const namespace = computed(() => {
		return unref(derivedNamespace) || defaultNamespace;
	});
	return namespace;
};

export const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
	let cls = `${namespace}-${block}`;
	if (blockSuffix) {
		cls += `-${blockSuffix}`;
	}
	if (element) {
		cls += `__${element}`;
	}
	if (modifier) {
		cls += `--${modifier}`;
	}
	return cls;
};

export const useNamespace = (block: string, namespaceOverrides?: Ref<string>) => {
	// const namespace = useGlobalConfig('namespace', defaultNamespace);
	const namespace = useGetDerivedNamespace(namespaceOverrides);
	// vft-button | (test) = vft-button-test
	const b = (blockSuffix = '') => _bem(namespace.value, block, blockSuffix, '', '');
	// e('test'): vft-button__test
	const e = (element?: string) => (element ? _bem(namespace.value, block, '', element, '') : '');
	// m('test'): vft-button--test
	const m = (modifier?: string) => (modifier ? _bem(namespace.value, block, '', '', modifier) : '');
	// be('test'): vft-button-par__sub
	const be = (blockSuffix?: string, element?: string) => (blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, '') : '');
	// em('test'): vft-button__par--sub
	const em = (element?: string, modifier?: string) => (element && modifier ? _bem(namespace.value, block, '', element, modifier) : '');
	// bm('test'): vft-button-par--sub
	const bm = (blockSuffix?: string, modifier?: string) => (blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, '', modifier) : '');
	// bem('test'): vft-button-par__sub--sun
	const bem = (blockSuffix?: string, element?: string, modifier?: string) => (blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : '');
	// is('show', true): is-show
	const is: {
		(name: string, state: boolean | undefined): string;
		(name: string): string;
	} = (name: string, ...args: [boolean | undefined] | []) => {
		const state = args.length >= 1 ? args[0]! : true;
		return name && state ? `${statePrefix}${name}` : '';
	};
	
	// cssVar({'border-style': 'solid','border-width': '10px',}): { "--vft-border-style": "solid","--vft-border-width": "10px" }
	const cssVar = (object: Record<string, string | undefined>) => {
		const styles: Record<string, string> = {};
		for (const key in object) {
			if (object[key]) {
				styles[`--${namespace.value}-${key}`] = object[key]!;
			}
		}
		return styles;
	};
	
	// cssVarBlock({ 'border-style': 'solid', 'border-width': '10px' })：{ "--vft-button-border-style": "solid", "--vft-button-border-width": "10px" }
	const cssVarBlock = (object: Record<string, string | undefined>) => {
		const styles: Record<string, string> = {};
		for (const key in object) {
			if (object[key]) {
				styles[`--${namespace.value}-${block}-${key}`] = object[key]!;
			}
		}
		return styles;
	};
	
	// cssVarName('test')：--vft-test
	const cssVarName = (name: string) => `--${namespace.value}-${name}`;
	
	// cssVarBlockName('test')：--vft-button-test
	const cssVarBlockName = (name: string) => `--${namespace.value}-${block}-${name}`;
	
	return {
		namespace,
		b,
		e,
		m,
		be,
		em,
		bm,
		bem,
		is,
		// css
		cssVar,
		cssVarName,
		cssVarBlock,
		cssVarBlockName
	};
};
