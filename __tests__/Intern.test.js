const Intern = require("../lib/Intern");

test("creates new intern object", () => {
    const intern = new Intern("");

    expect(intern.school).toEqual(expect.any(String));
});

test("get intern's github usernam as an object", () => {
    const intern = new Intern("");

    expect(intern.getSchool()).toHaveProperty("school");
});

test("get role as 'intern'", () => {
    const intern = new Intern("");

    expect(intern.getRole()).toBe("Intern");
});