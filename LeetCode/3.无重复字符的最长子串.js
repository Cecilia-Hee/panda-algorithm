/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 子串，必须是连续的
// 解法1，滑动窗口, 时间复杂度n, 空间复杂也是n,因为新建了一个map
var lengthOfLongestSubstring = function(s) {
  if(!s) return '';
  const map = new Map();    // map里存储，字母和它出现的位置
  let left = 0;
  let right = 0;
  let count = 0;
  for(;right < s.length; right++) {
    const letter = s[right]
    const isHas = map.has(letter);
    if(isHas) {
      left = Math.max(left, map.get(letter) + 1);
    }
    map.set(letter, right);    
    count = Math.max(count, right - left + 1)
  }
  return count;
};

// @lc code=end

