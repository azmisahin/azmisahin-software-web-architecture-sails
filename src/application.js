/**
 * Web Application
 *
 * https://github.com/azmisahin/azmisahin-azmisahin-software-web-architecture-sails
 *
 * @author Azmi SAHIN
 * @since 2020
 * */
module.exports = class Application {
  /**
   * Web Application
   *
   * @example
   *
   * /// Library loaded.
   * const Application = require('./app')
   *
   * ///  Instance create
   * var app = new Application()
   *
   * @returns <Application>
   */
  constructor() {
    /**
     * Application Name.
     */
    this.name = require(process.cwd() + '/package.json').name

    /**
     * Application version number.
     */
    this.version = require(process.cwd() + '/package.json').version

    /**
     * Uygulama sunucu adı.
     */
    this.host = require('os').hostname()

    /**
     * Application server port
     */
    this.port = process.env.PORT || 80

    /**
     * Application Link
     */
    this.link = `http://${this.host}:${this.port}`

    /**
     * Welcome Message
     */
    this.welcome = `
      Application : ${this.name}
      Version     : ${this.version}
      Port        : ${this.port}
      Link        : ${this.link}`

    /**
     * Bye Message
     */
    this.bye = `
      Application : ${this.name}
      ==================================================
      `
  }

  /**
   * Start Application
   */
  start() {
    // eslint-disable-next-line no-console
    console.log(this.welcome)
  }

  /**
   * Stop Application
   */
  stop() {
    // eslint-disable-next-line no-console
    console.log(this.bye)
  }
}
