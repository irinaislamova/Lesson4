const path = require('path');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';

const { DefinePlugin } = require('webpack');
// const DEV_PLUGINS = [
//     new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
// ];
// const COMMON_PLUGINS = [
//     new DefinePlugin(
//     {'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`}
//     )    
// ]

function setupDevtool() {
	if (IS_PROD) {
		return false;
	}
	if (IS_DEV) {
		return 'eval';
	}
	return 'eval';
}

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	},
	entry: path.resolve(__dirname, '../src/client/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js'
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
	devtool: setupDevtool(),
}