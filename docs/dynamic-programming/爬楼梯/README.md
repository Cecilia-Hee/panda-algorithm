# 爬楼梯
> [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/submissions/)

这道题目和斐波那契数列，做法是一致的。

## 解法1： 自定向下递归
但是当n到45时，就会超时了
```js
var climbStairs = function(n) {
    if(n == 0) return 1
    if(n == 1) return 1;
    return climbStairs(n-1) + climbStairs(n-2);
};
```

## 解法2：递归+map备忘录
可以通过了，但是耗费时间还是较长
```js
var climbStairs = function(n) {    
  const map = {};
  function helper(n) {
    if(n == 0) return 1;
    if(n == 1) return 1;
    if(map[n]) return map[n];
    let tmp = helper(n-1) + helper(n-2);
    map[n] = tmp;
    return tmp;
  }

  return helper(n)
}

```

## 解法3： 动态规划
前面两种解法，都是用递归`自顶向下`，而动态规划是`自底向上`，维护一个dp数组；并得到状态方程为：`dp[i] = dp[i-1]+dp[i-2]`

```js
var climbStairs3 = function(n) {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for(let i=2; i<=n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n]
}
```

## 解法4：压缩状态
当前的值只与前两个有关，因此没必要维护一个dp table数组, 只需要维护两个变量保存前两个值即可；降低空间复杂度

```js
var climbStairs4 = function(n) {
  if(n == 0) return 1;
  if(n == 1) return 1;
  let prev1 = 1;
  let prev2 = 1;
  let res = 0;
  for(let i=2; i<=n; i++) {
    res = prev1 + prev2;
    prev1 = prev2;
    prev2 = res;
  }
  return res;
}
```