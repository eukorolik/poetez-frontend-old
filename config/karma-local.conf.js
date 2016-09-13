module.exports = {
  browsers: ['Chrome', 'Firefox', 'ie'],
  coverageReporter: {
    type: 'html',
    dir: 'coverage',
    subdir: (browser) => {
      switch (true) {
        case /chrome/i.test(browser):
          return 'chrome';
        case /firefox/i.test(browser):
          return 'firefox';
        case /explorer/i.test(browser):
          return 'ie';
        case /phantomjs/i.test(browser):
          return 'phantomjs';
        default:
          throw Error(`Browser ${browser} is not defined`);
      }
    }
  },
  customLaunchers: {
    ie: {
      base: 'IE',
      platform: 'windows',
      displayName: 'Internet Explorer'
    }
  },
  plugins: [
    require('karma-chrome-launcher'),
    require('karma-firefox-launcher'),
    require('karma-ie-launcher')
  ]
};
