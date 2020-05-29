module.exports = {
  datastores: {
    default: {
      // adapter: process.env.CONNECTION_STRING == "" ? "" : "sails-mongo",
      // url: process.env.CONNECTION_STRING,
    },
  },
  session: {
    /**
     * The built-in session integration in Sails works by using a session ID cookie.
     */
    cookie: {
      maxAge: 1 * 60 * 60 * 1000, // 1 hours
    },
    // adapter: process.env.CONNECTION_STRING == "" ? "" : "connect-mongo",
    // url: process.env.CONNECTION_STRING,
  },
  models: {
    migrate: 'safe',
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    cors: {
      allowOrigins: [
        'https://azmisahin-software-web-architecture-sails.azurewebsites.net',
      ],
    },
  },
  sockets: {
    onlyAllowOrigins: [
      'https://azmisahin-software-web-architecture-sails.azurewebsites.net',
    ],
  },
  log: {
    level: 'debug',
  },
  http: {
    /**
     * The number of milliseconds to cache
     * static assets when your app is running
     * in a 'production' environment.
     */
    cache: 1 * 24 * 60 * 60 * 1000, // One day
  },
  custom: {
    baseUrl:
      'https://azmisahin-software-web-architecture-sails.azurewebsites.net',
    internalEmailAddress: 'azmisahin@outlook.com',
  },
  port: 80,
}
