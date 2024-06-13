// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {};
  for (let num of nums) {
    if (num in dict) return true;
    dict[num] = "manas";
  }
  return false;
};
