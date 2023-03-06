export interface ImportInfo {
	as?: string
	name?: string
	from: string
}

export type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined

export interface ComponentInfo extends ImportInfo {
	sideEffects?: SideEffectsInfo
}

type Awaitable<T> = T | PromiseLike<T>;

export type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>

export type ComponentResolverFunction = (name: string) => ComponentResolveResult

export interface ComponentResolverObject {
	type: 'component' | 'directive'
	resolve: ComponentResolverFunction
}

export type ComponentResolver = ComponentResolverFunction | ComponentResolverObject
function kebabCase (key: string) {
	const result = key.replace(/([A-Z])/g, ' $1').trim()
	return result.split(' ').join('-').toLowerCase()
}

export interface VftResolverOptions {
	/**
	 * import style css or sass with components
	 *
	 * @default 'css'
	 */
	importStyle?: boolean | 'css' | 'sass';
	
	/**
	 * use commonjs lib & source css or scss for ssr
	 */
	ssr?: boolean;
	
	/**
	 * specify vft version to load style
	 *
	 * @default installed version
	 */
	version?: string;
	
	/**
	 * auto import for directives
	 *
	 * @default true
	 */
	directives?: boolean;
	
	/**
	 * exclude component name, if match do not resolve the name
	 */
	exclude?: RegExp;
	
	/**
	 * a list of component names that have no styles, so resolving their styles file should be prevented
	 */
	noStylesComponents?: string[];
}

type VftResolverOptionsResolved = Required<Omit<VftResolverOptions, 'exclude'>> &
	Pick<VftResolverOptions, 'exclude'>

function getSideEffects (dirName: string, options: VftResolverOptionsResolved): SideEffectsInfo | undefined {
	const { importStyle, ssr } = options;
	const themeFolder = 'vft/theme-chalk';
	const esComponentsFolder = 'vft/es/components';
	
	if (importStyle === 'sass') {
		return ssr
			? [`${themeFolder}/src/base.scss`, `${themeFolder}/src/${dirName}.scss`]
			: [`${esComponentsFolder}/base/style/index`, `${esComponentsFolder}/${dirName}/style/index`];
	} else if (importStyle === true || importStyle === 'css') {
		return ssr
			? [`${themeFolder}/base.css`, `${themeFolder}/el-${dirName}.css`]
			: [`${esComponentsFolder}/base/style/css`, `${esComponentsFolder}/${dirName}/style/css`];
	}
}

function resolveComponent (name: string, options: VftResolverOptionsResolved): ComponentInfo | undefined {
	if (options.exclude && name.match(options.exclude))
		return;
	
	if (!name.match(/^Vft[A-Z]/))
		return;
	
	if (name.match(/^VftIcon.+/)) {
		return {
			name: name.replace(/^VftIcon/, ''),
			from: '@vft/icons-vue',
		};
	}
	
	const partialName = kebabCase(name.slice(3));// VftTableColumn -> table-column
	const { version, ssr } = options;
	
	return {
		name,
		from: `vft/${ssr ? 'lib' : 'es'}`,
		sideEffects: getSideEffects(partialName, options),
	};
}

function resolveDirective (name: string, options: VftResolverOptionsResolved): ComponentInfo | undefined {
	if (!options.directives)
		return;
	
	const directives: Record<string, {importName: string; styleName: string}> = {
		Loading: { importName: 'VftLoadingDirective', styleName: 'loading' },
		Popover: { importName: 'VftPopoverDirective', styleName: 'popover' },
		InfiniteScroll: { importName: 'VftInfiniteScroll', styleName: 'infinite-scroll' },
	};
	
	const directive = directives[name];
	if (!directive)
		return;
	
	const { version, ssr } = options;
	
	return {
		name: directive.importName,
		from: `vft/${ssr ? 'lib' : 'es'}`,
		sideEffects: getSideEffects(directive.styleName, options),
	};
}

const noStylesComponents = ['VftAutoResizer'];

export function VftResolver (
	options: VftResolverOptions = {},
): ComponentResolver[] {
	let optionsResolved: VftResolverOptionsResolved;
	
	async function resolveOptions () {
		if (optionsResolved)
			return optionsResolved;
		optionsResolved = {
			ssr: false,
			version: '2.2.2',
			importStyle: 'css',
			directives: true,
			exclude: undefined,
			noStylesComponents: options.noStylesComponents || [],
			...options,
		};
		return optionsResolved;
	}
	
	return [
		{
			type: 'component',
			resolve: async(name: string) => {
				const options = await resolveOptions();
				
				if ([...options.noStylesComponents, ...noStylesComponents].includes(name))
					return resolveComponent(name, { ...options, importStyle: false });
				else return resolveComponent(name, options);
			},
		},
		{
			type: 'directive',
			resolve: async(name: string) => {
				return resolveDirective(name, await resolveOptions());
			},
		},
	];
}
