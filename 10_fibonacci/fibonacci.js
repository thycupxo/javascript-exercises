const fibonacci = function (num) {
  //convert to number
  if (typeof num === "string") {
    Number(num);
  } else if (num < 0) {
    return 'OOPS';
  }

  const fibonacciArray = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  return fibonacciArray[num]
};

module.exports = fibonacci;
