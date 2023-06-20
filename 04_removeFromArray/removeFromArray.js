const removeFromArray = function (array, ...args) {
  return array.filter(val => !args.includes(val))
}


module.exports = removeFromArray;

