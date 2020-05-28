/**
 * nightwatchjs
 *
 * @see https://nightwatchjs.org/gettingstarted/configuration/
 */
const Services = {}

loadServices()

/**
 * The configuration of the gesture can be defined
 * in the gesture.config.js file of your package.json project
 * or through a file or via the --config <path/to/file.js | cjs | mjs | json> option.
 */
module.exports = {
  /**
   * An array of folders (excluding subfolders) where your tests are located;
   * if this is not specified, the test source must be passed as the second argument to the test runner.
   */
  src_folders: ['/tests/e2e/'],

  /**
   * Test reports printout
   */
  output_folder: '/reports/tests/e2e/',

  /**
   * Page Objects
   *
   * @see https://nightwatchjs.org/guide/working-with-page-objects/
   */
  page_objects_path: '',

  /**
   * Custom commands
   *
   * @see  https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
   */
  custom_commands_path: '',

  /**
   * Custom Assertions
   *
   * @see https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
   */
  custom_assertions_path: '',

  /**
   * External globals
   *
   * @see https://nightwatchjs.org/guide/#external-globals
   */
  globals_path: '',

  /**
   * WebDriver is a general purpose library for automating web browsers.
   *
   * @see https://nightwatchjs.org/gettingstarted/#webdriver-settings
   */
  webdriver: {},

  /**
   * Pararlel worker
   *
   * @see https://nightwatchjs.org/guide/running-tests/#parallel-running
   */
  test_workers: {
    enabled: false,
    workers: 'auto',
  },

  /**
   * Test Settings
   */
  test_settings: {
    /**
     * Default enviroment
     *
     * --env default
     */
    default: {
      disable_error_log: false,
      launch_url: `${require('os').hostname}:${
        process.env.PORT || process.env.SERVER_PORT || 80
      }`,

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: 'firefox',
      },

      webdriver: {
        start_process: true,
        server_path: Services.geckodriver ? Services.geckodriver.path : '',
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: Services.geckodriver ? Services.geckodriver.path : '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          // w3c: false,
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: Services.chromedriver ? Services.chromedriver.path : '',
        cli_args: [
          // --verbose
        ],
      },
    },

    selenium: {
      start_process: true,
      server_path: require('selenium-server').path,
      host: '127.0.0.1',
      port: 4444,
      cli_args: {
        'webdriver.chrome.driver': require('chromedriver').path,
      },
    },
  },
}

/**
 * Web driver service
 */
function loadServices() {
  try {
    Services.seleniumServer = require('selenium-server')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Service failed to load..\n' + err)
  }

  try {
    Services.chromedriver = require('chromedriver')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Service failed to load..\n' + err)
  }

  try {
    Services.geckodriver = require('geckodriver')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Service failed to load..\n' + err)
  }
}
