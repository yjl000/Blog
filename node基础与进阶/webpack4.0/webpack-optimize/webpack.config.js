const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    contentBase: './dist'
  },
  module: {
    noParse: /jquery/, // 不去解析jquery的依赖库
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/, // 不包含这个路径下的js
        include: path.resolve('src'), // 仅包含该目录下的js
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.IgnorePlugin(/\.\/locale/, /moment/), // 不引入moment插件下的local路径下的内容（语言包）
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.NamedModulesPlugin(), // 打印更新的模块路径
    new webpack.HotModuleReplacementPlugin() // 热更新插件
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // })
  ]
}