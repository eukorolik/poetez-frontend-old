var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isLocal = process.env.NODE_ENV === 'local';

var projectRoot = path.resolve(__dirname, '..');
var srcRoot = path.resolve(projectRoot, 'src');

module.exports = {
  devtool: isLocal ? 'inline-source-map' : undefined,
  context: srcRoot,
  resolve: {
    extensions: ['', '.js'],
    root: srcRoot
  },
  entry: {
    app: './index.js',
    dependencies: './dependencies.js',
    polyfills: './polyfills.js'
  },
  output: {
    path: path.resolve(projectRoot, 'dist'),
    filename: '[name].js'
  },
  cache: isLocal,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: [srcRoot]
      }
    ],
    loaders: [
      { // Babel loader
        test: /\.js$/,
        loader: 'babel-loader',
        include: [srcRoot]
      },
      { // CSS loader
        test: /\.css$/,
        include: /node_modules/,
        loader: `style!css!postcss`,
      },
      { // Scss loader
        test: /\.scss$/,
        loaders: [
          'style',
          'css?camelCase&modules&localIdentName=[local]__[name]',
          'postcss',
          isLocal ? 'sass' : 'sass?outputStyle=compressed',
        ]
      },
      { // HTML loader
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ['html']
      },
      { // Woff loader
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      { // Font loader
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      { // Image loader
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      { // JSON loader
        test: /\.json$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      test: /\.js($|\?)/i
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'dependencies', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ],
  eslint: {
    emitError: true,
    emitWarning: true,
    failOnError: false,
    configFile: path.resolve(projectRoot, '.eslintrc')
  },
  htmlLoader: {
    minimize: true
  },
  postcss: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: isLocal
        ? ['Chrome >= 45']
        : [
        'Android 2.3',
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 10',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6'
      ]
    }),
    require('postcss-inline-svg')({
      path: 'src/assets/icons',
      encode: false
    }),
    require('postcss-svgo')()
  ],
  node: {
    fs: 'empty',
    global: 'window',
    process: 'empty',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: true,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }
};
