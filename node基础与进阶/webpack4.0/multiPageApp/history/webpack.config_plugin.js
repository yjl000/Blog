const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
// 1、cleanWepackPlugin
// 2、copyWebpackPlugin
// 3、bannerPlugin 内置
module.exports = {
  mode: 'production', //'development',
  entry: {
    home: './src/index.js'
  },
  output: {
    // [name]:home,other
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'doc', to: './'}
      ]
    }),
    new webpack.BannerPlugin('make 2020 by ken')
  ]
}