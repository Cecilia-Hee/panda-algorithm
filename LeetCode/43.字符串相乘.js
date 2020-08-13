/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 // 用纯数学的解法，将计算结果放在一个数组中
// 从第一位开始两两相乘，如果遇到大于10的结果，则向后进一位
// 最后把得到的结果翻转过来即可

var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0';
  let res = [];
  let level = 0

  for(let i=0; i<num1.length; i++) {
    let tmp1 = parseInt(num1[num1.length - 1 - i])
    for(let j=0; j<num2.length; j++) {
      let tmp2 = parseInt(num2[num2.length - 1 - j]);
      let pos = res[i+j] ? res[i+j]+tmp1*tmp2 : tmp1*tmp2;
      res[i+j] = pos % 10;
      if(pos >= 10) {
        let sub = Math.floor(pos / 10)
        res[i+j+1] = res[i+j+1] ? res[i+j+1] + sub : sub;
      }
    }  
  }
  return res.reverse().join("");
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = multiply;
// @after-stub-for-debug-end