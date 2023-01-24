// Manager subclass

const Employee = require('./Employee'); // import PARENT class Employee

class Manager extends Employee { //manager is child of employee class
    constructor(name, id, email, officeNumber) { // constructor
        super(name, id, email); //inheret properties of PARENT class Employee
        this.officeNumber = officeNumber;
    }

      getRole() { // Method to override role to Manager
        return 'Manager';
    }
}

module.exports = Manager; // export Mangager class