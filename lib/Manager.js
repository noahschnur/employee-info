const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = "") {
        super(name);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    // officeNumber
    // getRole(), overridden to return "Manager"
}



module.exports = Manager;