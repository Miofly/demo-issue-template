const config = require('./config');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html资源
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const minimist = require('minimist');
const Webpackbar = require('webpackbar'); // 进度条
const is_prod = process.env.NODE_ENV === 'production';
/**
 * 	@Description: glob 主要用于匹配文件路径
 * 	@author wfd
 * 	@date 2021/3/12 13:15
 * 	@detail
 * 	在 pattern 中使用以下字符具有特殊的“魔法含义”
 * 	在单个路径部分匹配0个或更多字符
   	?匹配1个字符
   	[...]匹配一个字符范围，类似于RegExp范围。如果范围的第一个字符是!或^则它匹配所有不在范围内的字符。
   	!(pattern|pattern|pattern) 与提供的匹配规则都不匹配的所有内容。
   	?(pattern|pattern|pattern) 匹配规则零个或一个。
   	+(pattern|pattern|pattern) 匹配规则的一个或多个。
 *(a|b|c) 匹配提供规则零个或多个。
 	  @(pattern|pat*|pat?erN) 只匹配提供的一种规则
 **如果路径部分中只有一个globstar，则它将匹配零个或多个搜索匹配项的目录和子目录。它不对符号链接目录进行搜索匹配。
 */
const glob = require('glob');
const join = (...dir) => path.join(__dirname, ...dir);
const resolve = (...dir) => path.resolve(__dirname, ...dir);
const entry_arr = {}; // 遍历pages目录
const HtmlWebpackPlugin_arr = [];
const options = minimist(process.argv.slice(2)); // 获得传入的npm命令参数并转成object
const packagePath = options.path ? `${options.path}` : ''; // 脚本如果传入path值则为path路径反之为空字符串

glob.sync(`./src/pages${packagePath ? `/${packagePath}` : ''}/**/main.ts`).forEach(path => {
	const chunk = path.split('./src/pages/')[1].split('/main.ts').shift(); // 获取pages目录下的一级目录 test1
	entry_arr[chunk] = join('../', path);
	// entry_arr[chunk] = join('../', 'src/main.js')
	// process.env.NODE_ENV === 'production'
	//     ? ['core-js/stable', 'regenerator-runtime/runtime', join('../', path)]
	//     : join('../', path);

	// html-webpack-plugin
	// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
	// 需求：需要有结构的HTML文件
	const htmlConf = {
		// filename: `${chunk}.html`, // 输出的文件名称 默认是index.html
		// 本地模板的所在的文件路径，支持的加载器有html(常用)，ejs(默认)等
		// 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
		template: join('../', path.replace(/main\.ts/g, 'app.ejs')),
		// template: resolve('../src/index.html'),
		hash: true, // 是否每次为文件中引入的静态资源如js,css等路径后面加上唯一的hash值
		// title: '债券融资',
		// 允许插入到模板中的chunk，如果不配置的话则会向entry中所有的打包出来的文件引入到模板中
		chunks: ['vendors', chunk],
		minify: { // 压缩HTML文件
			removeComments: true, // 移除HTML中的注释
			collapseWhitespace: true // 删除空白符与换行符
		}
	};

	HtmlWebpackPlugin_arr.push(new HtmlWebpackPlugin(htmlConf)); // js动态打包进HTML
});

// 复用loader
const commonCssLoader = [
	is_prod ? MiniCssExtractPlugin.loader : 'vue-style-loader', {
		loader: 'css-loader',
		options: {
			sourceMap: !is_prod, // sourceMap 的生成取决于 devtool 选项
			importLoaders: 2 // 启用/禁用或设置在CSS加载程序之前应用的加载程序的数量。
		}
	}, {
		loader: 'postcss-loader',
		options: {
			sourceMap: !is_prod,
			config: {
				path: path.resolve(__dirname, '../postcss.config.js'),
			}
		}
	}
],

// less loader
 lessLoader = [
...commonCssLoader, {
		loader: 'less-loader',
		options: {
			sourceMap: !is_prod
		}
	}
],

// sass loader
 sassLoader = [
...commonCssLoader, {
		loader: 'sass-loader',
		options: {
			sourceMap: !is_prod
		}
	}
],

