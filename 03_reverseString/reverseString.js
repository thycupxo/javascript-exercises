const reverseString = function (input) {
  let givenString = input.split("");

  let reversed = givenString.reverse();
  let result = reversed.join("");
  return result;

};


module.exports = reverseString;
