const path = require('path');

const clientConfig = require(path.resolve(__dirname, 'webpack_configs/clientConfig.js'));
const serverConfig = require(path.resolve(__dirname, 'webpack_configs/serverConfig.js'));
module.exports = [clientConfig, serverConfig];