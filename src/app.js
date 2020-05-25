process.chdir(__dirname)
var sails
var rc

try {
  sails = require('sails')
  rc = require('sails/accessible/rc')
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err.stack)
  return
} //-•

// Start server
sails.lift(rc('sails'))
