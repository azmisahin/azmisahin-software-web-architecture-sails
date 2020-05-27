/**
 * Default model
 *
 * Data Annotations
 *
 * @see https://sailsjs.com/documentation/concepts/models-and-orm/model-settings
 */
module.exports.models = {
  /**
   * Depends on the adapter.
   * Whether or not a model expects records to conform to a specific set of attributes.
   *
   * @see https://sailsjs.com/documentation/concepts/models-and-orm/model-settings#schema
   */
  schema: true,

  /**
   * Data moodel to database migration
   * Auto migration
   *
   * @see https://sailsjs.com/documentation/concepts/models-and-orm/model-settings#?how-automigrations-work
   * @param {string} 'drop'  'alter'  'safe'
   *
   * safe  : production mode always safe
   */
  migrate: 'alter',

  /**
   * Common column definitions for models.
   */
  attributes: {
    /**
     * Primary Key
     */
    id: {
      columnName: '_id',
      required: true,
      type: 'string',
    },

    /**
     * The creation time will be automatically added
     * for each data entry.
     */
    createdAt: {
      type: 'number',
      autoCreatedAt: true,
    },

    /**
     * The creation time will be added automatically
     * in every data update.
     */
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true,
    },
  },

  /**
   * A set of keys to use when decrypting data.
   */
  dataEncryptionKeys: {
    default: 'de_web-architecture-sails_1.0.1',
  },

  /**
   * Perform?
   */
  cascadeOnDestroy: true,
}
