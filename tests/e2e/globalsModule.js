/**
 * Global Module
 *
 * @see https://nightwatchjs.org/guide/#external-globals
 */
module.exports = {
  default: {
    isLocal: true,
  },

  integration: {
    isLocal: false,
  },

  // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  before: function () {
    // run this only for the local-env
    if (this.isLocal) {
      // start the local server
      // eslint-disable-next-line no-console
      console.log(" before is Local");
    } else {
      // eslint-disable-next-line no-console
      console.log(" before is not local");
    }
  },

  // External after hook is ran at the very end of the tests run, after closing the Selenium session
  after: function () {
    // run this only for the local-env
    if (this.isLocal) {
      // stop the local server
      // eslint-disable-next-line no-console
      console.log(" after is local");
    } else {
      // eslint-disable-next-line no-console
      console.log(" after is not local");
    }
  },

  // This will be run before each test suite is started
  beforeEach: function (browser) {
    // getting the session info
    browser.status(function (result) {
      // eslint-disable-next-line no-console
      console.log(result.value);
    });
  },

  // This will be run after each test suite is finished
  afterEach: function (browser) {
    // eslint-disable-next-line no-console
    console.log(browser.currentTest);
  },
};
