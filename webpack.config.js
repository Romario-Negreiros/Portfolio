const path = require("path");
const HtmlWebpaclPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: {
    v1: path.resolve(__dirname, "src", "v1", "scripts", "index.js"),
    index: path.resolve(__dirname, "src", "v2", "scripts", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 5500,
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.(svg|png24|pdf)$/, type: "asset/resource" },
    ],
  },
  plugins: [
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, "public", "v1.html"),
      filename: "v1.html",
      chunks: ["v1"],
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new Dotenv(),
  ],
});
