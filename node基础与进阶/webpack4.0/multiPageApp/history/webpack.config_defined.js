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
  resolve: { // 解析第三方包 common
    modules: [path.resolve('node_modules')],
    // alias: { // 别名
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css'
    // },
    // mainFields: ['style', 'main'], // 主入口
    // mainFile: [], // 入口文件的名字
    extensions: ['.js', '.css', '.json', '.vue'] // 自动添加的后缀名, 从前往后寻找
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
    new webpack.DefinePlugin({
      DEV: JSON.stringify('dev'),
      FLAG: 'true',
      EXPORESSION:JSON.stringify('1+1')
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('make 2020 by ken')
  ]
}