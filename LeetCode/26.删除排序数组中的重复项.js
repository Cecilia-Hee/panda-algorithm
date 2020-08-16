/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(!nums.length || nums.length === 1) return nums;
  let i=0;
  let j=1;
  while(j<=nums.length) {
    if(nums[i] === nums[j]) {
      j++;
    } else {
      // console.log(nums, i, j)
      nums.splice(i, j-i-1);
      // console.log(nums, i, j)
      i++;
      j=i+1;
    }
  }
  // return nums

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end