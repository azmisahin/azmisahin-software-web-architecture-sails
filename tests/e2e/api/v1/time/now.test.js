var { serverAddress } = require('../../../../e2e.setup')
var service = '/api/v1/time'
var link = serverAddress + service

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
