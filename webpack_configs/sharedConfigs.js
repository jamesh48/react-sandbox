const path = require('path');

const aliases = {
  Components: path.resolve(__dirname, '../src/public/components'),
  GlobalSCSS: path.resolve(__dirname, '../src/public/main-styles/global.scss'),
  ResetSCSS: path.resolve(__dirname, '../src/public/main-styles/reset.scss'),
  GlobalStore: path.resolve(__dirname, '../src/public/GlobalStore/globalStore.js'),
  TodosStore: path.resolve(__dirname, '../src/public/components/Todos/TodosStore/todosStore.js'),
  CounterStore: path.resolve(__dirname, '../src/public/components/Counter/CounterStore/counterStore.js')
};

const stats = {
  cached: false,
  cachedAssets: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  modules: false
};
// stats: 'minimal' || 'errors-only

module.exports = { aliases, stats };
