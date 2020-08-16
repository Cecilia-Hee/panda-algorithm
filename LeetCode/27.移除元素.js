/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 解法1. 先排序，再移除
// var removeElement = function(nums, val) {
//   nums = nums.sort((a, b) => a-b)
//   let i= nums.indexOf(val);
//   if(i === -1) return;
  
//   let j = i+1;
//   while(j<= nums.length) {
//     if(nums[j] !== nums[i]) {  
//       nums.splice(i, j-i);
//       // console.log(i, j, nums)
//       break;
//     } else {
//       j++;
//     }
//   }
// };

// 解法2，直接移除
var removeElement = function(nums, val) {
  for(let i=0; i<nums.length;) {
    if(nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length;
}
// @lc code=end

