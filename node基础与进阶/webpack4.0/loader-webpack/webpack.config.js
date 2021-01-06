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
    // 获取文件别名
    // alias: {
    //   loader1: path.resolve(__dirname, 'loader', 'loader1')
    // }
  },
  devtool: 'source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.png$/,
        // 根据图片生成一个md5 发射到dist目录，file-loader还会返回当前的图片路径
        // use: 'file-loader'
        // url-loader 处理路径交给file-loader
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024
          }
        }
        
      },
      {
        test: /\.js$/,
        use: {
          loader: 'banner-loader',
          options: {
            text: 'yangjingli',
            filename: path.resolve(__dirname, 'banner.js')
          }
        }
      }
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         '@babel/preset-env'
      //       ]
      //     } 
      //   }
      // }
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