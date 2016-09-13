var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.conf');

var isLocal = process.env.NODE_ENV === 'local';

var projectRoot = path.resolve(__dirname, '..');
var srcRoot = path.resolve(projectRoot, 'src');

config.output.path = './dist.test';
config.eslint.failOnError = true;
config.plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: null,
    test: /\.js($|\?)/i
  })
];

for (var i = 0, len = config.module.loaders.length; i < len; i++) {
  var loader = config.module.loaders[i];

  if (loader.loader === 'babel-loader') {
    loader.query = {
      plugins: [
        "external-helpers",
        ["transform-runtime", {
          polyfill: false,
          regenerator: true
        }],
        ["istanbul", {
          exclude: ["**/*.spec.js"]
        }]
      ]
    };
  }
}

module.exports = config;
