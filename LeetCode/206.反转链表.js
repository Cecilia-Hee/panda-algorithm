/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head) return head;

  let node = head;
  let pre = null
  while(node) {
    let next = node.next;   
    node.next = pre; 
    pre = node;
    node = next;
  }
  return pre;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end