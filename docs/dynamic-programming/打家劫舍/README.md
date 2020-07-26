# 打家劫舍

## 简单版-1
> [198.打家劫舍](https://leetcode-cn.com/problems/house-robber/)

解法与爬楼梯和斐波那契数列类似；

dp的状态方程是：`dp[i] = max(dp[i-1], dp[i-1]+nums[i])`

如何确定呢？

<div style="background-color: RGBA(62,175,124,0.10); font-size: 13px; font-family:'PingFangSC-Regular'; color: #3eaf7c; font-weight: 600; padding: 10px; border-radius: 8px; margin-bottom: 20px;">假设一共有n个房子，每个房子的金额分别是H_0, H_1,..., H_(n-1)，子问题 f(k) 表示从前 k个房子（即 H_0, H_1, ..., H_(k-1)）中能偷到的最大金额。那么，偷 k个房子有两种偷法：<br/><br/>
1. 偷前k-1个房子，最后一间不偷，即f(k-1)<br/>
2. 偷前k-2个房子，最后一间偷，即f(k-2)+H(k-1), 其中H(k-1)表示第K间房子的金额<br/>
在这两种情况下，选择金额最大的，即f(k) = max(f(k-1), f(k-2)+H(k-1))<br/><br/>
另外，在写递推关系的时候，要注意写上 k=0 和 k=1 的基本情况：<br/>
1. 当 k=0 时，没有房子，所以 f(0)=0。<br/>
2. 当 k=1 时，只有一个房子，偷这个房子即可，所以 f(1) = H_0<br/>
这样才能构成完整的递推关系，后面写代码也不容易在边界条件上出错。
</div>


### 解法1：动态规划
除此之外，同样可以用递归+备忘录来解决
```js
var rob = function(nums) {
  if(!nums.length) return 0;
  let n = nums.length;
  const dp = new Array(n+1).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];
  for(let i=2; i<=n; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1])
  }
  return dp[n]
};

// console.log(rob([1,2,3,1]))
```
### 解法2：压缩状态

节约空间
```js
// 解法2：压缩状态,节约空间
var rob2 = function(nums) {
  if(!nums.length) return 0;
  let res = 0;
  let prev1 = 0;
  let prev2 = 0;
  for(let i=1; i<=nums.length; i++) {
    res = Math.max(prev2, prev1 + nums[i-1]);
    prev1 = prev2;
    prev2 = res;
  }
  return res;
}
// console.log(rob2([2,7,9,3,1]))
// console.log(rob2([1]))
```
