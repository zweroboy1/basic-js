const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != "string") {
    str = String(str);
  }
  let repeatTimes = options.repeatTimes || 0;
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";
  let addition = options.addition === undefined ? "" : options.addition;
  if (typeof addition !== "string") {
    addition = "" + addition;
  }

  const strWithAddition =
    additionRepeatTimes === 0 ? str + addition : str + Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = repeatTimes === 0 ? strWithAddition : Array(repeatTimes).fill(strWithAddition).join(separator);
  return result;
}

module.exports = {
  repeater,
};
