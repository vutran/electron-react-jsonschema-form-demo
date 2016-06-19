const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const options = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.join(__dirname, 'renderer.js'),
  ],
  output: {
    publicPath: '/',
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
        {
          test: /\.json$/,
          loaders: ['json'],
          exclude: /node_modules/,
        },
    ],
  },
  resolve: {
    alias: {
      'electron-react-jsonschema-form-demo': path.resolve('src'),
    },
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
  ],
};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
