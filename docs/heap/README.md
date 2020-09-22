# 堆

## 概念
堆是一种非线性结构，可以把堆看作一个数组，也可以被看作一个**完全二叉树**，通俗来讲堆其实就是利用完全二叉树的结构来维护的一维数组

按照堆的特点可以把堆分为大顶堆和小顶堆

大顶堆：**每个结点的值都大于或等于其左右孩子结点的值**

小顶堆：**每个结点的值都小于或等于其左右孩子结点的值**

也就是，**在大顶堆中，堆顶的元素最大，在小顶堆中，堆顶的元素最小**

![](https://camo.githubusercontent.com/443bca4cb050ed956dd74655eed041cfb89b7903/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303332313137313035372e706e67)

（堆的这种特性非常的有用，堆常常被当做优先队列使用，因为可以快速的访问到“最重要”的元素）

## 如何创建一个大(小)顶堆
我们在上一节说过，完全二叉树适用于数组存储法（ 前端进阶算法7：小白都可以看懂的树与二叉树 ），而堆又是一个完全二叉树，所以它可以直接使用数组存储法存储：
简单来说： **堆其实可以用一个数组表示，给定一个节点的下标 i （i从1开始） ，那么它的父节点一定为 A[i/2] ，左子节点为 A[2i] ，右子节点为 A[2i+1]**

### 插入法
> 每次插入一个节点，实现一个大顶堆（或小顶堆）

做法
1. 将节点插入到队尾
2. 自下往上堆化：将插入节点与其父节点比较，如果插入节点比父节点大(大顶堆)，或者插入节点比父节点小(小顶堆)，则交换父节点和插入节点的顺序；
3. 一直重复到上一步，直到不需要交换或者交换到根节点为止，此时插入完成。

```js
function insert(key) {
    items.push(key)
    // 获取存储位置
    let i = items.length-1 
    while (i/2 > 0 && items[i] > items[i/2]) {  
        swap(items, i, i/2); // 交换 
        i = i/2; 
    }
}  
function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}
```
时间复杂度为 logn， 为树的高度；

### 原地建堆
原地建堆的方法有两种：一种是承袭上面插入的思想，即从前往后、自下而上式堆化建堆；与之对应的另一种是，从后往前、自上往下式堆化建堆。其中

自下而上式堆化 ：将节点与其父节点比较，如果节点大于父节点（大顶堆）或节点小于父节点（小顶堆），则节点与父节点调整位置
自上往下式堆化 ：将节点与其左右子节点比较，如果存在左右子节点大于该节点（大顶堆）或小于该节点（小顶堆），则将子节点的最大值（大顶堆）或最小值（小顶堆）与之交换
所以，自下而上式堆是调整节点与父节点（往上走），自上往下式堆化是调整节点与其左右子节点（往下走）。

1. 从前往后、自下而上式堆化建堆
![](https://camo.githubusercontent.com/b463b8231abcd4e381fc04f99d506a4b46c2e60d/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303630333030303031372e706e67)

```js
// 原地建堆
function buildHeap(items, heapSize) {
    while(heapSize < items.length - 1) {
        heapSize ++
        heapify(items, heapSize)
    }
}

function heapify(items, i) {
    // 自下而上式堆化
    while (Math.floor(i/2) > 0 && items[i] < items[Math.floor(i/2)]) {  
        swap(items, i, Math.floor(i/2)); // 交换 
        i = Math.floor(i/2); 
    }
}  

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 初始有效序列长度为 1
buildHeap(items, 1)
console.log(items)
// [empty, 1, 2, 3, 5, 4]
```

2. 自上往下，从后往前建堆
这种建堆方式，不能从最后一个元素开始，而是应该从最后一个非叶子节点的元素开始，最后一个叶子节点的父节点是 2/n，从这个元素开始，分别与左右子节点进行比较。
![](https://camo.githubusercontent.com/34bdf9ee4529ad96fbfcb9e213418bcb6a81f9b5/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303630333030323335362e706e67)

```js
// 原地建堆
// items: 原始序列
// heapSize: 初始有效序列长度
function buildHeap(items, heapSize) {
    // 从最后一个非叶子节点开始，自上而下式堆化
    for (let i = Math.floor(heapSize/2); i >= 1; --i) {    
        heapify(items, heapSize, i);  
    }
}
function heapify(items, heapSize, i) {
    // 自上而下式堆化
    while (true) {
        var minIndex = i;
        if(2*i <= heapSize && items[i] > items[i*2] ) {
            minIndex = i*2;
        }
        if(2*i+1 <= heapSize && items[minIndex] > items[i*2+1] ) {
            minIndex = i*2+1;
        }
        if (minIndex === i) break;
        swap(items, i, minIndex); // 交换 
        i = minIndex; 
    }
}  
function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 因为 items[0] 不存储数据
// 所以：heapSize = items.length - 1
buildHeap(items, items.length - 1)
console.log(items)
// [empty, 1, 2, 3, 4, 5]
```

## 堆排序


## 相关题目

### 【Top K】 问题

[347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/) [解法](../../LeetCode/347.前-k-个高频元素.js)
[剑指offer 40 最小的K个元素][https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/]