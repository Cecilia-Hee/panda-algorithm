/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let prev = 0;
  let max = nums[0];
  nums.forEach((item) => {
    prev = Math.max(item, prev+item)
    max = Math.max(prev, max)
  })
  return max;
};
// @lc code=end

