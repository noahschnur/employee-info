const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = "") {
        super(name);

    }

    // github   username
    // getGithub()
    // getRole(), overridden to return "Engineer"
}

module.exports = Engineer;