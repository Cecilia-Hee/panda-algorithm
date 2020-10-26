/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
      const hasVal = map.has(nums[i]);
      if(!hasVal) {
        map.set(target - nums[i], i)
      } else {
        const otherIndex = map.get(nums[i])
        return [otherIndex, i]
      }
      
    }
};
// @lc code=end

