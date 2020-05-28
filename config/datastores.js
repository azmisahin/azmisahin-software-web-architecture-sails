/**
 * Data Context
 *
 * Datastores represent the data sources configured for your app
 * @see https://sailsjs.com/documentation/reference/waterline-orm/datastores
 */
module.exports.datastores = {
  /**
   *
   */
  default: {
    /**
     * Sails mongo db adaptor
     *
     * @see https://sailsjs.com/documentation/tutorials/using-mongo-db
     */
    adapter:
      process.env['CONNECTION_STRING'] === undefined
        ? 'sails-disk'
        : 'sails-mongo',

    /**
     * Database connection string
     *
     * @see https://sailsjs.com/documentation/reference/configuration/sails-config-datastores#?the-connection-url
     *
     * CONNECTION_STRING variable will be defined around the "server application" environment.
     * @see https://docs.microsoft.com/en-us/samples/azure-samples/app-service-web-nodejs-manage/app-service-web-nodejs-manage/
     */
    url: process.env['CONNECTION_STRING'] || undefined,
  },
}
