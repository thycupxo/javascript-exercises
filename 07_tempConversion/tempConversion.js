const ftoc = function (Fahrenheit) {
  let result = (Fahrenheit - 32) * (5 / 9)
  return Math.round(result * 10) / 10
};

const ctof = function (Celcius) {
  let result = (Celcius * (9 / 5)) + 32
  return Math.round(result * 10) / 10
};

module.exports = {
  ftoc,
  ctof
};
