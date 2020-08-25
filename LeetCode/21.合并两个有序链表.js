/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start

 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;


    let h3 = new ListNode(null)
    let res = h3;
    while(l1 && l2) {
      if(l1.val < l2.val) {
        h3.next = l1;
        l1 = l1.next;
      } else {
        h3.next = l2;
        l2 = l2.next;
      }
      h3 = h3.next;
    }
    // console.log(h1, h2, h3)
    // h3.next = l1 || l2;
    if(l1) {
      h3.next = l1
    }
    if(l2) {
      h3.next = l2;
    }

    return res.next;


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end