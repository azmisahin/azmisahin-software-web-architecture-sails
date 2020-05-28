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
  adapter:
    process.env['CONNECTION_STRING'] === undefined
      ? undefined
      : 'connect-mongo',

  /**
   * Database connection string
   *
   * @see https://sailsjs.com/documentation/reference/configuration/sails-config-datastores#?the-connection-url
   *
   * CONNECTION_STRING variable will be defined around the "server application" environment.
   * @see https://docs.microsoft.com/en-us/samples/azure-samples/app-service-web-nodejs-manage/app-service-web-nodejs-manage/
   */
  url: process.env['CONNECTION_STRING'] || undefined,
}
