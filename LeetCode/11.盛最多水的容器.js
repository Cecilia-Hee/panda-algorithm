/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if(!height || height.length < 2) return 0;
  const length = height.length;
  let max = 0;
  let s = 0;
  let e = length - 1;
  while(e - s >= 1) {
    let area = 0;
    if(height[e] > height[s]) {
      area = (e-s) * height[s];
      s++;
    } else {
      area = (e-s) * height[e];
      e--;
    }
    max = Math.max(max, area)
  }
  return max;

};
// @lc code=end

