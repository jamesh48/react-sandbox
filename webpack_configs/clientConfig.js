const webpack = require('webpack');
const path = require('path');
const { aliases, stats } = require('./sharedConfigs.js');
const tsRules = require(path.resolve(__dirname, 'tsRules.js'));
const jsRules = require('./jsRules.js');
const cssRules = require('./cssRules.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  target: "web",
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV_ENV': process.env.DEV_ENV
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
    alias: aliases,
  },
  entry: {
    "index": path.resolve(__dirname, "../src/public/index.js"),
  },
  module: {
    rules: [tsRules, jsRules, cssRules],
  },
  // devServer: {
  //   port: 8000,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   },
  //   contentBase: path.resolve('client/public'),
  //   proxy: {
  //     "*": "http://localhost:8001",
  //   },
  // },
  output: {
    path: path.resolve(__dirname, "../dist/public"),
    filename: "[name].js",
  },
  stats: stats
};