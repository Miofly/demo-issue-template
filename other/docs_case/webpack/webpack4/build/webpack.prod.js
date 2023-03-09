const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');
const BrotliPlugin = require('brotli-webpack-plugin');
const config = require('./config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pro__base_config = {
	mode: 'production',
	devtool: false, // 'source-map'
	output: { // 为了防止浏览器缓存加入[contenthash],
		publicPath: 'http://localhost:63342/vue-cli-tempalte/dist/',
		filename: `${config.staticResources_name}/js/[name].js`,
		// filename: `${config.staticResources_name}/js/[name].[contenthash:8].js`,
		chunkFilename: `${config.staticResources_name}/js/[name].[contenthash:8].bundle.js`, // 动态导入 分离bundle 比如lodashjs配合注释import(/* webpackChunkName: "lodash" */ 'lodash') 会打包成lodash.bundle.js
		path: path.resolve(__dirname, '../dist'), // 打包输出的路径
		// 告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项默认值是 false，
		// 并且不应该用于生产环境(production)，但是对阅读开发环境(development)中的生成代码(generated code)极其有用。
		pathinfo: false
	},
	performance: { // 性能
		hints: 'warning', // 打开/关闭性能提示 false/error
		maxEntrypointSize: 250000, // 入口文件超过多大时提示性能问题
		maxAssetSize: 250000 // asset 超过多少时提示性能问提
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
		name: 'demo'
	},
	plugins: [
		new CleanWebpackPlugin(), // 清除之前打包的文件

		// eslint-disable-next-line array-element-newline
		// 打包CSS成单独的文件
		new MiniCssExtractPlugin({
			filename: `${config.staticResources_name}/css/[name].[contenthash:8].css`,
			chunkFilename: `${config.staticResources_name}/css/[name].[contenthash:8].css`
		}), new FriendlyErrorsPlugin() // 构建日志优化提示
	],
	module: {
		rules: []
	},
	optimization: {
		runtimeChunk: false,
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
					parallel: true // 使用多进程并发执行，提升构建速度
					// minimizerOptions: { // w5自动去除了注释（尚未知原因）
					// 	preset: [
					// 		'default',
					// 		{
					// 			discardComments: {removeAll: true}, // 移除注释
					// 		},
					// 	],
					// },

				}), new TerserPlugin({
					terserOptions: {
						format: {
							comments: false
						},
						compress: {
							drop_console: false // 去除日志
						}
						// mangle: {
						// 	safari10: true
						// },
					},
					parallel: true, // 使用多进程并发运行以提高构建速度
					extractComments: false // 是否将注释剥离到单独的文件中
				})
		]
	}
};

if (config.is_img_compress) {
	pro__base_config.module.rules.push({
		test: /\.(bmp|png|jpe?g|gif|webp|svg)(\?.*)?$/, // 处理图片资源
		// webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：
		type: 'asset',
		parser: {
			dataUrlCondition: {
				maxSize: 8 * 1024 // 小于 8kb 的文件，将会视为 inline（url-loader） 模块类型，否则会被视为 resource(file-loader) 模块类型。
			}
		},
		generator: {
			filename: `${config.staticResources_name}/images/[name].[hash:8][ext]`
		},
		use: [
			{
				loader: 'image-webpack-loader',
				options: {
					mozjpeg: {
						quality: 75,
						progressive: true
					},
					pngquant: {
						quality: [0.65, 0.90],
						speed: 4
					},
					gifsicle: {
						interlaced: false
					}
				}
			}
		]
	});
} else {
	pro__base_config.module.rules.push({ // 处理图片资源
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
if (config.is_gzip) {
	pro__base_config.plugins.push(new CompressionWebpackPlugin({
		test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
		threshold: 1, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
		deleteOriginalAssets: false, // 是否删除原文件
		algorithm (input, compressionOptions, callback) {
			return zopfli.gzip(input, compressionOptions, callback);
		},
		minRatio: 0.8
	}));
}
if (config.is_brotli) {
	pro__base_config.plugins.push(new BrotliPlugin({
		test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
		minRatio: 0.99
	}));
}
if (config.is_externals) {
	pro__base_config.plugins.push(new HtmlWebpackExternalsPlugin({ // 配置cdn引入
		externals: config.externals
	}));
}
if (config.is_analyze) {
	pro__base_config.plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'server', // 在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
		analyzerHost: '127.0.0.1',
		analyzerPort: 3000,
		defaultSizes: 'parsed', // 模块大小默认显示在报告中。应该是`stat`，`parsed`或者`gzip`中的一个。
		openAnalyzer: false, // 在默认浏览器中自动打开报告
		logLevel: 'info' // 日志级别
	}));
}

module.exports = merge(common, pro__base_config);
