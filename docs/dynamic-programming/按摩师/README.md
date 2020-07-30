# 按摩师
> [面试题 17.16. 按摩师](https://leetcode-cn.com/problems/the-masseuse-lcci/)

## 常规解法
状态是按摩师的时间，有选择和不选择两种情况，并且不能连续选中；

> 假如选中了最后一个，则状态方程是dp[i] = dp[i-2]+nums[i]; <br/>
> 假如不选中最后一个，则表示选中倒数第二个，那么状态方式就是dp[i] = dp[i-1] <br/>
> 最后求以上两种方式的最大值即可。

```js
var massage = function(nums) {
  if(!nums.length) return 0;
  const n = nums.length;
  const dp = new Array(n).fill(0);

  // 下面这俩是边界条件
  dp[0] = nums[0]
  dp[1] = Math.max(dp[0], nums[1])

  for(let i=2; i<nums.length; i++) {
    dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
  }

  // console.log(dp)
  return dp[n-1]
};
```

## 优化解法
最后一种状态，只与前两种状态有关，因此没有必须用一个数组来存储状态，可进行空间压缩；

```js
var massage = function(nums) {
  if(!nums.length) return 0;
  if(nums.length === 1) return nums[0];
  let prev = nums[0];
  let curr = Math.max(prev, nums[1]);
  let res = curr;

  for(let i=2; i<nums.length; i++) {
    res = Math.max(prev+nums[i], curr);
    prev = curr;
    curr = res;
  }
  return res;
};
```


