var { name, version } = require('../../../../package.json')
/**
 * Home index
 */

module.exports = function (req, res) {
  // The return value is configured.
  var value = `
  <h1>${name}:${version}<h1>
  <hr />
  <h2>Version 1</h2>
  <ul>
    <li>GET <a href="/api/v1/time">/api/v1/time</a><br/><span>Server date time now</span></li>
  </ul>  
  `

  // The successful answer is transmitted and data is sent.
  var result = res.status(200).send(value)

  // response
  return result
}
