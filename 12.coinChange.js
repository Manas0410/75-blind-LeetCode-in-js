/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var helper = function (coins, amount) {
  if (amount === 0) return [];
  if (amount < 0) return null;
  let soln = null;
  for (let coin of coins) {
    let temp;
    let remainingCoin = helper(coins, amount - coin);
    if (remainingCoin !== null) {
      temp = [...remainingCoin, coin];
      if (soln === null || soln?.length > temp.length) {
        soln = [...temp];
      }
    }
  }
  return soln;
};
console.log(helper([1, 2, 5], 20));

var memoHelper = function (coins, amount, memo = {}) {
  if (amount === 0) return [];
  if (amount < 0) return null;
  if (amount in memo) return memo[amount];
  let soln = null;
  for (let coin of coins) {
    let temp;
    memo[amount] = memoHelper(coins, amount - coin);
    if (memo[amount] !== null) {
      temp = [...memo[amount], coin];
      if (soln === null || soln?.length > temp.length) {
        soln = [...temp];
      }
    }
  }
  return soln;
};
