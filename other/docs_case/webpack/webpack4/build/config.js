// 配置项
const path = require('path');
const cdn_path = 'https://cdn.jsdelivr.net/npm/';

// 拼接路径，windwos和unix的路径链接斜线不一样
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const stats = {
	// 暂不需要的信息
	usedExports: false, // 显示哪个模块导出被用到
	providedExports: false, // 显示模块的导出
	publicPath: false, // 添加 public path 的信息
	reasons: false, // 添加模块被引入的原因
	source: false, // 添加模块的源码
	modules: false, // 添加构建模块信息
	modulesSort: 'field', // 按指定的字段，对模块进行排序 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
	moduleTrace: false, // 显示警告/错误的依赖和来源（从 webpack 2.5.0 开始）
	children: false, // 添加 children 信息
	hash: false, // 添加 compilation 的哈希值
	env: false, // 添加 --env information
	errors: false, // 添加错误信息
	errorDetails: false, // 添加错误的详细信息（就像解析日志一样）
	entrypoints: false, // 通过对应的 bundle 显示入口起点
	depth: false, // 显示每个模块到入口起点的距离(distance)
	cached: false, // 添加缓存（但未构建）模块的信息
	cachedAssets: false, // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
	chunks: false, // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
	chunkModules: false, // 将构建模块信息添加到 chunk 信息
	chunkOrigins: false, // 添加 chunk 和 chunk merge 来源的信息
	chunksSort: 'field' // 按指定的字段，对 chunk 进行排序 你可以使用 `!field` 来反转排序。默认是按照 `id` 排序。
};

module.exports = {
	is_gzip: false,
	is_brotli: false,
	is_externals: false,
	is_img_compress: false,
	is_analyze: false,
	staticResources_name: 'static',
	extensions: [
		'.tsx',
		'.ts',
		'.js',
		'.vue',
		'.json'
	],
	alias: {
		'@': resolve('../src'), // @方式引入资源
		vue$: 'vue/dist/vue.runtime.esm.js'
	},
	// Css: ['https://cdn.jsdelivr.net/npm/ant-design-vue@1.7.3/dist/antd.min.css']
	externals: [ // 配置externals 利用cdn加载
		{
			module: 'vue',
			entry: `${cdn_path}vue@2.6.10/dist/vue.min.js`,
			global: 'Vue'
		},
		{
			module: 'vue-router',
			entry: `${cdn_path}vue-router@3.1.3/dist/vue-router.min.js`,
			global: 'VueRouter'
		},
		{
			module: 'vuex',
			entry: `${cdn_path}vuex@3.1.1/dist/vuex.min.js`,
			global: 'Vuex'
		},
		{
			module: 'axios',
			entry: `${cdn_path}axios@0.19.0/dist/axios.min.js`,
			global: 'axios'
		},
		{
			module: 'ant-design-vue',
			entry: `${cdn_path}ant-design-vue@1.4.12/dist/antd.min.js`,
			global: 'antd'
		}
	],
	prod_stats: {
		assets: true, // 添加资源信息
		assetsSort: 'field', // 对资源按指定的字段进行排序 你可以使用 `!field` 来反转排序。
		builtAt: true, // 添加构建日期和构建时间信息
		version: true, // 添加 webpack 版本信息
		timings: true, // 添加时间信息
		warnings: true, // 添加警告
		...stats
	},
	dev_stats: {
		assets: false, // 添加资源信息
		builtAt: true, // 添加构建日期和构建时间信息
		version: true, // 添加 webpack 版本信息
		timings: true, // 添加时间信息
		warnings: true, // 添加警告
		...stats
	}
};
