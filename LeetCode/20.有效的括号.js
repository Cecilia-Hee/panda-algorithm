/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s) return true;
  if(s.length % 2 !== 0) return false;  // 如果长度为单数，一定不是
  const stack = [];   // 栈
  for(let i=0; i<s.length; i++) {
    const letter = s[i];
    switch (letter) {
      case '(':
        stack.push(letter)
        break;
      case '[':
        stack.push(letter)
        break;
      case '{':
        stack.push(letter)
        break;
      case ')':
        var top = stack.pop();
        if(top !== '(') return false;
        break;
      case ']':
        var top = stack.pop();
        if(top !== '[') return false;
        break;
      case '}':
        var top = stack.pop();
        if(top !== '{') return false;
        break;
      default:
        break;
    }
  }
  return !stack.length;
};
// @lc code=end

