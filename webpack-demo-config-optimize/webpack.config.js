

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {

	entry : './src/app.js',

	output : {
		path : path.resolve(__dirname, 'dist/assets'),
		filename : 'app.js'
	},

	plugins : [
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template : 'src/index.html'
		})
	],

	module : {
		rules : [
			{
				test : /\.js$/,
				use : [
					{
						loader : 'babel-loader'/*,
						options : {
							presets : ['react']
						}*/
					}
				],
				exclude : [path.resolve(__dirname, 'node_modules')]
			},

			{
				test : /\.css$/,
				use : [
						'style-loader',
						{
							loader : 'css-loader',
							options : {
								module : true,
								localIdentName : '[name]-[local]_[hash:base64:6]'
							}
						}
				],
				exclude : [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},

			{
				test : /\.css$/,
				use : ['style-loader','css-loader'],
				include : [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},

			{
				test : /\.(jpg|gif|png)$/,
				use : [
					{
						loader : 'url-loader',
						options : {
							limit : 1000
						}
					}
				]
			},

			{
				test : /\.(eot|ttf|woff|woff2|svg)$/,
				use : ['file-loader']
			}
			
		]
	},

	devServer : {
		port : 9000,
		open : true
	}
	
}