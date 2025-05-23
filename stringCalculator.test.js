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

//Handle morethan 2 numbers, Unknown no.of numbers
test("returns sum of multiple numbers separated by a comma", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("5,10,15,20")).toBe(50);
});

//Handle New Line as Delimiter
test("handles new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("10\n20\n30")).toBe(60);
});

//Support for custom delimiters
test("supports custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n4|5|6")).toBe(15);
  expect(add("//*\n4*5*6")).toBe(15);
});

//Handle Negative Numbers
test("throws an error for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  expect(() => add("-1,-2,-3")).toThrow("negative numbers not allowed: -1,-2,-3");
  expect(() => add("//*\n4*5*6*-1")).toThrow("negative numbers not allowed: -1");
});
