// Engineer subclass

const Employee = require('./Employee'); // import PARENT class Employee

class Engineer extends Employee { 
    constructor(name, id, email, githubUsername) { // constructor
        super(name, id, email); //inheret properties of PARENT class Employee
        this.githubUsername = githubUsername;
    }

    getGithub() { // method to get Github Username
        return this.githubUsername;
    }

    getRole() { // Method to override role to Engineer
        return 'Engineer';
    }
}

module.exports = Engineer; // export Engineer class