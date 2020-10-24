/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 解法1 迭代
var levelOrder = function(root) {
  if(!root) return [];
  const ans = [];
  const queue = [];
  queue.push(root);

  while(queue.length) {
    let length = queue.length;
    const arr = []
    while(length--) {
      const node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ans.push(arr)
  }
  return ans;
};
// @lc code=end

