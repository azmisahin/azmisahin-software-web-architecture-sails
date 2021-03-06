var service = '/'
/**
 * Application launch tests
 */

describe(`${service} tests.`, function () {
  /**
   * service test for targeted version.
   */
  it(`${service} iteration - http ok`, function (done) {
    // Supertest
    global
      .request(global.web)
      // Routing test
      .get(service)
      // A succesfull answer is required.
      .expect(200)
      // Test complated.
      .end(done)
  })
})
