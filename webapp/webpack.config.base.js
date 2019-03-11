const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: ['svg-inline-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Harmony',
      filename: 'index.html',
      template: './src/template.html'
    })
  ]
};
