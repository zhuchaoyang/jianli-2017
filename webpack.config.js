var path = require('path');
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = function( env ){
  return {
    entry: path.resolve(__dirname, "src/main.js"),

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },

    devtool: "cheap-eval-source-map",

    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          loader: 'babel-loader',
          exclude: /node_module/
        },
        {
          test: /\.css$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
            publicPath: '/dist'
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
          })
        },
      ]
    },

    plugins: [
      new ExtractTextWebpackPlugin({
        filename: 'bundle.css'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, "src/index.html")
      })
    ],

    devServer: {
      contentBase: path.join(__dirname, "dist"),
      inline: true,
      port: 6060
    }

  }
}
