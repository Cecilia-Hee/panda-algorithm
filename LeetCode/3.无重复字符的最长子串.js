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
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const map = new Map()
  for(right=0; right<s.length; right ++) {
    const isHas = map.has(s[right]);
    if(isHas) {
      // 把left移动到出现位置的下一个
      // left = map.get(s[right]) + 1
      left = Math.max(left, map.get(s[right]) + 1);     // 可能有间隔相同的数字，是需要移动到最大的位置
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right-left+1)
  }
  return maxLength
};

// @lc code=end

