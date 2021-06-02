const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	},
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js'
	},
	module: {
		rules: [{
			test: /\.[tj]sx?$/,
			use: ['ts-loader']
		},
		{
			test: /\.css$/,
			use: [
			    'style-loader', 
			    {
                    loader:'css-loader',
                    options: {
                        modules: {
                            mode: 'local', 
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                }
			],
			exclude: GLOBAL_CSS_REGEXP
		},
		{
			test: GLOBAL_CSS_REGEXP,
			use: ['style-loader', 'css-loader']
		},
		{
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }
		]
	},
	plugins: [
	    new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
	],
	devServer: {
		port: 5000,
		open: true,
		hot: true
	}
}