/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 解法1：递归解法 
var constructMaximumBinaryTree = function(nums) {

  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
  
  function dfs(nums) {
    if(!nums || !nums.length) return null;
    const max = Math.max.apply(null, nums);
    const index = nums.indexOf(max);
    const root = new TreeNode(max);
    const left = nums.slice(0, index);
    const right = nums.slice(index+1);
    root.left = dfs(left);
    root.right = dfs(right);
    return root
  }

  return dfs(nums);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = constructMaximumBinaryTree;
// @after-stub-for-debug-end