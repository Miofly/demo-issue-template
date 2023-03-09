const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ip = require('ip');
const webpack = require('webpack');

const port = '8088';

const proxies = ['getCompanyF9Data'].map(p => ({
		[`/${p}`]: {

			/*
			 * Target: 'http://10.15.97.42:8800/finchinaAPP',
			 * target: 'http://10.15.43.1:8800/finchinaAPP',
			 */
			target: 'https://appdev.finchina.com/finchinaAPP',
			changeOrigin: true,
			secure: false
		}
	}));

const proxyObjects = proxies.reduce((obj, proxy) => Object.assign(obj, proxy), {});

const dev_base_config = {
	mode: 'development',
	devtool: 'cheap-module-source-map', // Development 开发环境最优配置
	cache: {
		type: 'memory'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'webpack-zepto',
			Zepto: 'webpack-zepto'
		}),

		// 运行成功，输出信息
		new FriendlyErrorsPlugin({
			// 运行成功提示
			compilationSuccessInfo: {
				messages: [`You application is running here http://${ip.address()}:${port}\r\n`]
			},
			clearConsole: true
		})
	],
	devServer: {
		// ContentBase: path.resolve(__dirname, '../src'), // 项目构建后路径
		compress: true, // 启动gzip压缩
		host: ip.address(),
		port,
		open: true,
		/* eslint-disable */
		openPage: `http://${ip.address()}:${port}?code=1011946340&fin_user=&bondType=&name=%E4%BA%91%E5%8D%97%E7%9C%81%E8%83%BD%E6%BA%90%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&child_type=bondFinancing&type=company&user=20200401165215_15255108671&token=000000&object=`,
		proxy: {
			'/api': {
				target: 'https://appdev.finchina.com/finchinaAPP',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
			'/finchinaAPP': {

				/*
				 * 在所有请求接口前加/finchinaAPP 即可
				 *  target: 'http://10.15.97.30:8800/finchinaAPP',
				 */
				target: 'https://appdev.finchina.com/finchinaAPP',
				secure: true, // 如果是https接口，需要配置这个参数
				changeOrigin: true,
				pathRewrite: {
					'^/finchinaAPP': ''
				}
			},
			...proxyObjects
		}
	}
};

module.exports = merge(common, dev_base_config)
