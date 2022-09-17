const fahrenheitToCelsius = require("./fahrenheitToCelcius");

test("Positive number: Input = 68 degree fahrenheit", () => {
  const fahrenheitInput = 68;
  const expectedCelsius = 20;
  const convertedFahrenheit = fahrenheitToCelsius(fahrenheitInput);

  expect(convertedFahrenheit).toBeCloseTo(expectedCelsius);
});

test("Negative number: Input = -68 degree fahrenheit", () => {
  const fahrenheitInput = -68;
  const expectedCelsius = -55.5555556;
  const convertedFahrenheit = fahrenheitToCelsius(fahrenheitInput);

  expect(convertedFahrenheit).toBeCloseTo(expectedCelsius);
});

test("Undefined input", () => {
  const fahrenheitInput = undefined;
  expect(() => fahrenheitToCelsius(fahrenheitInput)).toThrow(Error);
});
