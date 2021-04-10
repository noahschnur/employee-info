const Engineer = require("../lib/Engineer");

test("creates new engineer object", () => {
    const engineer = new Engineer("");

    expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer's github usernam as an object", () => {
    const engineer = new Engineer("");

    expect(engineer.getGithub()).toHaveProperty("github");
});

test("get role as 'engineer'", () => {
    const engineer = new Engineer("");

    expect(engineer.getRole()).toBe("Engineer");
});