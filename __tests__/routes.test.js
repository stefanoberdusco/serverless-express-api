const request = require('supertest');
const app = require('../src/app');
const config = require('../config/config');

describe('GET', () => {
  describe('/', () => {
    it('should return healthcheck', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual(config.name);
    });
  });
});
