const repeatString = function (word, freq) {
  let result = "";
  if (freq < 0) return "ERROR"

  for (let i = 0; i < freq; i++) {
    result = word.repeat(freq);
  }
  return result;
}

// module.exports = repeatString;
