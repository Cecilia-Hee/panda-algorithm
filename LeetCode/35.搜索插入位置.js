/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找 

// 套用二分法即可，即不断用二分法逼近查找第一个大于等于 \textit{target}target 的下标 
var searchInsert = function(nums, target) {
  if(!nums.length) return 0;
  let n = nums.length;
  let left = 0;
  let right = n-1;
  let res = n;
  while(left <=right) {
    let mid = Math.floor((right-left)/2) + left;  // 灵魂一笔，这样的mid就是在原来数组中对应的位置
    if(nums[mid] >= target) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid+1;
    }
  }
  return res;
};
// @lc code=end

