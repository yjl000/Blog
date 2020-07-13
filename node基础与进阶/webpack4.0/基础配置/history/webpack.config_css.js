// webpack 是node写出来的，用node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devServer: { // 开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: './dist'
  },
  mode: 'development',//'development', // 默认两种模式 production， development
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
    })
  ],
  module: { // 模块
    rules: [ // 规则 css-loader 接续@import这种语法
      // style-loader 把css插入到head的标签中
      // loader的特点 希望单一
      // loader的用法，字符串只用一个loader, 多个loader要用数组
      // loader的顺序，默认是从右向左执行, 从下到上执行
      // loader还可以写成对象方式
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: function insertAtTop(element) {
                var parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;
   
                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }
   
                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element;
              }
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: function insertAtTop(element) {
                var parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;
   
                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }
   
                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element;
              }
            }
          },
          'css-loader',
          'less-loader' // 把less转成css
        ]
      }
    ]
  }
}