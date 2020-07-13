1.安装webpack，webpack-cli
2.打包输出
3.手动配置：webpack.config.js(名字可更改：用webpack --config XXXX.js使用新的配置文件名，同时可以在package.json中用scripts写命令)
4.安装本地服务：  yarn add webpack-dev-server -D =》 运行服务 npx webpack-dev-serve 
5.配置文件最小化 minify
6.打包css
7.安装css-loader,style-loader,less-loader等
8.安装mini-css-extract-plugin插件，将css抽离出来
9.安装postcss-loader，自动为css添加前缀（
  ①在webpack.config.js的module的use末尾添加'postcss-loader';
  ②在package.json中的"devDependencies"同级添加"browserslist": ["last 2 versions", "> 1%", "iOS 7", "last 3 iOS versions"];
  ③根目录配置postcss.config.js配置文件
  ）
10.安装terser-webpack-plugin（压缩js），optimize-css-assets-webpack-plugin(压缩css);
11.配置优化项optimization =》optimization: { // 优化项
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCssAssetsWebpackPlugin({})
    ]
  }

12.安装babel，将es6转为es5