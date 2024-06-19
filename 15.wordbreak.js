// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict, memo = {}) {
  if (s.length === 0) return true;
  if (s in memo) return memo[s];

  for (let word of wordDict) {
    if (s.indexOf(word) === 0) {
      memo[s] = wordBreak(s.slice(word.length), wordDict, memo);
      if (memo[s]) return true;
    }
  }

  return false;
};
