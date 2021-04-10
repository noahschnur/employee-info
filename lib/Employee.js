class Employee {
    constructor(name = "") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${employee.name}`;
    }

    getId() {
        return `${employee.id}`;
    }

    getEmail() {
        return `${employee.email}`;
    }

    getRole() {
        return "Employee";
    }

    // name
    // id
    // email
    // getName()
    // getId()
    // getEmail()
    // getRole(), returns "Employee"
}

module.exports = Employee;