const webpack = require('webpack');

const API_URL = process.env.API_URL || 'http://localhost:3000';

module.exports = () => ({
  entry: './src/index.js',
  output: './src/bundle.js',

  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    // bind to a specific address to make the dev-server accessible outside of
    // our Docker container
    host: '0.0.0.0',
    port: 8080,

    // proxy requests to our backend api
    proxy: {
      '/api': {
        target: API_URL,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
});
