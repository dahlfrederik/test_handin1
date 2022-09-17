function celsiusToFahrenheit(input) {
  if (!input) throw new Error("Input is undefined");
  return input * 1.8 + 32;
}

module.exports = celsiusToFahrenheit;
