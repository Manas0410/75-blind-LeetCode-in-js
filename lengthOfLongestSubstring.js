// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let unique = {};
  let largest = 0;
  for (let r = 0; r < s.length; r++) {
    if (s[r] in unique) {
      while (l < r) {
        if (s[l] === s[r]) {
          l += 1;
          break;
        }
        delete unique[s[l]];
        l += 1;
      }
    }
    unique[s[r]] = "cutu baby";
    largest = Math.max(largest, r - l + 1);
  }
  return largest;
};
