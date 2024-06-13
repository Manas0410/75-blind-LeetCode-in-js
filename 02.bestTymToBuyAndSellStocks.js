// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = -1;
  for (let p of prices) {
    if (p < min) {
      min = p;
    }
    maxProfit = Math.max(maxProfit, p - min);
  }
  return maxProfit;
};
