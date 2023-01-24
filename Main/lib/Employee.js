// Employee Parent Class

class Employee {
    constructor(name, id, email) { // construtor for Employee
        this.name = name; //assigns appropriate properties 
        this.id = id;
        this.email = email;
    }
    
    getName() { // method to get employee name
        return this.name;
    }

    getId() { // method to get employee Id
        return this.id;
   }

   getEmail() { // method to get employee Email
        return this.email;
   }

   getRole() { // method to get role
        return 'Employee'
   }
}

module.exports = Employee; // export Employee class