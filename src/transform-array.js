const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let copy = [...arr];
  let arrLength = copy.length;
  let result = [];
  for (let i = 0; i < copy.length; i++) {
    result[i] = copy[i];
    if (copy[i] === "--discard-next" && i + 1 < arrLength) {
      copy[i + 1] = "--discarded";
      continue;
    }
    if (copy[i] === "--discard-prev" && i > 0) {
      result[i - 1] = "--discarded";
      continue;
    }
    if (copy[i] === "--double-next" && i + 1 < arrLength) {
      result[i] = copy[i + 1];
      continue;
    }
    if (copy[i] === "--double-prev" && i > 0) {
      result[i] = copy[i - 1];
    }
  }
  return result.filter((el) => !["--discarded", "--discard-next", "--discard-prev", "--double-next", "--double-prev"].includes(el));
}

module.exports = {
  transform,
};
