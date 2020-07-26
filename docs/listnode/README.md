# 链表的常规操作
1. 链表的插入
2. 链表的删除
    - 删除链表倒数第K个节点
3. 链表的查找；
    - 求链表的中间节点
    - 求链表环的入口节点
2. 链表反转
    - a. 单链表反转
    - b. 单链表反转位置从m到n的部分
    - c. K个一组反转链表

5. 链表的排序和合并
    - 用插入法，进行排序【147】
    - 用归并法进行排序
    - 合并两个有序的链表
    - 合并K个排序链表
6. 两两交换链表中的节点
7. 链表中环的检测

# 链表的排序
## 插入排序
[leetcode 147](https://leetcode-cn.com/problems/insertion-sort-list/)

插入排序的思路：

```
var insertionSortList = function(head) {
    if(!head || !head.next) return head;

    let preHead = new ListNode(Number.MIN_SAFE_INTEGER)
    let pre = preHead;
    let curr = head;
    let next = null;
    while(curr) {
        next = curr.next;
        while(pre.next && pre.next.val < curr.val) {
            pre = pre.next;
        }

        // 如果pre的下一个节点存在并且大于curr节点的值，需要改变指针指向
        curr.next = pre.next;
        pre.next = curr;
        pre = preHead;  // 因为每次循环都需要从头开始比较，因此pre需要恢复原位。
        curr = next;    // curr的下一个节点变成头结点，下次比较从curr开始
    }
    return preHead.next;
};
```
<div style="width:50%">
<img src="http://note.youdao.com/yws/res/32638/617A128B084F4A8EAC5F4D3AB54942E3" />
</div>

## 归并排序
[leetcode-148](https://leetcode-cn.com/problems/sort-list/)

归并排序的思路是：先把一个序列划分为左右两个子序列，再用递归的方式划分子序列。把两个子序列放进一个mergeList方法中按顺序合并。

注意点：

==1. 链表中的合并两个有序子链表时，需要借助一个极小值的头结点==。<br/>
==2. 把链表分成两段，用到了快慢指针==



```
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

var sortList = function(head) {
    if(!head) return null;

    const mergeList = (left, right) => {
        let newHead = new ListNode(Number.MIN_SAFE_INTEGER);
        let pre = newHead;
        while(left && right) {
            if(left.val < right.val) {
                pre.next = left;
                left = left.next;
            } else {
                pre.next = right;
                right = right.next;
            }
            pre = pre.next;
        }

        pre.next = left ? left : right;
        return newHead.next;
    }

    const mergeSort = (head) => {
        if(!head || !head.next) return head;
        let slow = head;
        let fast = head.next;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let left = head;
        let right = slow.next;
        slow.next = null;

        return mergeList(mergeSort(left), mergeSort(right))
    }

    return mergeSort(head);
};

```
<div style="width:50%">
<img src="http://note.youdao.com/yws/res/32656/88BEBACF4B994EC4A8695E5C76F93EB6" />
</div>


# 链表的合并

## 两数相加
[leetcode2 ](https://leetcode-cn.com/problems/add-two-numbers/)

tip: 创建和合并节点，注意进位
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
    let newH = new ListNode(0);
    let p3 = newH;
    let add = 0;    // 是否进1

    while(p1 || p2) {
        let sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + add;
        p3.next = new ListNode(sum % 10);
        add = sum >= 10 ? 1: 0;

        p1 && (p1 = p1.next); 
        p2 && (p2 = p2.next);      
        p3 = p3.next;
    }
    add && (p3.next = new ListNode(add));
    return newH.next;
};
```
# 链表的删除

## 删除链表的倒数第N个节点
[leetcode 19] (https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

tip: 快慢指针

时间复杂度：O(n)

空间复杂度：O(1)
```javascript
var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    let p1 = head;
    let p2 = head;
    while(n--) {
        p2 = p2.next;
    }

    // 测试用例 [1]1，即删除的长度和链表的长度相同时，直接返回head.null
    if(!p2) return head.next;
    
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    // 要删除的就是p1.next;
    p1.next = p1.next.next;
    return head; 
};
```
==进阶，如何在一次遍历中就找到并删除呢==

==hashmap!!==
```javascript
var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    const map = new Map();
    let i=0;
    while(head) {
        map.set(i, head);
        head = head.next;
        i++;
    } 
    
    // 此时map = {0:{},1:{}}, 每一项后面都是个节点
    
    let cur = i-n;
    if(cur == 0) return map.get(1) || null;
    (map.get(cur - 1)).next = map.get(cur + 1)
    // console.log(map.get(0))
    return map.get(0)
};
```

# 链表的旋转和反转
## 【旋转链表】将链表的每个节点向后移动K个位置
[leetcode 61](https://leetcode-cn.com/problems/rotate-list/)

tip： 双指针的做法
1. 先计算出链表的长度；
2. 通过取模，得到真正需要移动的个数K
3. 找到倒数第K个节点，作为新的头节点，并切断倒数第K+1个节点和倒数第K个节点；
4. 尾节点指向头节点
5. 返回新的头节点

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    if(k == 0) return head;
    let length = 0;

    // 计算链表的长度
    let tempH = head;
    while(tempH) {
        tempH = tempH.next;
        length = length + 1;
    }
    // 得到真正要移动的个数
    k = k%length;
    // 如果K=0; 说明不需要移动，直接返回head；
    if(k == 0) return head;

    // 利用快慢指针，找到倒数第K个节点，用倒数第K个节点作为新的头结点；
    let p1 = head;
    let p2 = head;
    let newHead = null;
    while(k) {
        p1 = p1.next;
        k = k-1;
    }

    while(p1 && p1.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    // 此时p1指向最后一个节点，p2指向倒数第K+1个节点；
    newHead = p2.next;  // newHead指向倒数第K个节点，作为新头节点
    p2.next = null;     // 切断倒数第K+1个节点
    p1.next = head;     // 让最后一个节点的下一个指向原始的头结点

    return newHead;     // 返回新的头节点
};
```

## 链表反转

```JavaScript
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
    if(!head) return null;
    let pre = null;
    let next = null;

    while(head) {
        next = head.next;   // 切断后一个
        head.next = pre;    // 指向前一个
        pre = head;         // 指针后移
        head = next;
    }
    // console.log(pre)
    return pre;
};
```


# 链表的复制
用map存储旧node和新node
```JavaScript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    let pre = new Node(head.val);
    let newHead = pre;
    let cur = head;
    let map = new Map();
    map.set(cur, pre)

    while(cur && cur.next) {
        pre.next = new Node(cur.next.val);
        pre = pre.next;
        cur = cur.next;
        map.set(cur, pre)
    }

    pre = newHead;
    cur = head;
    while(pre) {
        pre.random = map.get(cur.random); // 这里是个节点，非常重要！！！
        pre = pre.next;
        cur = cur.next;
    }

    return newHead
    console.log(newHead)
};
```
## 常见链表题解
### 快慢指针
- [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)
- [876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)