const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const numb = parseFloat(sampleActivity);
  if (arguments.length == 0 || Number.isNaN(numb) || sampleActivity.length == 0 || !(typeof sampleActivity == 'string')) return false;
  if (numb >= 15 || numb <= 0) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(15 / numb) / k;
  return Math.ceil(t); 
}

module.exports = {
  dateSample
};
