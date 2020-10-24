/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 前序遍历 根左右
// 解法1， 递归
var preorderTraversal = function(root) {
    if(!root) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};

// 解法2， 迭代
var preorderTraversal = function (root) { 
  if(!root) return [];
  const stack = [];
  const res = [];
  stack.push(root)
  while(stack.length) {
    const node = stack.pop();
    res.push(node.val)

    if(node.right) {
      stack.push(node.right)
    }

    if(node.left) {
      stack.push(node.left)
    }
  }
  return res;
}
// @lc code=end

