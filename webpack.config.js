var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry:'./src/app.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'js/[name].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve(__dirname,'/node_modules/'),
				include:path.resolve(__dirname,'/src/'),
				query:{
					presets:['latest']
				}
			},
			{
				test:/\.css$/,
				exclude: /node_modules/,
				// loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
				use:[
					'style-loader',
					{
						loader:'css-loader',
						options:{
							importLoaders:1
						}
					},
					{
						loader:'postcss-loader'
					}
				]
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!postcss-loader!less-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!postcss-loader!sass-loader'
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.tpl$/,
				loader:'ejs-loader'
			},
			// {
			// 	test:/\.(png|jpg|gif|svg)$/i,
			// 	loader:'file-loader',
			// 	query:{
			// 		name:'assets/[name]-[hash:5].[ext]'
			// 	}
			// }
			// {
			// 	test:/\.(png|jpg|gif|svg)$/i,
			// 	loader:'url-loader',
			// 	query:{
			// 		limit:50000,
			// 		name:'assets/[name]-[hash:5].[ext]'
			// 	}
			// }
			{
				test:/\.(png|jpg|gif|svg)$/i,
				loaders:[
					'url-loader?limit=20000&name=assets/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	// postcss:[
	// 	require('autoprefixer')({
	// 		broswers:['last 5 versions']
	// 	})
	// ],
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body',
			title:'wabpack is good'
		})
	]
}