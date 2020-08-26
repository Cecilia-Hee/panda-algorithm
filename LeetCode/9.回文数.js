/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 解法1： 整数转换为字符串，双指针
var isPalindrome = function(x) {
  let xx = x.toString()
  if(!xx.length) return true;

  let left = 0;
  let right = xx.length - 1;
  while(left <= right) {
    if(xx[left] === xx[right]) {
      left ++;
      right --;
    } else {
      return false;
    }
  }
  return true;

};

// 解法2：不转换为字符串的解法
var isPalindrome = function(x) {
  let res = 0;
  while(x !== 0) {
    
  }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end