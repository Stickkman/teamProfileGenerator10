// tests for Manager.js

const Manager = require('../lib/Manager');                              // import Manager from library
const manager = new Manager('Craig', '8675309', 'stick@gmail.com', '808'); // instantiate new object for test
describe('Manager Suite of Tests', ()=> { // suite of tests for Manager

    describe('Constructor Values', ()=> { // specific test label
        it('should return data from manager object', ()=> { 
            expect(manager.name).toBe('Craig');            //tests for name
            expect(manager.id).toBe('8675309');         //tests for id number
            expect(manager.email).toBe('stick@gmail.com'); // tests for email
            expect(manager.officeNumber).toBe('808'); // test for manager office number
        });
    });
            
    describe('Method() Tests', ()=> {                   //label for test group
        it('should return name from getName()', ()=> { // what is being tested
            expect(manager.getName()).toBe('Craig');  //expected result
        });
        it('should return Id number from getId()', ()=> {
            expect(manager.getId()).toBe('8675309');
        });
        it('should return email address from getEmail()', ()=> {
            expect(manager.getEmail()).toBe('stick@gmail.com');
        });
        it('should override to Manager from getRole()', ()=> {
            expect(manager.getRole()).toBe('Manager');
        });   
    });
});