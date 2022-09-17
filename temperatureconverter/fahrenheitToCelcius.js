// RULE FOR CONVERSION subtract 32 and multiply by . 5556

function fahrenheitToCelsius(input) {
  if (!input) throw new Error("Input is undefined");
  return (input - 32) * 0.5556;
}

module.exports = fahrenheitToCelsius;
