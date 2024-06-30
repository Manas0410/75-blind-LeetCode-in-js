// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, memo = {}) {
  if (m < 1 || n < 1) return 0;
  if (m == 1 && n == 1) return 1;
  let key = `${m},${n}`;
  if (key in memo) return memo[key];

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);

  return memo[key];
};
