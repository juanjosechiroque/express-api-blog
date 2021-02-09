const request = require('supertest');

const app = require('../app.js');

describe('GET api/category', () => {
  
  it('get all categories', done => {
    request(app)
      .get('/api/categories')
      .expect(200, done);           
  });
  
});


describe('POST api/category', () => {
  
  it('respond with 201 created', done => {
    const data = {
      title: 'test new category'
    }
    request(app)
      .post('/api/categories')
      .send(data)
      .expect(201, done)
  });
  
  it('respond with code 400 when missing parameters', done => {    
    
    request(app)
      .post('/api/categories')      
      .expect(400, done)
    
  });
  
})
