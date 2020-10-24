/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

// 解法1 递归解法 
var maxDepth = function(root) {
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


// 解法2 迭代解法, 求深度，就是求有几层，当然用层序遍历, 层序遍历就是queue
var maxDepth = function (root) {
  if(!root) return 0;
  const queue = []
  let level = 0;

  queue.push(root)
  while(queue.length) {
    let length = queue.length;
    while(length--) {
      console.log(length)
      const node = queue.shift();
      node.left && queue.push(node.left)
      node.right && queue.push(node.right);
    } 
    console.log(level)
    level++;
  }

  return level;
}
// @lc code=end

