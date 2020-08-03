# 最.子序列

## 最长上升子序列
> [300.最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

### 动态规划法
```js
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0
  const dp = new Array(nums.length).fill(1);

  for(let i=1; i<nums.length; i++) {
    let tmpMax = 0;
    for(let j=0; j<i; j++) {          
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
  }
}
```
## 最大子序和
> [53. 最大子序和 ](https://leetcode-cn.com/problems/maximum-subarray/)<br/>
> [剑指 Offer 42. 连续子数组的最大和](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)

这道题目的要求是，输入一个整数数组，数组中有正数也有负数，求一个子数组的和为最大值。这里的【子数组】是指原数组中一个或者连续多个整数组成的。

状态方程是： `p(i) = p(i-1)+i`， 其中i表示第i项的值，p(i)表示加上第i项的值之后的和；

```js
var maxSubArray = function(nums) {
  if(!nums.length) return 0;
  let res = Number.MIN_SAFE_INTEGER;
  let prevSum = Number.MIN_SAFE_INTEGER;
  nums.forEach((item) => {
    prevSum = Math.max(prevSum + item, item);
    res = Math.max(res, prevSum)
  })
  return res;
}

// 或者是如下这样

var maxSubArray = function(nums) {
  if(!nums.length) return 0;
  if(nums.length < 2) return nums[0]
  let res = nums[0];
  let curr = nums[0];

  for(let i=1; i<nums.length; i++) {
    curr = Math.max(nums[i]+curr, nums[i]);
    res = Math.max(curr, res)
  }

  return res;
};
```