/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 双指针
var isPalindrome = function(s) {
  if(!s) return true;
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  // console.log(s)
  let start = 0;
  let end = s.length - 1;
  while(start <= end) {
    if(s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

