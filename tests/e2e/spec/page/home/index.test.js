/**
 * Home Page
 */
module.exports = {
  '@tags': ['page'],
  'Home page': function (browser) {
    browser
      .url(browser.launch_url + '/')
      .waitForElementVisible('body')
      .end()
  },
}
