/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 解法1： dp[i] = max(dp[i+i]-dp[i], dp[i+2]-dp[i], ..., dp[n-1]-dp[i])
// var maxProfit = function(prices) {
//   if(!prices.length) return 0;

//   const n = prices.length;

//   const dp = new Array(n).fill(0);

//   for(let i=0; i<n; i++) {
//     for(let j=i+1; j<n; j++) {
//       dp[i] = Math.max(dp[i], prices[j]-prices[i]);
//     }
//   }

//   const max = Math.max.apply('', dp);
//   // console.log(dp)
//   // console.log(max)
//   return max;

// };

// 解法2： 
var maxProfit = function(prices) {
  if(!prices.length) return 0;
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for(let i=0; i<prices.length; i++) {
    let gap = prices[i] - min;
    if(gap < 0) {
      min = prices[i]
    }
    if(gap > max) {
      max = gap;
    }
  }
  return max;
}
// @lc code=end

