/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解法1，双指针，时间复杂度是n
var moveZeroes = function(nums) {
  if(!nums.length) return [];
  
  let start = 0;
  let n = nums.length
  let end = n-1;
  while(start < end) {
    if(nums[start] === 0) {
      nums.splice(start, 1);
      nums.push(0)
      end --;
    } else {
      start ++;
    }
  }
};

// 解法2： 依据sort搞定: nlogn
var moveZeroes = function (nums) {
  nums.sort((a, b) => b===0 ? -1 : 0)
}

// @lc code=end

