const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const set = "ABCDEF0123456789";
  const arr = n.split("-");
  const isMac =
    arr.length == 6 &&
    arr.filter(
      (i) => i.length !== 2 || !set.includes(i[0]) || !set.includes(i[1])
    ).length == 0;
  return isMac;
}
module.exports = {
  isMAC48Address,
};
