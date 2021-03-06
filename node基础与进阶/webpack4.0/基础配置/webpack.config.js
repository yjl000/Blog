// webpack 是node写出来的，用node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let  OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let webpack = require('webpack');
module.exports = {
  devServer: { // 开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: './dist'
  },
  mode: 'development',//'development', // 默认两种模式 production， development
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名(每次生成有8位哈希值的js文件)
    path: path.resolve(__dirname, 'dist'), // 路径必须是绝对路径
    // publicPath: 'http://localhost:3000'
  },
  plugins: [ // 数组，放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: { // 最小化
        // removeAttrributeQuotes: false, // 去掉引号
        // collapseWhitespace: false, // 变成单行（去掉空格）
      },
      hash: false, // 添加哈希值
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new webpack.ProvidePlugin({ // 在每个模块中注入$
      $: 'jquery',
    })
  ],
  module: { // 模块
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-withimg-loader'
          }
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         esModule: false,
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          { // 设置限制，当图片小于多少k时，转为base64，否则按file-loader生成
            loader: 'url-loader',
            options: {
              limit: 1,
              esModule: false,
              outputPath: '/img/',
              publicPath: 'http://localhost:3000'
            }
          }
        ]
      },
      {
        test: /\.js$/, // normal
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader', // 把less转成css
          'postcss-loader'
        ]
      }
    ]
  }
}