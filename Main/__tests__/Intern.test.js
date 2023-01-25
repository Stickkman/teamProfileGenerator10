// test for Intern.js

const Intern = require('../lib/Intern');                              // import Intern from library
const intern = new Intern('Craig', '8675309', 'stick@gmail.com', 'UCF'); // instantiate new object for test
describe('Intern Suite of Tests', ()=> { // suite of tests for Intern

    describe('Constructor Values', ()=> { // specific test label
        it('should return data from intern object', ()=> { 
            expect(intern.name).toBe('Craig');            //tests for name
            expect(intern.id).toBe('8675309');         //tests for id number
            expect(intern.email).toBe('stick@gmail.com'); // tests for email
            expect(intern.school).toBe('UCF'); // test for school name
        });
    });
            
    describe('Method() Tests', ()=> {                   //label for test group
        it('should return name from getName()', ()=> { // what is being tested
            expect(intern.getName()).toBe('Craig');  //expected result
        });
        it('should return Id number from getId()', ()=> {
            expect(intern.getId()).toBe('8675309');
        });
        it('should return email address from getEmail()', ()=> {
            expect(intern.getEmail()).toBe('stick@gmail.com');
        });
        it('should return github username getSchool()', ()=> {  //specific to Intern class
            expect(intern.getSchool()).toBe('UCF');
        });
        it('should override to Intern from getRole()', ()=> {
            expect(intern.getRole()).toBe('Intern');
        });   
    });
});