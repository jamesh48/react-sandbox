const path = require('path');

module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-react"]
  },
};