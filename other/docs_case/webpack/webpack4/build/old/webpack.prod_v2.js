const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackbar = require("webpackbar"); // 进度条


const staticResources_name = './static'

// 复用loader
const commonCssLoader = [
	MiniCssExtractPlugin.loader,
	{
		loader: 'css-loader',
		options: {
			sourceMap: false, // sourceMap 的生成取决于 devtool 选项
			importLoaders: 2 // 启用/禁用或设置在CSS加载程序之前应用的加载程序的数量。
		}
	},
	{
		loader: 'postcss-loader',
		options: {
			sourceMap: false,
			config: {
				path: path.resolve(__dirname, '../postcss.config.js'),
			}
		}
	}
]

// less loader
const lessLoader = [...commonCssLoader,
	{
		loader: 'less-loader',
		options: {
			sourceMap: false
		}
	}
]

// sass loader
const sassLoader = [...commonCssLoader,
	{
		loader: 'sass-loader',
		options: {
			sourceMap: false
		}
	}
]

// stylus loader
const stylusLoader = [...commonCssLoader,
	{
		loader: 'stylus-loader',
		options: {
			sourceMap: false,
			preferPathResolver: 'webpack'
		}
	}
]

module.exports = env => {
	let pro__base_config = {
		mode: 'production',
		devtool: false, // 'source-map'
		output: { // 为了防止浏览器缓存加入[contenthash],
			publicPath: 'http://localhost:63342/vue-cli-mio/dist/',
			filename: `${staticResources_name}/js/[name].[contenthash:8].js`,
			chunkFilename: `${staticResources_name}/js/[name].[contenthash:8].bundle.js`, // 动态导入 分离bundle 比如lodashjs配合注释import(/* webpackChunkName: "lodash" */ 'lodash') 会打包成lodash.bundle.js
			path: path.resolve(__dirname, '../dist'), // 打包输出的路径
		},
		/**
		 * @Description: cache
		 * @author wfd
		 * @date 2021/3/31 22:41
		 * @detail
		 * 1. 缓存生成的 webpack 模块和 chunk，来改善构建速度。
		 * 2. cache 会在开发 模式被设置成 type: 'memory' 而且在 生产 模式 中被禁用。
		 * 3. cache: true 与 cache: { type: 'memory' } 配置作用一致。 传入 false 会禁用缓存
		 * 4. 无论是否设置 cache 配置，Webpack 5 都将忽略各插件的缓存设置（例如 TerserWebpackPlugin, cache-loader 与 bable-loder 中的缓存设置）
		 * 5. 生产环境是否需要？频繁打包可以使用或公共文件很多（但公共文件很少改动），不频繁设置为 false
		 * 6. 实测 第二次打包速度较第一次快90%（在无改动或者改动很小的情况），node15 要比 node 10 快 3s左右
		 */
		cache: {
			type: 'filesystem',
			// cache.cacheDirectory 选项仅当 cache.type 被设置成 filesystem 才可用。
			cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/webpack'),
			// 缓存的名称。不同的名字会导致不同的的共存的缓存。默认值为 ${config.name}-${config.mode}。
			// 使用 cache.name 当你有多份配置的时候，是比较合理的因为会有配置会有独立的缓存。
			name: 'demo',
		},
		plugins: [
			new webpackbar(), // 打包时美化进度条

			new BundleAnalyzerPlugin({
				analyzerMode: 'server', // 在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
				analyzerHost: '127.0.0.1',
				analyzerPort: 3000,
				defaultSizes: 'parsed', // 模块大小默认显示在报告中。应该是`stat`，`parsed`或者`gzip`中的一个。
				openAnalyzer: false, // 在默认浏览器中自动打开报告
				logLevel: 'info' // 日志级别
			}),

			new CleanWebpackPlugin(), // 清除之前打包的文件

			// 打包CSS成单独的文件
			new MiniCssExtractPlugin({
				filename: `${staticResources_name}/css/[name].[contenthash:8].css`,
				chunkFilename: `${staticResources_name}/css/[name].[contenthash:8].css`
			}),

			new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: '"production"',
						BASE_URL: '"/"'
					}
				}
			),
			// new webpack.HashedModuleIdsPlugin(
			// 	{
			// 		hashDigest: 'hex'
			// 	}
			// ),

			// new webpack.NamedChunksPlugin(
			// 	function () { /* omitted long function */ }
			// ),

			// new PreloadPlugin(
			// 	{
			// 		rel: 'preload',
			// 		include: 'initial',
			// 		fileBlacklist: [
			// 			/\.map$/,
			// 			/hot-update\.js$/
			// 		]
			// 	}
			// ),
			// /* config.plugin('prefetch') */
			// new PreloadPlugin(
			// 	{
			// 		rel: 'prefetch',
			// 		include: 'asyncChunks'
			// 	}
			// ),
			// /* config.plugin('copy') */
			// new CopyPlugin(
			// 	[
			// 		{
			// 			from: '/Users/miofly/Documents/mio/tools/vue-cli-demo/public',
			// 			to: '/Users/miofly/Documents/mio/tools/vue-cli-demo/dist',
			// 			toType: 'dir',
			// 			ignore: [
			// 				'.DS_Store',
			// 				{
			// 					glob: 'index.html',
			// 					matchBase: false
			// 				}
			// 			]
			// 		}
			// 	]
			// ),
			// /* config.plugin('fork-ts-checker') */
			// new ForkTsCheckerWebpackPlugin(
			// 	{
			// 		vue: {
			// 			enabled: true,
			// 			compiler: 'vue-template-compiler'
			// 		},
			// 		tslint: false,
			// 		formatter: 'codeframe',
			// 		checkSyntacticErrors: true
			// 	}
			// )

			// new PurgecssPlugin({ // 去除没用到的css
			//     paths: glob.sync(path.join(__dirname, '../src/index.html')) // src下所有的html
			// }),
		],
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
				// 处理图片资源
				{
					test: /\.(bmp|png|jpe?g|gif|webp|svg)(\?.*)?$/,
					// webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：
					type: 'asset',
					parser: {
						dataUrlCondition: {
							maxSize: 8 * 1024 // 小于 8kb 的文件，将会视为 inline（url-loader） 模块类型，否则会被视为 resource(file-loader) 模块类型。
						}
					},
					generator: {
						filename: `${staticResources_name}/images/[name].[hash:8][ext]`
					},
					use: [
						{
							loader: 'image-webpack-loader',
							options: {
								mozjpeg: {
									quality: 75,
									progressive: true,
								},
								pngquant: {
									quality: [0.65, 0.90],
									speed: 4
								},
								gifsicle: {
									interlaced: false,
								},
							},
						},
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
						filename: `${staticResources_name}/media/[name].[hash:8][ext]`
					}
				},
				// 处理字体资源
				{
					test: /\.(eot|ttf|woff|woff2?)$/,
					type: 'asset/resource', // 相当于 file-loader
					generator: {
						filename: `${staticResources_name}/font/[name].[hash:8][ext]`
					}
				},
				// 处理css资源
				{
					test: /\.css$/,
					oneOf: [
						{
							resourceQuery: /module/,
							use: commonCssLoader
						},
						{
							resourceQuery: /\?vue/,
							use: commonCssLoader
						},
						{
							test: /\.module\.\w+$/,
							use: commonCssLoader
						},
						{
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
						},
						{
							resourceQuery: /\?vue/,
							use: commonCssLoader
						},
						{
							test: /\.module\.\w+$/,
							use: commonCssLoader
						},
						{
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
						},
						{
							resourceQuery: /\?vue/,
							use: lessLoader
						},
						{
							test: /\.module\.\w+$/,
							use: lessLoader
						},
						{
							use: lessLoader
						}
					]
				},
				// 处理scss资源
				{
					test: /\.scss$/,
					oneOf: [
						{
							resourceQuery: /module/,
							use: sassLoader
						},
						{
							resourceQuery: /\?vue/,
							use: sassLoader
						},
						{
							test: /\.module\.\w+$/,
							use: sassLoader
						},
						{
							use: sassLoader
						}
					]
				},
				// 处理sass资源
				{
					test: /\.sass$/,
					oneOf: [
						{
							resourceQuery: /module/,
							use: sassLoader
						},
						{
							resourceQuery: /\?vue/,
							use: sassLoader
						},
						{
							test: /\.module\.\w+$/,
							use: sassLoader
						},
						{
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
						},
						{
							resourceQuery: /\?vue/,
							use: stylusLoader
						},
						{
							test: /\.module\.\w+$/,
							use: stylusLoader
						},
						{
							use: stylusLoader
						}
					]
				},
				// 处理js资源
				/*
				 js兼容性处理：babel-loader @babel/core
				 1. 基本js兼容性处理 --> @babel/preset-env
				 问题：只能转换基本语法，如promise高级语法不能转换
				 2. 全部js兼容性处理 --> @babel/polyfill
				 问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
				 3. 需要做兼容性处理的就做：按需加载  --> core-js
				 */
				{
					test: /\.m?jsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'thread-loader'
						},
						{
							loader: 'babel-loader',
							options: {
								// 预设：指示babel做怎么样的兼容性处理
								// presets: [
								// 	[
								// 		'@babel/preset-env',
								// 		{
								// 			// 按需加载
								// 			useBuiltIns: 'usage',
								// 			// 指定core-js版本
								// 			corejs: {
								// 				version: 3
								// 			},
								// 			// 指定兼容性做到哪个版本浏览器
								// 			targets: {
								// 				chrome: '60',
								// 				firefox: '60',
								// 				ie: '9',
								// 				safari: '10',
								// 				edge: '17'
								// 			}
								// 		}
								// 	]
								// ]
							}
						}
					]
				},
				// 处理ts资源
				{
					test: /\.ts$/,
					use: [
						{
							loader: 'thread-loader'
						},
						{
							loader: 'babel-loader'
						},
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
								appendTsSuffixTo: [
									'\\.vue$'
								],
								happyPackMode: true
							}
						}
					]
				},
				// 处理tsx资源
				{
					test: /\.tsx$/,
					use: [
						{
							loader: 'thread-loader'
						},
						{
							loader: 'babel-loader'
						},
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
								happyPackMode: true,
								appendTsxSuffixTo: [
									'\\.vue$'
								]
							}
						}
					]
				}
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					// 分割chunk的组
					// node_modules文件会被打包到 vendors 组的chunk中。--> vendors~xxx.js
					vendors: {
						name: 'chunk-vendors',
						test: /[\\/]node_modules[\\/]/,
						priority: -10, // 优先级
						chunks: 'initial'
					},
					common: {
						name: 'chunk-common',
						minChunks: 2, // 要提取的chunk最少被引用2次
						priority: -20,
						chunks: 'initial',
						// 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
						reuseExistingChunk: true
					}
				}
			},
			// 允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)。
			minimizer: [
				// w5 中用来替代 optimize-css-assets-webpack-plugin 优化压缩 css
				new CssMinimizerPlugin({
						parallel: true, // 使用多进程并发执行，提升构建速度
						// minimizerOptions: { // w5自动去除了注释（尚未知原因）
						// 	preset: [
						// 		'default',
						// 		{
						// 			discardComments: {removeAll: false}, // 移除注释
						// 		},
						// 	],
						// },
					}
				),
				new TerserPlugin({
						// minify: (file, sourceMap) => { // 自定义压缩函数
						// 	// https://github.com/mishoo/UglifyJS2#minify-options
						// 	const uglifyJsOptions = {
						// 		/* your `uglify-js` package options */
						// 	};
						//
						// 	if (sourceMap) {
						// 		uglifyJsOptions.sourceMap = {
						// 			content: sourceMap,
						// 		};
						// 	}
						//
						// 	return require("uglify-js").minify(file, uglifyJsOptions);
						// },
						terserOptions: {
							format: {
								comments: false,
							},
							compress: {
								drop_console: true,
								arrows: false,
								collapse_vars: false,
								comparisons: false,
								computed_props: false,
								hoist_funs: false,
								hoist_props: false,
								hoist_vars: false,
								inline: false,
								loops: false,
								negate_iife: false,
								properties: false,
								reduce_funcs: false,
								reduce_vars: false,
								switches: false,
								toplevel: false,
								typeofs: false,
								booleans: true,
								if_return: true,
								sequences: true,
								unused: true,
								conditionals: true,
								dead_code: true,
								evaluate: true
							},
							mangle: {
								safari10: true
							},
						},
						parallel: true, // 使用多进程并发运行以提高构建速度
						extractComments: false // 是否将注释剥离到单独的文件中
					}
				)
			]
		},
	};
	if (env && env.analyzer) {
		pro__base_config.plugins.push(new ManifestPlugin())  // 展示源代码和打包代码映射关系
	}
	return merge(common(env), pro__base_config)  // 合并配置
}
