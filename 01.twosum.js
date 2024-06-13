// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = {};
  for (let i in nums) {
    if (String(target - nums[i]) in dict)
      return [i, dict[String(target - nums[i])]];
    dict[nums[i]] = i;
  }
};
