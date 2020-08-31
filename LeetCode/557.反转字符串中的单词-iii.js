/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 解法1， 使用API来解决 
var reverseWords = function(s) {
  if(!s) return ''

  const arr = s.split(" ");
  const res = []
  for(let i=0; i<arr.length; i++) {
    res.push(arr[i].split("").reverse().join(""));   
  }
  // console.log(res.join(" "))
  return res.join(" ");
};

// 解法2：开辟一段空间，长度和原始字符串长度一样；
// 遍历这个字符串，当遇到空格时，就得到了上一个字符串的起止位置，
// 然后根据这个起止位置，将字符串逆序放进新的字符串里
// 时间复杂度：O(N)O(N)，其中 NN 为字符串的长度。原字符串中的每个字符都会在 O(1)O(1) 的时间内放入新字符串中
// 空间复杂度：O(N)O(N)。我们开辟了与原字符串等大的空间
var reverseWords = function (s) {  
  if(!s) return ''

  const res = [];
  let i = 0;
  const length = s.length
  

  while(i < length) {
    let start = i;

    while(i < length && s.charAt(i) !== ' ') {
      i++;
    }

    for(let j=start; j<i; j++) {
      res.push(s.charAt(i+start - 1 - j))
    }

    while(i < length && s.charAt(i) === ' ') {
      i++;
      res.push(" ")
    }
  }

  // console.log(res.join(""))
  return res.join("")
}


// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end