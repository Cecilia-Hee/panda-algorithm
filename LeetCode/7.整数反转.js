/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

// 解法1： 普通数字做法 
var reverse = function(x) {
  let xx = x.toString();
  if(x<0) {
    xx = xx.substring(1)
  }
  
  xx = xx.split("").reverse().join("")
  xx = parseInt(xx)
  if(x < 0) {
    return xx <= 2**31 ? -xx : 0 
  } else {
    return xx < 2**31 ? xx: 0
  }
};

// 解法2：位运算
// | : 两个位只要有一个为1，那么结果都为1。否则就为0
// x / 10 去除末位，| 0 强制转换为32位有符号整数。
// 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）
var reverse = function(x) {
  let res = 0;
  while(x !== 0) {
    res = res * 10 + (x%10)
    x = (x / 10) | 0    // 保证了结果是32位
  }
  console.log(res)
  return (res | 0) === res ? res : 0;
}
// @lc code=end

