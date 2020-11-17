let path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loader')]
    // 别名
    // alias: {
    //   loader1: path.resolve(__dirname, 'loader', 'loader1')
    // }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          } 
        }
      }
    ]

    // loader的分类pre在前面， post在后面，normal在中间
    // loader默认执行顺序，从右到左，从上到下
    // loader顺序 pre + normal + inline + post
    /*rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'loader1'
        },
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'loader2'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'loader3'
        },
        enforce: 'post'
      }
    ]*/
    // rules: [ 
    //   {
    //     test: /\.js$/,
    //     use: ['loader3','loader2','loader1']
    //   }
    // ]
  }
}