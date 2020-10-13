/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归解法
var swapPairs = function(head) {
  if(!head || !head.next) return head;
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead
};

// 迭代解法
var swapPairs = function(head) {
  if(!head || !head.next) return head;
  const dummyHead = new ListNode(0)
  let node = dummyHead;
  dummyHead.next = head;
  while(node.next && node.next.next) {
    const node1 = node.next;
    const node2 = node1.next;

    // node -> node1 -> node2, 交换后变成node -> node2 -> node1
    node.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    
    node = node1;   // 这一步，将node移动到node1的位置，继续进行下一个循环
  }
  return dummyHead.next;
}
// @lc code=end

