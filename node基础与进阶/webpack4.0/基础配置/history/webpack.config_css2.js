// webpack 是node写出来的，用node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let  OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  devServer: { // 开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: './dist'
  },
  optimization: { // 优化项
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCssAssetsWebpackPlugin({})
    ]
  },
  mode: 'production',//'development', // 默认两种模式 production， development
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名(每次生成有8位哈希值的js文件)
    path: path.resolve(__dirname, 'dist'), // 路径必须是绝对路径
  },
  plugins: [ // 数组，放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: { // 最小化
        removeAttrributeQuotes: true, // 去掉引号
        collapseWhitespace: true, // 变成单行（去掉空格）
      },
      hash: true, // 添加哈希值
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: { // 模块
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [require('autoprefixer')]
          //   }
          // }
          
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader', // 把less转成css
          'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [require('autoprefixer')]
          //   }
          // }
        ]
      }
    ]
  }
}