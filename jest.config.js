/**
 * Jest is a delightful JavaScript Testing Framework
 * with a focus on simplicity.
 *
 * @see https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  /**
   * Automatically clear mock calls and instances before every test.
   */
  clearMocks: true,

  /**
   * The directory where Jest should output its coverage files.
   */
  coverageDirectory: 'coverage',

  /**
   * Test environment options that will be passed
   * to the testEnvironment.
   */
  testEnvironment: 'node',

  /**
   * The glob patterns Jest uses to detect test files.
   */
  testMatch: ['<rootDir>/**/tests/**/*.spec.js'],

  /**
   * An array of glob patterns indicating
   * a set of files for which coverage information
   * should be collected
   */
  collectCoverageFrom: ['./api/**/*.{ts,js}'],

  /**
   * A list of paths to modules that run some code to configure
   * or set up the testing framework before each test file
   * in the suite is executed.
   *
   * @see https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
   */
  setupFilesAfterEnv: ['./tests/web.setup.js'],

  /**
   * Default timeout of a test in milliseconds.
   *
   * @see https://jestjs.io/docs/en/configuration#testtimeout-number
   */
  testTimeout: 10000,
}
