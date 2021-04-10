const run = require("./src/htmlTemplate.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { validate } = require("@babel/types");

// Inquirer for Employee base info
function employeeInfo() {
    inquirer.prompt([
        {
            // Pick type of employee and send to proper section to finnish building the card
            type: "list",
            name: "title",
            message: "What kind of employee is this?",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ]).then( answers => {
        switch (answers.title) {
              case "Manager":
                  managerInfo(answers);
                  break;
              case "Engineer":
                  engineerInfo(answers);
                  break;
              case "Intern":
                  internInfo(answers);
                  break;
              default:
                  writeToFile();
          }
        });

    // Inquirer for Manager
    function managerInfo(answers) {
        inquirer.prompt([
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
            },
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
            },
            {
                type: "confirm",
                name: "addMore",
                message: "Do you have any more employees to add?",
                default: false,
                validate: addMoreConfirm => {
                    if (addMoreConfirm) {
                        employeeInfo();
                    } else {
                        writeToFile();
                    }
                    
                }
            }
        ])
    };

    // Inquirer for Engineer
    function engineerInfo() {
        inquirer.prompt([
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
            },
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
            },
            {
                type: "confirm",
                name: "addMore",
                message: "Do you have any more employees to add?",
                default: false,
                validate: addMoreConfirm => {
                    if (addMoreConfirm) {
                        employeeInfo();
                    } else {
                        writeToFile();
                    }
                }
            },
        ]);
    };

    // Inquirer for Intern
    function internInfo() {
        inquirer.prompt([
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
            },
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
            },
            {
                type: "confirm",
                name: "addMore",
                message: "Do you have any more employees to add?",
                default: false,
                validate: addMoreConfirm => {
                    if (addMoreConfirm) {
                        employeeInfo();
                    } else {
                        writeToFile();
                    }
                }
            },
        ]);
    };
};

// Create index.html
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        }
        console.log("index.html created")
    })
};

// Run index to initialize
employeeInfo();