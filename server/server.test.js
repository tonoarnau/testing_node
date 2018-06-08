const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

// Testing HTTP requests
it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page Not Found',
                name: 'Todo App v1.0'
            });
        })
        .end(done);
})



it('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Alex',
                age: 55
            });
        })
        .end(done);
});