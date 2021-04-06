const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = "") {
        super(name);
        
    }

    // school
    // getSchool()
    // getRole, overridden to return "Intern"
}

module.exports = Intern;