// test for Engineer.js

const Engineer = require('../lib/Engineer');                              // import Engineer from library
const engineer = new Engineer('Craig', '8675309', 'stick@gmail.com', 'stickkman'); // instantiate new object for test
describe('Engineer Suite of Tests', ()=> { // suite of tests for Engineer

    describe('Constructor Values', ()=> { // specific test label
        it('should return data from engineer object', ()=> { 
            expect(engineer.name).toBe('Craig');            //tests for name
            expect(engineer.id).toBe('8675309');         //tests for id number
            expect(engineer.email).toBe('stick@gmail.com'); // tests for email
            expect(engineer.githubUsername).toBe('stickkman'); // test for gitbub username
        });
    });
            
    describe('Method() Tests', ()=> {                   //label for test group
        it('should return name from getName()', ()=> { // what is being tested
            expect(engineer.getName()).toBe('Craig');  //expected result
        });
        it('should return Id number from getId()', ()=> {
            expect(engineer.getId()).toBe('8675309');
        });
        it('should return email address from getEmail()', ()=> {
            expect(engineer.getEmail()).toBe('stick@gmail.com');
        });
        it('should return github username getGithub()', ()=> {  // specific to Engineer class
            expect(engineer.getGithub()).toBe('stickkman');
        });
        it('should override to Engineer from getRole()', ()=> {
            expect(engineer.getRole()).toBe('Engineer');
        });   
    });
});