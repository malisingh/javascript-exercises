const convertToCelsius = function (temp) {
  var newTemp = (temp - 32) * (5 / 9);
  var roundedC = Math.round(newTemp * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
