const add = function (a, b) {
  a + b;
  return a + b
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  // calculate numbers in array
  // 1, 3, 5 => 1 + 3 + 5

  defaultNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    defaultNumber += numbers[i]
  }
  return defaultNumber;
};

const multiply = function (numbers) {
  startNumber = 1;
  for (let i = 0; i < numbers.length; i++) {
    startNumber *= numbers[i]
  }
  return startNumber
};


const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  if (number < 0) return -2;
  else if (number == 0) return 1;
  else {
    return (number * factorial(number - 1))
  }
};

console.log(factorial(5));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
