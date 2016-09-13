var isLocal = process.env.NODE_ENV === 'local';

var WebpackTestConfig = require('./webpack-test.conf');
var envConfig = isLocal ? require('./karma-local.conf') : require('./karma-server.conf');

module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-mocha-reporter'),
    ].concat(envConfig.plugins),
    files: [
      {pattern: './src/test.js', watched: false}
    ],
    exclude: [],
    preprocessors: {
      'src/test.js': ['webpack', 'sourcemap']
    },

    browsers: envConfig.browsers,
    coverageReporter: envConfig.coverageReporter,
    reporters: ['mocha', 'coverage'].concat(envConfig.reporters ? envConfig.reporters : []),

    customLaunchers: envConfig.customLaunchers ? envConfig.customLaunchers : undefined,
    junitReporter: envConfig.junitReporter ? envConfig.junitReporter : undefined,

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,

    noResolve: false,

    webpack: WebpackTestConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    },

    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    }
  });
};
