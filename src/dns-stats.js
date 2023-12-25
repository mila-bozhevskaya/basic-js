const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    const stepArr = domains[i]
      .split(".")
      .reverse()
      .map((i) => `.${i}`);
    stepArr.map((item, indx) => {
      res[`${stepArr.slice(0, indx + 1).join("")}`] = 0;
      return item;
    });
    arr.push(stepArr.join(""));
  }
  const keys = Object.keys(res);
  for (let i = 0; i < arr.length; i++) {
    keys.map((item) => {
      res[item] = res[item] + (arr[i].includes(item) ? 1 : 0);
    });
  }
  return res;
}

module.exports = {
  getDNSStats,
};
