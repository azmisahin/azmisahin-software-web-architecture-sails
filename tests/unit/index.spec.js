var received = require(process.cwd() + '/src/index')
var expected = require(process.cwd() + '/package')

// https://jestjs.io/docs/en/api#describename-fn
describe('Startup', () => {
  describe('Module', () => {
    it('Installing the index module is required.', () => {
      // https://jestjs.io/docs/en/expec
      expect(received.name).toBe(expected.name)
    })
  })
})
