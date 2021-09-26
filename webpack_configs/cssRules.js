const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.(css|scss)$/,
  include: path.resolve(__dirname, '../src/public'),
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        // discardDuplicates: true,
        importLoaders: 1,
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
        sourceMap: process.env.NODE_ENV !== 'production',
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
      },
    },
  ]
};