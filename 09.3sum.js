// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // Sort the array
  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the current position i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let remaining = -nums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      if (nums[l] + nums[r] === remaining) {
        res.push([nums[i], nums[l], nums[r]]);
        // Skip duplicates for the l and r positions
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (nums[l] + nums[r] > remaining) {
        r--;
      } else {
        l++;
      }
    }
  }

  return res;
};
