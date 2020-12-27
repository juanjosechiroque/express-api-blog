const request = require('supertest');

const app = require('../app.js');

describe('GET api/posts', () => {

  it('get a list of all posts ', done => {
    request(app)
      .get('/api/posts')
      .expect(200, done)
  });
  
})

describe('GET api/posts/:id', () => {

  it('respond with a single post', done => {
    request(app)
      .get('/api/posts/5fd456116303a3052235c5ce')
      .expect(200, done)
  });
  
  it('respond with 404 when the post not found', done => {
    request(app)
      .get('/api/posts/postNotFound')
      .expect(404, done)
  });
  
})

describe('POST api/posts', () => {
  
  it('respond with 201 created', done => {
    const data = {
      title: 'test new title',  
      content: 'test new content'
    }
    request(app)
      .post('/api/posts')
      .send(data)
      .expect(201, done)
  });
  
  it('respond with code 400 when missing parameters', done => {
    const data = {
      title: 'test new title'
    }
    request(app)
      .post('/api/posts')
      .send(data)
      .expect(400, done)
  });
  
})
