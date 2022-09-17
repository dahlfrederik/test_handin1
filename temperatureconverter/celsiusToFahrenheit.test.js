const celsiusToFahrenheit = require("./celsiusToFahrenheit.js");

test("Positive number: Input = 20 degree celsius", () => {
  const celsiusInput = 20;
  const expectedFahrenheit = 68;
  const convertedCelsius = celsiusToFahrenheit(celsiusInput);

  expect(convertedCelsius).toBeCloseTo(expectedFahrenheit);
});

test("Negative number: Input = -20 degree celsius", () => {
  const celsiusInput = -20;
  const expectedFahrenheit = -4;
  const convertedCelsius = celsiusToFahrenheit(celsiusInput);

  expect(convertedCelsius).toBeCloseTo(expectedFahrenheit);
});

test("Undefined input", () => {
  const celsiusInput = undefined;
  expect(() => celsiusToFahrenheit(celsiusInput)).toThrow(Error);
});
