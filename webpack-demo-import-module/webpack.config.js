

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
				use : ['style-loader','css-loader']
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