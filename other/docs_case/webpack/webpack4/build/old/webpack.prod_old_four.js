const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const staticResources_name = ''

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
			publicPath: '',
			filename: 'assets/js/[name].[contenthash:8].js',
			chunkFilename: 'assets/js/[name].[contenthash:8].bundle.js', // 动态导入 分离bundle 比如lodashjs配合注释import(/* webpackChunkName: "lodash" */ 'lodash') 会打包成lodash.bundle.js
			path: path.resolve(__dirname, '../dist'), // 打包输出的路径
		},
        plugins: [
            new CleanWebpackPlugin(), // 清除之前打包的文件

			// 打包CSS成单独的文件
			new MiniCssExtractPlugin({
				filename: `${staticResources_name}/css/[name].[contenthash:8].css`,
				chunkFilename: `${staticResources_name}/css/[name].[contenthash:8].css`
			}),

			// 用于优化或者压缩CSS资源
			new OptimizeCSSAssetsPlugin(
				{
					sourceMap: false,
					cssnanoOptions: {
						preset: [
							'default',
							{
								mergeLonghand: false,
								cssDeclarationSorter: false
							}
						]
					}
				}
			),

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
				// 处理图片资源
				{
					test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8 * 1024, // 小于 8K 转base64
								// 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
								// 解析时会出问题：[object Module]
								// 解决：关闭url-loader的es6模块化，使用commonjs解析
								esModule: false,
								fallback: { // 指定一个 loader 来处理大于 limit 的文件
									loader: 'file-loader',
									options: {
										name: `${staticResources_name}/img/[name].[hash:10].[ext]`
									}
								}
							}
						},
					]
				},
				// 处理 svg 资源
				{
					test: /\.(svg)(\?.*)?$/, //
					use: [
						{
							loader: 'file-loader',
							options: {
								name: `${staticResources_name}/img/[name].[hash:8].[ext]`
							}
						}
					]
				},
				// 处理多媒体资源
				{
					test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit:  8 * 1024,
								fallback: {
									loader: 'file-loader',
									options: {
										name: `${staticResources_name}/media/[name].[hash:8].[ext]`
									}
								}
							}
						}
					]
				},
				// 处理字体资源
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8 * 1024,
								fallback: {
									loader: 'file-loader',
									options: {
										name: `${staticResources_name}/fonts/[name].[hash:8].[ext]`
									}
								}
							}
						}
					]
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
							loader: 'cache-loader',
							options: {
								cacheDirectory: 'babel-loader',
								cacheIdentifier: 'bf6c8644'
							}
						},
						{
							loader: 'thread-loader'
						},
						{
							loader: 'babel-loader',
							options: {
								// 开启babel缓存
								// 第二次构建时，会读取之前的缓存
								cacheDirectory: true,
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
						/* config.module.rule('ts').use('cache-loader') */
						{
							loader: 'cache-loader',
							options: {
								cacheDirectory: '//node_modules/.cache/ts-loader',
								cacheIdentifier: '8d9f1be8'
							}
						},
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
							loader: 'cache-loader',
							options: {
								cacheDirectory: '//node_modules/.cache//ts-loader',
								cacheIdentifier: '8d9f1be8'
							}
						},
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
					vendors: {
						name: 'chunk-vendors',
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						chunks: 'initial'
					},
					common: {
						name: 'chunk-common',
						minChunks: 2,
						priority: -20,
						chunks: 'initial',
						reuseExistingChunk: true
					}
				}
			},
			minimizer: [
				/* config.optimization.minimizer('terser') */
				new TerserPlugin(
					{
						terserOptions: {
							compress: {
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
							}
						},
						sourceMap: true,
						cache: true,
						parallel: true,
						extractComments: false
					}
				)
			]
		},
    }
    if (env && env.analyzer) {
        pro__base_config.plugins.push(new BundleAnalyzerPlugin()) // 打包体积分析
        pro__base_config.plugins.push(new ManifestPlugin())  // 展示源代码和打包代码映射关系
    }
    return merge(common(env), pro__base_config)  // 合并配置
}
