const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {

    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
       let spy = expect.createSpy();
       spy('Andrew', 24);

       expect(spy).toHaveBeenCalledWith('Andrew', 24);
    });

    it('should call saveUser with user object', () => {
        let email = 'tonoarnau@gmail';
        let password = '12345';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});