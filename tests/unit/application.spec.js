var Application = require(process.cwd() + '/src/application')
var received = new Application()
var expected = require(process.cwd() + '/package')

describe('Application', () => {
  describe('Feature', () => {
    it('name valid?', () => {
      expect(received.name).toBe(expected.name)
    })

    it('Application features version valid?', () => {
      expect(received.version).toBe(expected.version)
    })
  })

  describe('Function', () => {
    it('Start?', () => {
      expect(received.start())
    })

    it('Stop?', () => {
      // https://jestjs.io/docs/en/expect
      expect(received.stop())
    })
  })
})
