/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let l3 = new ListNode(0);
    let p3 = l3;
    let add = 0;

    while(p1 || p2) {
      let sum = (p1 ? p1.val:0) + (p2 ? p2.val:0) + add;
      p3.next = new ListNode(sum % 10)
      add = sum >= 10 ? 1 : 0;
      p1 && (p1 = p1.next);
      p2 && (p2 = p2.next);
      p3 = p3.next
    }

    add && (p3.next = new ListNode(add))

    return l3.next;
};
// @lc code=end

