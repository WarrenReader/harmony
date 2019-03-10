const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3025,
    proxy: { '/api': { target: 'http://localhost:4025', secure: false } }
  },
  devtool: 'source-map'
});
