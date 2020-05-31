/**
 * Sails MVC framework for Node.js
 *
 * @see https://sailsjs.com/
 */

// Change working directory
process.chdir(__dirname)

/**
 * Sails Framework
 */
var sails

/**
 * Application
 */
var app = require('./src/index')

/**
 * Lift a Sails app programmatically.
 *
 * @see https://sailsjs.com/documentation/reference/application/advanced-usage/sails-lift
 */
var configuration = {
  hooks: { grunt: false },
  log: { level: 'warn' },
  port: app.port(),
}

try {
  sails = require('sails')
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err.stack)
  return
}

// Start server
sails.lift(configuration, (err) => {
  // Application Error
  if (err) {
    return app.error(err)
  }
  // Application
  app.start()
})

module.exports = sails
