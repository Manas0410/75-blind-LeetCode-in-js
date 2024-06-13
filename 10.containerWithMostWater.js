// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let mostw = -Infinity;
  while (l < r) {
    mostw = Math.max(mostw, Math.min(height[l], height[r]) * (r - l));
    l <= r ? (l += 1) : (r -= 1);
  }
  return mostw;
};
