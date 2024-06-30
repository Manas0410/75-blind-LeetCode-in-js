/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  );
};

const helper = (nums) => {
  let rob1 = 0;
  let rob2 = 0;
  for (let num of nums) {
    let temp = Math.max(rob2, rob1 + num);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};
//  just same as house robber
