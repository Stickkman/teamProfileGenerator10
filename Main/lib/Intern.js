// Intern subclass

const Employee = require('./Employee'); // import PARENT class Employee

class Intern extends Employee { 
    constructor(name, id, email, school) { // constructor
        super(name, id, email); //inheret properties of PARENT class Employee
        this.school = school;
    }

    getSchool() { // method to get school
        return this.school;
    }

    getRole() { // Method to override role to Intern
        return 'Intern';
    }
}

module.exports = Intern; // export Engineer class