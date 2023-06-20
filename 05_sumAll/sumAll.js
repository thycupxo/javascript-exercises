const sumAll = function (x, y) {
  // create a variable to hold the final sum
  let allNumberArray = []

  // swap x and y if y is greater than x
  if (x > y) {
    [x, y] = [y, x]
  }

  // return error if x and y are negative
  if (x < 0 || y < 0) {
    return 'ERROR'
  }
  // return error if x and y are not numbers
  else if (typeof x !== 'number' || typeof y !== 'number') {
    return 'ERROR'
  } else {
    for (let i = x; i <= y; i++) {
      allNumberArray.push(i)
    }
    return allNumberArray.reduce((a, b) => a + b, 0)
  }
};

module.exports = sumAll;
