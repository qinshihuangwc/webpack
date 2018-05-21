
const HtmlWebpackPlugn = require('html-webpack-plugin');

const path = require('path');

module.exports = {

	entry : './src/app.js',
	output : {
		path : path.resolve(__dirname,'dist'),
		filename: 'app.js'
	},
	plugins : [
		new HtmlWebpackPlugn({
			filename : 'index.html',
			tempalte : 'src/index.html'
		})
	],
	module : {
		rules : [{
			test : /\.js$/,
			use : [{
				loader : 'babel-loader',
				options : {
					presets : ['react']
				}
			}]
		}]
	}

}