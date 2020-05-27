var { name, version } = require('../../../../package.json')
/**
 * Home index
 */

module.exports = function (req, res) {
  // The return value is configured.
  var value = `
  <h1>${name}:${version}<h1>
  <hr />
  <p><a href="/api">api</a></p>
  `

  // The successful answer is transmitted and data is sent.
  var result = res.status(200).send(value)

  // response
  return result
}
