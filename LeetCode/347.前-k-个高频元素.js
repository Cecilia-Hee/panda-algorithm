/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 解法1： hash表 
// 时间复杂度：O(nlogn)，而题目要求是小于 nlogn
// 空间复杂度：O(n)
var topKFrequent = function(nums, k) {
  if(!nums.length) return [];
  if(!k) return nums;

  const map = new Map();
  const set = [...new Set(nums)];

  for(let i=0; i<nums.length; i++) {
    const isHas = map.has(nums[i]);
    if(!isHas) {
      map.set(nums[i], 1);
    } else {
      const cur = map.get(nums[i]);
      map.set(nums[i], cur + 1);
    }
  }

  const res = set.sort((a, b) => map.get(b) - map.get(a));

  // console.log(res.slice(0, k))
  return res.slice(0, k)
};

// 解法2： map + 小顶堆
var topKFrequent = function (nums, k) {  
  
}
// @lc code=end

