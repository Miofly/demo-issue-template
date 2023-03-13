import { upperFirst } from 'lodash';

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
	const result = key.replace(/([A-Z])/g, ' $1').trim();
	return result.split(' ').join('-').toLowerCase();
}

export interface CompResolverOptions {
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
  /**
   * conponent
   */
  compName?: string
}

type CompResolverOptionsResolved = Required<Omit<CompResolverOptions, 'exclude'>> & Pick<CompResolverOptions, 'exclude'>

function getSideEffects (dirName: string, options: CompResolverOptionsResolved): SideEffectsInfo | undefined {
	const { importStyle, ssr } = options;
	const themeFolder = options.compName + '/theme-style';
	const esComponentsFolder = options.compName + '/es/components';
	
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

function resolveComponent (name: string, options: CompResolverOptionsResolved): ComponentInfo | undefined {
	if (options.exclude && name.match(options.exclude))
		return;
  
  const reg = new RegExp(`^${upperFirst(options.compName)}[A-Z]`);
  if (!name.match(reg)) return;
	
	const partialName = kebabCase(name.slice(options.compName.length));// VftTableColumn -> table-column
	const { ssr } = options;
	
	return {
		name,
		from: `${options.compName}/${ssr ? 'lib' : 'es'}`,
		sideEffects: getSideEffects(partialName, options)
	};
}

function resolveDirective (name: string, options: CompResolverOptionsResolved): ComponentInfo | undefined {
	if (!options.directives)
		return;
	
	const directives: Record<string, {importName: string; styleName: string}> = {
		Loading: { importName: 'VftLoadingDirective', styleName: 'loading' },
		Popover: { importName: 'VftPopoverDirective', styleName: 'popover' },
		InfiniteScroll: { importName: 'VftInfiniteScroll', styleName: 'infinite-scroll' }
	};
	
	const directive = directives[name];
	if (!directive)
		return;
	
	const { ssr } = options;
	
	return {
		name: directive.importName,
		from: `${options.compName}/${ssr ? 'lib' : 'es'}`,
		sideEffects: getSideEffects(directive.styleName, options)
	};
}

const noStylesComponents = ['VftIconText', 'VftAutoResizer', 'VftRouterViewContent', 'VftContextMenu'];

export function CompResolver (
	options: CompResolverOptions = {}
): ComponentResolver[] {
	let optionsResolved: CompResolverOptionsResolved;
	async function resolveOptions () {
		if (optionsResolved)
			return optionsResolved;
		optionsResolved = {
      compName: 'vft',
			ssr: false,
			importStyle: 'css',
			directives: true,
			exclude: undefined,
			noStylesComponents: options.noStylesComponents || [],
			...options
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
			}
		},
		{
			type: 'directive',
			resolve: async(name: string) => {
				return resolveDirective(name, await resolveOptions());
			}
		}
	];
}
