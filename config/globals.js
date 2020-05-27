/**
 * Global Variable Configuration
 *
 * @see https://sailsjs.com/documentation/reference/configuration/sails-config-globals#sails-config-globals
 */
module.exports.globals = {
  /**
   * Expose the specified lodash as a global variable (_).
   * Or set this to "false" to disable the _ global altogether.
   */
  _: require('@sailshq/lodash'),

  /**
   * Expose the specified async as a global variable (async). "true"
   * Or set this to "false" to disable the async global altogether.
   */
  async: false,

  /**
   * Expose each of your app's models as a global variable (using its "globalId").
   * Model defined in api/models/todo.js would have a "globalId" of  Todo
   * @example
   *    Todo
   */
  models: true,

  /**
   * Expose each of your app's services as global variables (using their "globalId").
   * E.g. a service defined in api/services/TodoFactory.js
   * would have a globalId of TodoFactory by default.
   * If this is disabled, you can still access your services via sails.services.*.
   */
  services: true,

  /**
   * true   : global sails
   * false  : env.sails, or in your policies via req._sails.
   */
  sails: true,
}
