const convertToCelsius = function(temperature) {
  let tempFahrenheit = 0.00;
  tempFahrenheit = Math.round((temperature - 32) * (5/9) * 10) / 10;
  return tempFahrenheit;
};

const convertToFahrenheit = function(temperature) {
  let tempCelsius = 0.00;
  tempCelsius = Math.round(((temperature * (9/5) + 32) * 10)) / 10;
  return tempCelsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
