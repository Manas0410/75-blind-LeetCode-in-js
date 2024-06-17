// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
  if (n < 2) return 1;
  if (n in memo) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

// location /admin {
//         alias /var/www/vss/html/;
//         index index.html index.htm index.nginx-debian.html;
//         try_files $uri $uri/ =404;
//     }
