/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 双端队列解法
var reverseWords = function(s) {
  // step1, 先去掉字符串两边的空格
  s = s.trim();
  let left = 0;
  let right = s.length - 1;
  let word = ''
  let res = []
  while(left <= right) {
    let char = s.charAt(left);
    if(char === ' ' && word){
      res.unshift(word);
      word = ''
    } else if(char !== ' ') {
      word += char
    }
    left++
  }
  res.unshift(word)
  return res.join(" ");
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end