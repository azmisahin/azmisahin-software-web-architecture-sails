/**
 * Session Configuration
 *
 * @see https://sailsjs.com/documentation/reference/configuration/sails-config-session#sails-config-session
 */
module.exports.session = {
  /**
   * Session and cooike screet
   */
  secret: 'sc_web-architecture-sails_1.0.1',

  /**
   * MongoDB session store
   * adapter version required : "connect-mongo": "2.0.3"
   * adapter version ERROR    : "connect-mongo": "^3.2.0",
   */
  // adapter: process.env.CONNECTION_STRING == "" ? "" : "connect-mongo",
  // url: process.env.CONNECTION_STRING,
}
