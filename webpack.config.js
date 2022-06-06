const path = require('path')
const HtmlWebpaclPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'scripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.svg$/, type: 'asset/resource' } 
    ]
  },
  plugins: [
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' })
  ]
}
