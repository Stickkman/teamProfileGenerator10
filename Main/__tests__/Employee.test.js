// test for employee.js

const Employee = require('../lib/Employee');                              // import employee from library
const employee = new Employee ('Craig', '8675309', 'stick@gmail.com'); // instantiate new object for test
describe('Employee Suite of Tests', ()=> { // suite of tests for employee

    describe('Constructor Values', ()=> { // specific test label
        it('should return data from Employee object', ()=> { 
            expect(employee.name).toBe('Craig');            //tests for name
            expect(employee.id).toBe('8675309');         //tests for id number
            expect(employee.email).toBe('stick@gmail.com'); // tests for email
        });
            
    describe('Get Name')
        it('should return name from getName()', ()=> {
            expect(employee.getName()).toBe('Craig');
        });
    describe('Get Id Number')
        it('should return Id number from getId()', ()=> {
            expect(employee.getId()).toBe('8675309');
        });
    describe('Get Email')
        it('should return email address from getEmail()', ()=> {
            expect(employee.getEmail()).toBe('stick@gmail.com');
        });
    describe('Get Role')
        it('should return Employee from getRole()', ()=> {
            expect(employee.getRole()).toBe('Employee');
        });   
    });
});