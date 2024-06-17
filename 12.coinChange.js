/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return [];
  if (amount < 0) return null;
  let soln = null;
  for (let coin of coins) {
    let temp;
    if (coinChange(coins, amount - coin)) {
      temp = [...coinChange(coins, amount - coin), coin];
    }
    if (!soln || soln.length > temp) {
      soln = [...temp];
    }
  }
  return soln;
};
console.log(coinChange([1, 2, 5], 11));
