const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const cssRules = require(path.resolve(__dirname, 'cssRules.js'));
const jsRules = require(path.resolve(__dirname, 'jsRules.js'));
const { aliases, stats } = require('./sharedConfigs.js');

require('dotenv').config({ path: './.env' });

module.exports = {
  mode: 'development',
  target: 'node',
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV_ENV': process.env.DEV_ENV
    }),
  ],
  devtool: 'source-map',
  node: {
    __dirname: false,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: aliases
  },
  externals: [nodeExternals()],
  entry: {
    "server": path.resolve(__dirname, '../src/server/index.js'),
  },
  module: {
    rules: [jsRules, cssRules],
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js'
  },
  stats: stats
}