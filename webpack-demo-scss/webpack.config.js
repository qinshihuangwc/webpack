

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

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
		})
	],

	module : {
		rules : [
			{
				test : /\.js$/,
				use : [
					{
						loader : 'babel-loader',
						options : {
							presets : ['react']
						}
					}
				]
			},

			{
				test : /\.css$/,
				use : [
						'style-loader',
						{
							loader : 'css-loader',
							options : {
								module : true
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
				test : /\.scss$/,
				use : [
						'style-loader',
						{
							loader : 'css-loader',
							options : {
								module : true,
								localIdentName : '[name]-[local]_[hash:base64:6]'
							}
						},
						'sass-loader'
				],
				exclude : [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},

			{
				test : /\.scss$/,
				use : ['style-loader','css-loader','sass-loader'],
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
		port : 8880,
		open : true
	}
	
}