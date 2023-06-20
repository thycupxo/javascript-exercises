const palindromes = function (input) {
  let inputLowercase = input.toLowerCase();
  const originalString = inputLowercase.replace(/\W|_/g, '').split("");
  let inputReverse = inputLowercase.replace(/\W|_/g, '').split("").reverse();

  for (let i = 0; i < originalString.length; i++) {
    if (originalString[i] !== inputReverse[i]) {
      return false;
    }
  }
  return true;

};
module.exports = palindromes;
