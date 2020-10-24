/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

// 后序遍历 ： 左右根
// 解法1： 递归
var postorderTraversal = function(root) {
    if(!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};

// 解法2： 迭代， 和前序遍历相反来
var postorderTraversal = function(root) {
  if(!root) return []
  const stack = [];
  const res = [];
  stack.push(root)
  while(stack.length) {
    const node = stack.pop();
    res.unshift(node.val);

    if(node.left) {
      stack.push(node.left)
    }

    if(node.right) {
      stack.push(node.right)
    }
  }
  return res;
}
// @lc code=end

