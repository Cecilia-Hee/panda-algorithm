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
> [53. 最大子序和 ](https://leetcode-cn.com/problems/maximum-subarray/)

`p(i) = p(i-1)+i`， 其中i表示第i项的值，p(i)表示加上第i项的值之后的和；

这个题目要求的是子数组，因此必须是连续的；

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

```