/**
 * Required packages
 */
const sails = require('sails')
const request = require('supertest')
var app = require('../src')

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

/**
 * It loads the app, runs its bootstrap,
 * then starts listening for HTTP requests
 * and WebSocket connections.
 */
module.exports.start = function (done) {
  sails.lift(configuration, (err) => {
    if (err) {
      return done(err)
    }

    global.web = sails.hooks.http.app
    global.request = request

    return done()
  })
}

/**
 * Closes a removed Sailing application
 * and allows it to stop listening
 * or responding to future requests.
 */
module.exports.stop = function (done) {
  sails.lower(done)
}

/**
 * Server Address
 */
module.exports.ServerUrl = app.ServerUrl
