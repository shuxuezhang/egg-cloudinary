'use strict';

const mock = require('egg-mock');

describe('test/cloudinary.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/cloudinary-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, cloudinary')
      .expect(200);
  });
});
