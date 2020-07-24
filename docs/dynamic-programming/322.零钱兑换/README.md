# 零钱兑换

## 零钱兑换1
> [322.零钱兑换](https://leetcode-cn.com/problems/coin-change/solution/)

### 暴力解法
可以尝试画出树
```js
// 1. 动态规划，自上而下
var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  for(let i=1; i<=amount; i++) {
    for(let coin of coins) {
      if(i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i-coin]+1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

    console.log(coinChange([1,2,5], 11))
```
### 有备忘录的解法
同样只是把已经计算过的存起来
```js
// 2. 有备忘录的解法
var coinChange2 = function (coins, amount) {
  const map = {}
  return helper(coins, amount, map)
  function helper(coins, amount, map) {
    if(amount < 0) return -1;
    if(amount == 0) return 0;
    if(map[amount]) return map[amount];
    let min = Number.MAX_SAFE_INTEGER
    // 每个amount单独计算最小值
    for(let coin of coins) {
      let res = helper(coins, amount - coin, map);
      if(res >=0 && res < min) {
        min = res + 1;
      }
    }
    map[amount] = (min == Number.MAX_SAFE_INTEGER) ? -1 : min;
    return map[amount]
  }
}
    console.log(coinChange2([1,2,5], 11))
```

## 零钱兑换2
> [518. 零钱兑换](https://leetcode-cn.com/problems/coin-change-2/)