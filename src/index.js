/// Library loaded.
const Application = require('./application')

/**
 * Web Application
 *
 * Model-View-Controller web application framework
 * developed in the Node.js environment.
 * It is designed to make it easy to build web applications and APIs.
 *
 * @see https://github.com/azmisahin/azmisahin-azmisahin-software-web-architecture-sailsnpm
 */
var web = (global.web = new Application())

// Start Application
web.start()

// Module and web app
exports = module.exports = web
