let path = require('path');
let webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '_dll_[name].js',
    path:path.resolve(__dirname, 'dist'),
    library: '_dll_[name]',
    libraryTarget: 'var' // umd var this commonjs
  },
  plugins: [
    new webpack.DllPlugin({ // name == library
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}