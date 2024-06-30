// https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let roblatest = 0;
  let robPrev = 0;

  for (let num of nums) {
    let temp = Math.max(roblatest, num + robPrev);
    robPrev = roblatest;
    roblatest = temp;
  }
  return roblatest;
};
