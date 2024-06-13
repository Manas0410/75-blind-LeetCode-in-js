// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // creating result array
  const res = new Array(nums.length).fill(1);

  // calculating prefix and storing them in res
  // res[i] = prefix product of res[i]
  let pre = 1;
  for (let i in nums) {
    res[i] = pre;
    pre *= nums[i];
  }

  // calculating postfix and multiply them with prefix and store them
  // res[i] = postfix product of i * prefix prod of i stored at res[i]
  let post = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= post;
    post *= nums[i];
  }

  return res;
};
