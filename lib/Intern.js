const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = "") {
        super(name);

        this.school = school;  
    }

    getSchool() {
        return `${intern.school}`;
    }

    getRole() {
        return "Intern";
    }

    // school
    // getSchool()
    // getRole, overridden to return "Intern"
}




module.exports = Intern;