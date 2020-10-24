/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 中序遍历：左中右
// 解法1 递归解法
var inorderTraversal = function(root) {
    if(!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

// 解法2 迭代解法
var inorderTraversal = function(root) {
  if(!root) return [];
  const stack = [];
  const res = [];
  let node = root;
  while(node || stack.length) {
    while(node) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop();   // 从栈顶推出
    res.push(node.val)
    node = node.right;
  }
  return res;
}
// @lc code=end

