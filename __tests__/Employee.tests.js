const { expect, jest } = require("@jest/globals");
const Employee = require("../lib/Employee");

jest.mock("../lib/Employee.js");

test("creates new employee object", () => {
    const employee = new Employee("");

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(expect(any(String)));
});

test("get employee's name as an object", () => {
    const employee = new Employee("");

    expect(employee.getName()).toHaveProperty("name");
});

test("get employee's id value as a string", () => {
    const employee = new Employee("");

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("get employee's email as an object", () => {
    const employee = new Employee("");

    expect(employee.getEmail()).toHaveProperty("email");
});

test("get role as 'employee'", () => {
    const employee = new Employee("");

    expect(employee.getRole()).toBe("Employee");
});


// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole(), returns "Employee"