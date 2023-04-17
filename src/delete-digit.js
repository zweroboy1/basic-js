const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let candidates = [];
  let string = "" + n;
  for (let i = 0; i < string.length; i++) {
    candidates.push(+(string.slice(0, i) + string.slice(i + 1, string.length)));
  }
  return Math.max(...candidates);
}

module.exports = {
  deleteDigit,
};
