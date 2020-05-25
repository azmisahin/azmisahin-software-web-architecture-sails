var service = '/api/v1/time'
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

  /**
   * service test for targeted version.
   */
  it(`${service} iteration - content json`, function (done) {
    // Supertest
    global
      .request(global.web)
      // Routing test
      .get(service)
      // A succesfull answer is required.
      .expect('Content-Type', /json/)
      // Test complated.
      .end(done)
  })
})
