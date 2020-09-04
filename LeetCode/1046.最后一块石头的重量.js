/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

// 解法一：暴力递归
var lastStoneWeight = function(stones) {
  if(!stones.length) return 0;
  if(stones.length == 1) return stones[0]

  stones.sort((a,b) => b-a)
  
  const gap = stones[0] - stones[1];
  const sub = stones.slice(2)
  
  if(!sub.length) {
    return gap
  }
  if(gap > 0) {
    sub.push(gap)
  }
  return lastStoneWeight(sub);
};

// 解法2：还是递归，上一个写的有些然胡
var lastStoneWeight = function (stones) {
  if(!stones.length) return 0;
  if(stones.length == 1) return stones[0]

  stones.sort((a,b) => b-a);

  // 如果两块石头重量相等 且 石头总数 > 2
  if(stones[0] === stones[1]) {
    const sub = stones.slice(2)
    return lastStoneWeight(sub)
  } else if(stones[0] > stones[1]) {
    const gap = stones[0] - stones[1];
    stones.splice(0,2,gap);
    return lastStoneWeight(stones)
  }
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = lastStoneWeight;
// @after-stub-for-debug-end