// stylus loader
 stylusLoader = [
...commonCssLoader, {
		loader: 'stylus-loader',
		options: {
			sourceMap: !is_prod,
			preferPathResolver: 'webpack'
		}
	}
];
const base_config = {
	entry: entry_arr,
	// entry: path.resolve(__dirname, '../src/main.js'),
	plugins: [
		// 打包时美化进度条
		new Webpackbar({
			color: 'blue',
		}), new VueLoaderPlugin(), ...HtmlWebpackPlugin_arr,
	],
	stats: is_prod ? config.prod_stats : config.dev_stats,
	module: {
		rules: [
			// 处理vue资源
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
							compilerOptions: {
								whitespace: 'condense'
							},
						}
					}
				]
			},
			// 处理多媒体资源
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024
					}
				},
				generator: {
					filename: `${config.staticResources_name}/media/[name].[hash:8][ext]`
				}
			},
			// 处理字体资源
			{
				test: /\.(eot|ttf|woff|woff2?)$/,
				type: 'asset/resource', // 相当于 file-loader
				generator: {
					filename: `${config.staticResources_name}/font/[name].[hash:8][ext]`
				}
			},
			// 处理css资源
			{
				test: /\.css$/,
				oneOf: [
					{
						resourceQuery: /module/,
						use: commonCssLoader
					}, {
						resourceQuery: /\?vue/,
						use: commonCssLoader
					}, {
						test: /\.module\.\w+$/,
						use: commonCssLoader
					}, {
						use: commonCssLoader
					}
				]
			},
			// 处理postcss资源
			{
				test: /\.p(ost)?css$/,
				oneOf: [
					{
						resourceQuery: /module/,
						use: commonCssLoader
					}, {
						resourceQuery: /\?vue/,
						use: commonCssLoader
					}, {
						test: /\.module\.\w+$/,
						use: commonCssLoader
					}, {
						use: commonCssLoader
					}
				]
			},
			// 处理less资源
			{
				test: /\.less$/,
				oneOf: [
					{
						resourceQuery: /module/,
						use: lessLoader
					}, {
						resourceQuery: /\?vue/,
						use: lessLoader
					}, {
						test: /\.module\.\w+$/,
						use: lessLoader
					}, {
						use: lessLoader
					}
				]
			},
			// 处理sass/scss资源
			{
				test: /\.(sass|scss)$/,
				oneOf: [
					{
						resourceQuery: /module/,
						use: sassLoader
					}, {
						resourceQuery: /\?vue/,
						use: sassLoader
					}, {
						test: /\.module\.\w+$/,
						use: sassLoader
					}, {
						use: sassLoader
					}
				]
			},
			// 处理stylus资源
			{
				test: /\.styl(us)?$/,
				oneOf: [
					{
						resourceQuery: /module/,
						use: stylusLoader
					}, {
						resourceQuery: /\?vue/,
						use: stylusLoader
					}, {
						test: /\.module\.\w+$/,
						use: stylusLoader
					}, {
						use: stylusLoader
					}
				]
			},

			/*
			 正常来讲，一个文件只能被一个loader处理。
			 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
			 先执行eslint 在执行babel
			 */
			{
				// 在package.json中eslintConfig --> airbnb
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				// 优先执行
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					fix: false
				}
			},
			// 处理js资源
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'thread-loader'
					}, {
						loader: 'babel-loader',
					}
				]
			},
			// 处理ts资源
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'thread-loader'
					}, {
						loader: 'babel-loader'
					}, {
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							appendTsSuffixTo: ['\\.vue$'],
							happyPackMode: true
						}
					}
				]
			},
		]
	},
	resolve: {
		extensions: config.extensions,
		alias: config.alias,
	}
};

// 开发环境加入图片处理
if (!is_prod) {
	base_config.module.rules.push({ // 处理图片资源
		test: /\.(bmp|png|jpe?g|gif|webp|svg)(\?.*)?$/,
			// webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：
			type: 'asset',
			parser: {
				dataUrlCondition: {
					maxSize: 8 * 1024 // 小于 8kb 的文件，将会视为 inline（url-loader） 模块类型，否则会被视为 resource(file-loader) 模块类型。
				}
			},
			generator: {
				filename: `${config.staticResources_name}/images/[name].[hash:8][ext]`
			}
		});
}

module.exports = base_config;
