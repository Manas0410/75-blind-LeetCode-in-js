// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    mid = Math.floor((l + r) / 2);
    console.log(nums[l], nums[r], nums[mid]);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else r = mid;
  }
  return nums[l];
};
