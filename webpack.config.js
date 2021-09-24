const path = require('path');
const SRC_DIR = path.resolve('src/public');
const DIST_DIR = path.resolve('dist/public');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: "eval-source-map",
  watch: true,
  // for production:
  // devtool: "source-map",
  mode: 'development',
  entry: path.join(SRC_DIR, 'index.js'),
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        },
      },
      {
        test: /\.(css|scss)$/,
        include: path.resolve('src/public'),
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
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      GlobalSCSS: path.resolve(__dirname, 'src/public/main-styles/global.scss'),
      MainSCSS: path.resolve(__dirname, 'src/public/main-styles/main.scss'),
      ResetSCSS: path.resolve(__dirname, 'src/public/main-styles/reset.scss'),
      GlobalStore: path.resolve(__dirname, 'src/public/components/GlobalStore/globalStore.js'),
      TodosStore: path.resolve(__dirname, 'src/public/components/Todos/TodosStore/todosStore.js'),
      CounterStore: path.resolve(__dirname, 'src/public/components/Counter/CounterStore/counterStore.js')
    },
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    port: 8000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: path.resolve('client/public'),
    proxy: {
      "*": "http://localhost:8001",
    },
  },

}
