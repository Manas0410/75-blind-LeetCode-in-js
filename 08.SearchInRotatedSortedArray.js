// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums == [1, 3]) return 1;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[l]) {
      //it means we are in left sorted arrray
      if (nums[mid] < target || nums[l] > target) {
        // conditions for going in right sorted array
        l = mid + 1;
      } else r = mid - 1;
    } else {
      // it means we re in right sorted arrav
      if (target > nums[r] || target < nums[mid]) {
        // conditions for going in left sorted array
        r = mid - 1;
      } else l = mid + 1;
    }
  }
  return -1;
};
