const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    const inDepth =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const recursiveDepth = this.calculateDepth(arr[i], inDepth + 1);
        depth = depth > recursiveDepth ? depth : recursiveDepth;
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
