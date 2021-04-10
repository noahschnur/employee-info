const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = "") {
        super(name);

        this.github = github;
    }

    getEmail() {
        return `${engineer.github}`;
    }

    getRole() {
        return "Engineer";
    }

    // github   username
    // getGithub()
    // getRole(), overridden to return "Engineer"
}





module.exports = Engineer;