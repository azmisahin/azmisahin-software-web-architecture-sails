var { start, stop } = require('./mock')

/**
 * Starting application
 */
beforeAll(start)

/**
 * Closes a removed Sailing application
 * and allows it to stop listening
 * or responding to future requests.
 */
afterAll(stop)
