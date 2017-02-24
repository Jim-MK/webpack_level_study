var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
      	test: /\.css$/,
      	loader: 'style-loader!css-loader?modules!postcss-loader'
      }
    ]
  },
  plugins: [
  	new webpack.LoaderOptionsPlugin({
  		options: {
  			postcss: function() {
  				return [autoprefixer]
  			}
  		},
			devServer: {
				contentBase: './public',
				colors: true,
				historyApiFallback: true,
				inline: true,
        hot: true
			}
  	}),
  	new webpack.BannerPlugin('Copyright Kingdee KaiMa'),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    })
  ],
}