const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', //'development',
  entry: {
    home: './src/index.js'
  },
  watch: true,
  watchOptions: { // 监控的选项
    poll: 1000, // 监听频率
    aggregateTimeout: 500, // 防抖， 停止输入之后500毫秒更新一次
    ignored: /node_modules/ // 不需要监听的文件夹
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
    })
  ]
}