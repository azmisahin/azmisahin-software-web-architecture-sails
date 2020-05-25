/**
 * Home index
 */
module.exports = function (req, res) {
  // The return value is configured.
  var value = 'home'

  // The successful answer is transmitted and data is sent.
  var result = res.status(200).send(value)

  // response
  return result
}
