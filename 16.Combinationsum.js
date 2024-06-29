/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//   const dp = new Array(target + 1).fill([]);
//   dp[0] = [[]];
//   for (let i = 0; i <= target; i++) {
//     if (dp[i].length > 0) {
//       for (let j = 0; j < candidates.length; j++) {
//         if (i + candidates[j] <= target) {
//           dp[i + candidates[j]] = [
//             ...dp[i + candidates[j]],
//             ...dp[i].map((item) => [...item, candidates[j]]),
//           ];
//         }
//       }
//     }
//   }
//   return dp[target];
// };
// console.log(combinationSum([2, 3, 6, 7], 7));

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (target === 0) return [[]];
  if (target < 0) return [];
  let arr = [];
  for (let i = 0; i < candidates.length; i++) {
    let rem = target - candidates[i];
    let ans = combinationSum(candidates.slice(i), rem);
    for (let subArray of ans) {
      arr.push([candidates[i], ...subArray]);
    }
  }

  return arr;
};

console.log(combinationSum([2, 3, 6, 7], 7));
