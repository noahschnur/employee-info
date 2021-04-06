const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = "") {
        super(name);


    }

    // officeNumber
    // getRole(), overridden to return "Manager"
}

module.exports = Manager;