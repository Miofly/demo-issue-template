const webpack = require('webpack');
const path = require('path');
const vendors = ['vue'];

module.exports = {
	mode: 'production',
	entry: {
		'vendor': vendors
	},
    output: {
        path: path.join(__dirname, '../dll'),
        filename: '[name].dll.js',
        library: '[name]_library',
		// 打包时，在包中不包含所属模块的信息的注释
		pathinfo: false
	},
    plugins: [
        new webpack.DllPlugin({
			// 定义 manifest 文件生成的位置
            path: path.join(__dirname, '../dll', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
};
