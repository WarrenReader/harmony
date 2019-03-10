const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      reportFilename: 'BundleReport.html',
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
});
