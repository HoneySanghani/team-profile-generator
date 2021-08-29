  
const Engineer = require("../lib/Engineer");

test("Creates an Engineer object", () => {
  const engr = new Engineer(
    "Honey",
    "12345",
    "honeysanghani98@gmail.com",
    "HoneySanghani"
  );

  expect(engr.name).toEqual("Honey");
  expect(engr.id).toEqual("12345");
  expect(engr.email).toEqual("honeysanghani98@gmail.com");
  expect(engr.github).toEqual("HoneySanghani");
});

test("Gets engineer's role", () => {
  const engr = new Engineer(
    "Honey",
    "12345",
    "honeysanghani98@gmail.com",
    "HoneySanghani"
  );

  expect(engr.getRole()).toEqual("Engineer");
});