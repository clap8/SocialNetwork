var fs = require('fs');
var path = require('path');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
    '@config': path.resolve(__dirname, 'src/config'),
    '@api': path.resolve(__dirname, 'src/api'),
    "@lib": path.resolve(__dirname, 'src/lib'),
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/, // include .js files
      use: [{
        loader: "ts-loader"
      }]
    }]
  },
  target: 'node',
  externals: nodeModules,
};