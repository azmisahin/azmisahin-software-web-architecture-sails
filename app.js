/**
 * Web Application
 */

// Change working directory
process.chdir(__dirname)

// Variable
var sails
var rc

try {
  sails = require('sails')
  rc = require('sails/accessible/rc')
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err.stack)
  return
}

// Start server
sails.lift(rc('sails'))
