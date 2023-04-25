const webpack                    = require( 'webpack' )
const path                       = require( 'path' )
const HtmlWebpackPlugin          = require( 'html-webpack-plugin' )
const UglifyJsPlugin             = require( 'uglifyjs-webpack-plugin' )
const MiniCssExtractPlugin       = require( 'mini-css-extract-plugin' )
const CssMinimizerPlugin         = require( 'css-minimizer-webpack-plugin' )
const ScriptExtHtmlWebpackPlugin = require( 'script-ext-html-webpack-plugin' )
const SpeedMeasurePlugin         = require( 'speed-measure-webpack-plugin' )
const CopyPlugin                 = require( 'copy-webpack-plugin' )
const smp                        = new SpeedMeasurePlugin( {
	disable: false
} )

const variables              = require( './variables.js' )
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )

const browserListDev  = [
	'last 1 version'
]
const browserListProd = [
	'>0.0001%'
]

module.exports = ( env, mode ) => {

	console.clear()
	console.log( 'Current mode:', mode.mode )

	const devMode = mode.mode !== 'production'

	const config = {
		entry: './src/index.js',
		output: {
			filename: devMode ? 'assets/js/bundle.dev.[hash:8].js' : 'assets/js/bundle.prod.[hash:8].js',
			path: path.resolve( __dirname, 'dist' ),
			publicPath: '/'
		},
		resolve: {
			extensions: [ '.js' ],
		},
		// mode: mode.mode,
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						'babel-loader'
					],
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '/',
								esModule: true,
								modules: {
									namedExport: true
								}
							}
						},
						{
							loader: 'css-loader',
							options: {
								esModule: true,
								modules: {
									namedExport: true,
									localIdentName: '[local]'
								}
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										require( 'autoprefixer' )( {
											'overrideBrowserslist': devMode ? browserListDev : browserListProd,
											cascade: false
										} )
									]
								}
							}
						}
					]
				},
				{
					test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: devMode ? '[name].[ext]' : 'assets/fonts/[hash:8].[ext]'
							}
						}
					]

				},
				{
					test: /\.(mp4)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: devMode ? '[name].[ext]' : 'assets/video/[hash:8].[ext]'
							}
						}
					]
				},
				{
					test: /\.(png|jp(e*)g|svg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: devMode ? '[name].[ext]' : 'assets/images/[hash:8].[ext]'
							}
						}
					]
				}
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						chunks: 'all',
						name: 'vendor',
						test: 'vendor',
						enforce: true
					}
				}
			},
			runtimeChunk: true,
			minimize: !devMode,
			minimizer: [
				new CssMinimizerPlugin( {
					parallel: 8,
					minimizerOptions: {
						preset: [
							'default',
							{
								discardComments: { removeAll: true }
							}
						]
					}
				} ),
				new UglifyJsPlugin( {
					test: /\.js$/,
					exclude: /node_modules/,
					uglifyOptions: {
						ie8: true,
						mangle: true,
						compress: {
							drop_console: true,
							sequences: true,  // join consecutive statemets with the “comma operator”
							properties: true,  // optimize property access: a["foo"] → a.foo
							dead_code: true,  // discard unreachable code
							drop_debugger: true,  // discard “debugger” statements
							unsafe: false, // some unsafe optimizations (see below)
							conditionals: true,  // optimize if-s and conditional expressions
							comparisons: true,  // optimize comparisons
							evaluate: true,  // evaluate constant expressions
							booleans: true,  // optimize boolean expressions
							loops: true,  // optimize loops
							unused: true,  // drop unused variables/functions
							hoist_funs: true,  // hoist function declarations
							hoist_vars: true, // hoist variable declarations
							if_return: true,  // optimize if-s followed by return/continue
							join_vars: true,  // join var declarations
							side_effects: true  // drop side-effect-free statements
						},
						parallel: 8,
						output: {
							comments: false
						}
					}
				} )
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin( {
				template: './src/index.html',
				variables: {
					mode: mode.mode,
					...variables
				},
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true
				}
			} ),
			new ScriptExtHtmlWebpackPlugin( {
				defaultAttribute: 'defer'
			} ),
			new CopyPlugin( {
				patterns: [
					{
						from: path.resolve( __dirname, 'src/static/' ),
						to: path.resolve( __dirname, 'dist/' )
					}
				]
			} ),
			new MiniCssExtractPlugin( {
				filename: devMode ? 'assets/css/bundle.dev.[hash:8].css' : 'assets/css/bundle.[hash:8].css'
			} ),
			new webpack.HashedModuleIdsPlugin( {
				hashFunction: 'md5',
				hashDigest: 'base64',
				hashDigestLength: 8
			} )
		],
		devServer: {
			overlay: true,
			compress: true,
			// host: '192.168.31.165',
			port: 3000,
			https: true,
			open: true
		}
		// devtool: 'eval'
	}

	return smp.wrap( config )
}