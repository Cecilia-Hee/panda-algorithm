/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let res = []
  let sub = 1;
  for(let i=digits.length-1; i>=0; i--) {
    let sum = digits[i] + sub;
    console.log(Math.floor(sum / 10))
    if(sum >= 10) {
      sub = Math.floor(sum / 10)
      sum = sum % 10;     
    } else {
      sub = 0;
    }
    res.unshift(sum);
  }
  console.log(sub)
  if(sub > 0) {
    res.unshift(sub)
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end