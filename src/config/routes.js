/**
 * Route Mappings
 * @see https://sailsjs.com/anatomy/config/routes-js
 */
module.exports.routes = {
  /**
   * Pages
   */
  'GET  /': { action: 'page/home/index' },

  /**
   * Apis
   * Version 1
   */
  'GET  /api/v1/time': { action: 'api/v1/time/now' },

  /**
   * Apis
   * Version 2
   */
  'GET  /api/v2/time': { action: 'api/v2/time/now' },
}
