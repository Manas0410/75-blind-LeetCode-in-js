// https://leetcode.com/problems/maximum-product-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = -Infinity;
  let cmin = 1;
  let cmax = 1;
  for (let num of nums) {
    let temp = cmax * num;
    cmax = Math.max(cmin * num, cmax * num, num);
    cmin = Math.min(cmin * num, temp, num);
    max = Math.max(max, cmax);
  }
  return max;
};
