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
  devServer: {
    // 1.代理服务器
    // proxy: {
    //   // '/api': 'http://localhost:3000', // 配置代理
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {'api': ''}
    //   }
    // }

    // 2.前端mock数据
    // before(app) { // webpack提供的钩子方法
    //   app.get('/user', (req, res) => {
    //     res.json({name: 'kenyangbefore'})
    //   })
    // }

    // 3 有服务端，不用代理，在服务端中启用webpack, 端口用服务器端口 在server.js启动webpack

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
    new webpack.BannerPlugin('make 2020 by ken')
  ]
}