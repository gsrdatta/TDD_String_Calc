const add = require("./stringCalculator");

//Handle empty String
test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

//Handle single number
test("returns the number itself when only one number is provided", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

//Handle 2 numbers seperated by comma
test("returns sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
  expect(add("10,20")).toBe(30);
});
