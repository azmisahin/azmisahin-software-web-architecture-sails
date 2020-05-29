var { start, ServerUrl } = require('./mock')

/**
 * Server Address
 */
module.exports.ServerUrl = ServerUrl()

/**
 * Url address to friendly file name
 * @param {Browser Url} url Browser url address
 */
function friendlyUrl(url) {
  // make the url lowercase
  var encodedUrl = url.toString().toLowerCase()
  // remove invalid characters

  encodedUrl = encodedUrl.split(/[^a-z0-9]/).join('-')
  // remove duplicates
  encodedUrl = encodedUrl.split(/-+/).join('-')
  // trim leading & trailing characters
  encodedUrl = encodedUrl.trim('-')
  return encodedUrl
}

/**
 * Starting application
 */
/*global before*/
/*eslint no-undef: "error"*/
before((browser) => {
  start(function () {})
  return browser
})

/**
 * Closes a removed Sailing application
 * and allows it to stop listening
 * or responding to future requests.
 */
/*global after*/
/*eslint no-undef: "error"*/
after((browser) => {
  // Check current browser url
  browser.url(function (result) {
    // convert url to normalize filename
    var fileName = friendlyUrl(result.value)

    // take screenshot
    var fullPath = `reports/screens/${fileName}.png`

    browser.saveScreenshot(fullPath)
  })

  // browser stop
  browser.end()

  // Web Application stop
  // stop() // This area not stopped

  //
  return
})
