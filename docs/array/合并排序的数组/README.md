# 合并排序的数组
> [面试题10.01 合并排序的数组](https://leetcode-cn.com/problems/sorted-merge-lcci/submissions/)

题解：
1. 因为是已经排序的数组，从后面开始遍历，如果B的最后一个比A大，那B的最后一个必然是最大的数字，放在最后面即可
2. 如果是从头开始遍历，那么每次往后移动时，比较麻烦
```js
var merge = function(A, m, B, n) {
  
  while(m>0 && n>0) {
    if(A[m-1] > B[n-1] ) {
      A[m+n-1] = A[m-1];
      m--;
    } else {
      A[m+n-1] = B[n-1];
      n--
    }
  }

  // 如果此时m还大于0，说明A没有遍历完成，直接放在A中不用管就可以了
  // 如果此时n>0, 则说明B没有遍历完，把n放进A对应的位置中
  while(n>0) {
    A[n-1] = B[n-1]
    n--
  }

  return A;

};

```