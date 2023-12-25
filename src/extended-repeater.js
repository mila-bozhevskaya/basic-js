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
  const {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;
  const string = `${str}`;
  const additionString = `${addition}`;
  let add = "";
  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      add =
        add +
        additionString +
        (i != additionRepeatTimes - 1 ? additionSeparator : "");
    }
  } else {
    add = additionString;
  }
  let result = "";
  if (!repeatTimes) return string + add;
  for (let i = 0; i < repeatTimes; i++) {
    result = result + string + add + (i != repeatTimes - 1 ? separator : "");
  }
  return result;
}

module.exports = {
  repeater,
};
