/**
 * Web Application
 *
 * https://github.com/azmisahin/azmisahin-azmisahin-software-web-architecture-sails
 *
 * @author Azmi SAHIN
 * @since 2020
 * */

/**
 * Main Package
 */
var applicationName = require('../package.json').name
var applicationVersion = require('../package.json').version

/**
 * Application Name
 */
module.exports.name = applicationName

/**
 * Application Version Number
 */
module.exports.version = applicationVersion

/**
 * environment mode setup
 */
function environmentMode() {
  return process.env.NODE_ENV || 'test'
}

/**
 * Environment
 */
module.exports.mode = environmentMode

/**
 * application port setup
 */
function environmentPort() {
  var port

  if (environmentMode() == 'development') port = 3000
  else if (environmentMode() == 'production') port = 80
  else port = 5000
  return port
}

/**
 * Application Port
 */
module.exports.port = environmentPort

/**
 * environment host
 */
function environmentHost() {
  var result

  result = require('os').hostname
  return result
}

/**
 * Application Host
 */
module.exports.Host = environmentHost

/**
 * environment server url
 */
function environmentServerUrl() {
  var result

  result = `http://${environmentHost()}:${environmentPort()}`
  return result
}

/**
 * Application ServerUrl
 */
module.exports.ServerUrl = environmentServerUrl

/**
 * startup message
 */
function welcomeMessage() {
  return `
    ==================================================
    Application : ${applicationName}
    Version     : ${applicationVersion}
    Mode        : ${environmentMode()}
    Port        : ${environmentPort()}
    ==================================================
    Url         : ${environmentServerUrl}
    ==================================================
    `
}

/**
 * bye message
 */
function byeMessage() {
  return `
    ==================================================
    Application : ${applicationName}
    ==================================================
    `
}

/**
 * Write Message
 *
 * @param {string} message Mesasge String
 */
function writeMessage(message) {
  // eslint-disable-next-line no-console
  console.log(message)
}

/**
 * Application Start
 */
module.exports.start = () => writeMessage(welcomeMessage())

/**
 * Application Start
 */
module.exports.stop = () => writeMessage(byeMessage())
