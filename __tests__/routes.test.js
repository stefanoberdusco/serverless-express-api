const request = require('supertest');
const app = require('../src/app');
const config = require('../src/config');

describe('GET', () => {
  describe('/', () => {
    it('should return heartbeat', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual(config.name);
    });
  });
});
