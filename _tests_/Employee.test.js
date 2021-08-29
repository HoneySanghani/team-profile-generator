const Employee = require("../lib/Employee");
const emp = new Employee("Sanghani", "78945", "sanghani@gmail.com");

test("it should get the constructor values for the Employee object", () => {
  expect(emp.name).toBe("Sanghani");
  expect(emp.id).toBe("78945");
  expect(emp.email).toBe("sanghani@gmail.com");
});

test("it should get the name from the getName() method", () => {
  expect(emp.getName()).toBe("Sanghani");
});

test("it should get the id from the getId() method", () => {
  expect(emp.getId()).toBe("78945");
});

test("it should get the email from the getEmail() method", () => {
  expect(emp.getEmail()).toBe("sanghani@gmail.com");
});

test("it should we can get the role from the getRole() method", () => {
  expect(emp.getRole()).toBe("Employee");
});