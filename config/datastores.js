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
    // adapter: process.env.CONNECTION_STRING == "" ? "" : "sails-mongo",
    /**
     * Database connection string
     *
     * @see https://sailsjs.com/documentation/reference/configuration/sails-config-datastores#?the-connection-url
     */
    // url: process.env.CONNECTION_STRING,
  },
}
