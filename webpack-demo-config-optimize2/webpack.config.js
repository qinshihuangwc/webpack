

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

	entry : './src/app.js',

	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : 'app.js'
	},

	plugins : [
		new HtmlWebpackPlugin({
			fielname: 'index.html',
			template : 'src/index.html'
		}),
		new CleanWebpackPlugin(['dist'])
	],

	module : {
		rules : [
			{
				test : /\.js$/,
				use : [
					{
						loader : 'babel-loader'
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
							limit : 1000,
							name : 'img/[name]_[hash:base64:6].[ext]'
						}
					}
				]
			},

			{
				test : /\.(eot|ttf|woff|woff2|svg)$/,
				use : [
					{
						loader : 'file-loader',
						options : {
							name : 'fonts/[name]_[hash:base64:6].[ext]'
						}
					}
				]
			}
			
		]
	},

	devServer : {
		open : true,
		port : 9000
	}
	
}