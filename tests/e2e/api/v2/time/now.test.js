var { ServerUrl } = require('../../../../e2e.setup')
var service = '/api/v2/time'
var link = ServerUrl + service

/**
 * Application launch tests
 */
describe(`${service} tests.`, function () {
  /**
   * service test for targeted version.
   */
  it('dateTime', function (browser) {
    browser
      .url(link)
      .waitForElementVisible('body')
      .assert.containsText('body', 'dateTime')
      .end()
  })
})
