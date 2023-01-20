const convertToCelsius = function(tempatureF) {

  return tempatureC = (Math.ceil((tempatureF-32) * (5/9) * 10))/10;

};

const convertToFahrenheit = function(tempatureC) {

  return tempatureF = (Math.ceil(((tempatureC * (9/5)) + 32) * 10))/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
