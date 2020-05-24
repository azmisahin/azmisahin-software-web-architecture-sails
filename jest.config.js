/**
 * Gesture configuration in package.json
 * project in jest.config.js file
 * or under a file or --config <path/to/file.js | cjs | mjs | json>
 * can be defined as an option.
 * @see https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  /**
   * It automatically clears fake calls and samples between each test.
   */
  clearMocks: true,

  /**
   * The directory that Jest should export coverage files to.
   */
  coverageDirectory: 'coverage',

  /**
   * Test environment to be used for testing.
   */
  testEnvironment: 'node',

  /**
   * Global patterns that Jest uses to detect test files.
   */
  testMatch: ['<rootDir>/**/tests/integration/**/*.test.js'],

  /**
   * If a file matches the specified globe pattern,
   * coverage information is collected even though
   * the test is not available for this file
   * and is never required in the test package.
   */
  collectCoverageFrom: ['src/api/**/*.{ts,js}'],

  /**
   * List of configuring the test environment
   * before each test file in the package is executed.
   *
   * @see https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
   */
  setupFilesAfterEnv: ['./tests/web.setup.js'],
}
