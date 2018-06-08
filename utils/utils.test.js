const expect = require('expect');
const utils = require('./utils.js');


describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33,10);
          
            expect(res).toBe(43).toBeA('number');
          });
    });
   
      it('should square a number', () => {
          let res = utils.square(10);
      
          expect(res).toBe(100).toBeA('number');
      });
});


describe('Async', () => {
    // Async test using done()
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    // Async test with square
    it('should square X asynchronous', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done(); 
        })
    });
});


describe('Testing with objects and other values', () => {
    it('should expect some values', () => {
        // expect(12).toBe(12);
        // expect(14).toNotBe(20);
        // expect({name: 'Genius'}).toNotBe({name: 'Mary'});
        // expect([2,3,4]).toInclude(1);
        expect({
            name: 'Tono',
            age: 38,
            location: 'Madrid'
        }).toInclude({
            age: 38
        })
    });
    
    it('should verify the first and last name are set', () => {
        let user = { location: 'Madrid', age: 38 };
        let res = utils.setName(user, 'Tono Arnau');
    
        expect(res).toInclude({
            firstName: 'Tono',
            lastName: 'Arnau'
        });
    });

});


