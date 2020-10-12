/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if(k==0 || !s) {
    return '';
  }
  let ans = '';
  const map = new Map();

  for(let i=0; i<s.length; i++) {
    const hasI = map.has(s[i]);
    if(!hasI) {
      map.set(s[i], 1)
    } else {
      const count = map.get(s[i]);
      map.set(s[i], count + 1);
    }
    const count = map.get(s[i]);
    ans += s[i];
    console.log(count, ans)
    if(count >= k) {
      return ans.length;
    }
  }
  return ''
};
// @lc code=end

