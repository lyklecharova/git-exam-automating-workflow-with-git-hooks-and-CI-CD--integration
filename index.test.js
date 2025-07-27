const { add, subtract } = require("./index");

describe("Calculator functions", () => {
  test("add function should correctly add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract function should correctly subtract two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 0)).toBe(10);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("this test should intentionally fail for demonstration", () => {
    expect(add(1, 1)).toBe(2);
  });
});
