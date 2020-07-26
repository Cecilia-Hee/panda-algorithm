# 双指针

## 分隔链表
> [86.分隔链表](https://leetcode-cn.com/problems/partition-list/submissions/)

这道题的重点是：
1. 新建两个指针，分别为before和after，将小于x的都放在before中，大于等于x的都放在after中；
2. before和after初始值分别是哑巴节点，目的是为了减小判断的条件，简化分隔；
3. 循环结束之后，必须要把after的next指针指向null，清空后序的指向；
4. 将before和after结合起来
5. 最后返回beforeHead的next；
```js
var partition = function(head, x) {
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);
    let before = beforeHead;
    let after = afterHead;
    while(head) {
      if(head.val < x) {
        before.next = head;
        before = before.next;
      } else {
        after.next = head;
        after = after.next;
      }
      head = head.next;
    }
    after.next = null;  // 结束比较大的指针
    before.next = afterHead.next;
    return beforeHead.next;

};

const listnode1 = getListNode([1,4,3,2,5,2])
console.log(partition(listnode1, 3))
```
