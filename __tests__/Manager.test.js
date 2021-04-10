const Manager = require("../lib/Manager");

test("creates new manager object", () => {
    const manager = new Manager("");

    expect(manager.office).toEqual(expect.any(Number));
})

test("get role as 'manager'", () => {
    const engineer = new Engineer("");

    expect(engineer.getRole()).toBe("Manager");
});