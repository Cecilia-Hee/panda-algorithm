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

// 解法2：用数字翻转的解法
var isPalindrome = function(x) {
  let res = 0;
  let xx = x;
  if(xx < 0) return false;  // 如果是负数就直接返回
  if(xx % 10 == 0 && xx != 0) return false;   // 类似于20，30这种，就直接返回，这样的肯定不是回文数
  while(xx !== 0) {
    res = res * 10 + xx % 10;
    // console.log(res)
    xx = Math.floor(xx / 10);
  }
  // console.log(res, x)
  return x == res;
}


// 解法3： 只翻转一半的数字
var isPalindrome = function (x) {
  let res = 0;
  if(x < 0) return false;  // 如果是负数就直接返回
  if(x % 10 == 0 && x != 0) return false;   // 类似于20，30这种，就直接返回，这样的肯定不是回文数

  while(x > res) {
    res = res * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  console.log(res, x)
  return x == res || x == Math.floor(res / 10)    // 奇数需要除以10，偶数就直接相等
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end