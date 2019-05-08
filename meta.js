/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    }
  },
  description: {
    type: 'string',
    required: false,
    message: 'Description',
    default: 'Vue basic project template'
  },
  author: {
    type: 'string',
    message: 'Author'
  },
  completeMessage: 'Project init complete'
}