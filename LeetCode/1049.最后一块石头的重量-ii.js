/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

// 解法1：动态规划，0-1背包 
var lastStoneWeightII = function(stones) {
  const sSum = _.sum(stones);
  const n = stones.length;
  const volume = Math.floor(sSum / 2);

  const dp = Array(volume + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const tmp = stones[i];
    for (let j = volume; j >= tmp; j--) {
      dp[j] = Math.max(dp[j], dp[j - tmp] + tmp);
    }
  }

  return sSum - dp[volume] * 2;
};
// @lc code=end

