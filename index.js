const employee = require("./lib/Employee.js");
const manager = require("./lib/Manager.js");
const intern = requrie("./lib/Intern.js");
const engineer = require("lib/Engineer.js");
const run = require("./src.htmlTemplate.js");
const inquirer = require("inquirer");

// inquirer for name, roll, id number, email, 
// officeNumber (manager), github (engineer), school (intern)

const employeeInfo = employeeData => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this employee's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name for this employee");
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "What is this employee's ID number? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID number for this employee");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is this employee's email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email address for this employee");
                    return false;
                }
            }
        }
    ]);
};

const managerInfo = managerData => {
    return inquirer.prompt([
        {
            type: "number",
            name: "office",
            message: "What is this manager's office number? (Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter an office number for this manager");
                    return false;
                }
            }
        }
    ]);
};

const engineerInfo = engineerData => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is this engineer's GitHub usename? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter a GitHub username for this engineer");
                    return false;
                }
            }
        }
    ]);
};

const internInfo = internData => {
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Where does this intern go to school? (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter a school for this intern");
                    return false;
                }
            }
        }
    ]);
};

new run().initializeRun();