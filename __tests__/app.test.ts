import {app} from '../src/app';
import request = require('supertest');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
