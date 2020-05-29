/**
 * Todo
 *
 * @see https://sailsjs.com/documentation/reference/waterline-orm/models
 */
module.exports = {
  tableName: 'todo_list',
  /**
   * @see https://sailsjs.com/documentation/concepts/models-and-orm/model-settings#?tablename
   */
  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 50,
      example: 'email@domain.com',
    },
  },
}
