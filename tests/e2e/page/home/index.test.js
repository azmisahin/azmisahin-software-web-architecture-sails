var { ServerUrl } = require('../../../e2e.setup')
var service = '/'
var link = ServerUrl + service

/**
 * Application launch tests
 */
describe(`${service} tests.`, function () {
  /**
   * service test for targeted version.
   */
  it('Home.Index', function (browser) {
    browser.url(link).waitForElementVisible('body').end()
  })
})
