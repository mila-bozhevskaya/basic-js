const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine([...args]) {
  const result = [];
  let controlArr = [];
  args.forEach((el, i) => {
    if (controlArr[0] === el) controlArr[1] = controlArr[1] + 1;
    else {
      result.push(controlArr[1] == 1 ? "" : controlArr[1], controlArr[0]);
      controlArr = [el, 1];
    }
    if (i == args.length - 1)
      result.push(controlArr[1] == 1 ? "" : controlArr[1], controlArr[0]);
  });
  return result.join("");
}

module.exports = {
  encodeLine,
};
