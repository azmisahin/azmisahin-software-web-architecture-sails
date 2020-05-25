/**
 * Server date time now
 */
module.exports = function (req, res) {
  // The return value is configured.
  // The date and time are prepared ISO format.
  var value = {
    dateTime: new Date().toISOString(),
  }

  // The successful answer is transmitted and data is sent.
  var result = res.status(200).json(value)

  // response
  return result
}
