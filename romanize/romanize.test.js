const romanize = require("./romanize.js");

//https://en.wikipedia.org/wiki/Roman_numerals#Standard_form

test("Romanize number. Input = 1", () => {
  const input = 1;
  const expectedResult = "I";
  const convertedNumber = romanize(input);

  expect(convertedNumber).toEqual(expectedResult);
});

test("Romanize number. Input = 2", () => {
  const input = 2;
  const expectedResult = "II";
  const convertedNumber = romanize(input);

  expect(convertedNumber).toEqual(expectedResult);
});

test("Romanize number. Input = 5", () => {
  const input = 5;
  const expectedResult = "V";
  const convertedNumber = romanize(input);

  expect(convertedNumber).toEqual(expectedResult);
});

test("Romanize number. Input = 10", () => {
  const input = 10;
  const expectedResult = "X";
  const convertedNumber = romanize(input);

  expect(convertedNumber).toEqual(expectedResult);
});

test("Romanize number. Input = 100", () => {
  const input = 100;
  const expectedResult = "C";
  const convertedNumber = romanize(input);

  expect(convertedNumber).toEqual(expectedResult);
});

test("Romanize number. Input = 132", () => {
  const input = 132;
  const expectedResult = "CXXXII";
  const convertedNumber = romanize(input);

  expect(convertedNumber).toEqual(expectedResult);
});

test("Romanize number. Input is 0", () => {
  const input = 0;
  expect(() => romanize(input)).toThrow(Error);
  expect(() => romanize(input)).toThrow("Input is not a number or undefined");
});

test("Romanize number. Negative input", () => {
  const input = -1;
  expect(() => romanize(input)).toThrow("Input is not a number or undefined");
});

test("Romanize number. No input", () => {
  const input = undefined;
  expect(() => romanize(input)).toThrow(Error);
  expect(() => romanize(input)).toThrow("Input is not a number or undefined");
});

test("Romanize number. Input is NaN", () => {
  const input = "Test";
  expect(() => romanize(input)).toThrow(Error);
  expect(() => romanize(input)).toThrow("Input is not a number or undefined");
});
