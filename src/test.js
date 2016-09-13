/* global __karma__ */

import 'core-js/es6';

__karma__.loaded = () => {};

Promise.all([
  System.import('angular'),
  System.import('angular-translate'),
  System.import('angular-translate-loader-static-files'),
  System.import('angular'),
  System.import('angular-mocks')
])
  .then(() => require.context('./', true, /\.spec\.js/))
  .then(context => context.keys().map(context))
  .then(__karma__.start, __karma__.error);
