/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 解法1：没太懂为啥？？？ 
var canJump = function(nums) {
  let k=0;
  for(let i=0; i<nums.length; i++) {
    if(i > k) return false;
    k = Math.max(k, i+nums[i])
  }
  return true;
};
// @lc code=end

