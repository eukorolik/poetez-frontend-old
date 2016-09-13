module.exports = {
  browsers: ['PhantomJS'],
  coverageReporter: {
    type: 'cobertura',
    dir: 'coverage/',
    file: 'coverage.xml',
    subdir: '.'
  },
  junitReporter: {
    outputDir: 'testresults',
    outputFile: 'results.xml',
    useBrowserName: false
  },
  plugins: [
    require('karma-junit-reporter'),
    require('karma-phantomjs-launcher')
  ],
  reporters: ['junit']
};
