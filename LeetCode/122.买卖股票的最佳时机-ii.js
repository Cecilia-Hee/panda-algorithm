/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 方法1，贪心算法
// 思路是，从左向右遍历，只要碰到后一个值比前一个值大，就添加到结果中
var maxProfit = function(prices) {
    let max = 0;

    for(let i=1; i<prices.length; i++) {
      const gap = prices[i] - prices[i-1]
      if(gap > 0) {
        max += gap;
      }
    }

    return max;
};

// 解法2：动态规划
// 一般可以用贪心算法解决的问题，都可以用动态规划来解决
//  cash表示卖出的最大收益，hold表示买入的最大收益,

// 我们在求第i天卖出最大收益时，只需要这么几个变量:

// 第i-1天卖出的最大收益
// 第i-1天买入的最大收益
// 第i天的股价

// 同样，我们在求第i天买入最大收益时，也是只需要这么几个变量:

// 第i-1天买入的最大收益
// 第i-1天卖出的最大收益
// 第i天的股价

// 对第i天来说，卖出的最大收益，等于第i-1天卖出的最大收益 vs 第i-1天买入的最大收益+当天的股价
// 第i天买入的最大收益计算公式: 第i-1天买入的最大收益 vs 第i-1天卖出的最大收益+当天股价

// dp[i][0] = max(dp[i-1][0],dp[i-1][1]+prices[i])  卖出   
// dp[i][1] = max(dp[i-1][1],dp[i-1][0]-prices[i])  买入   

// MD 我还是不懂，这个结算公式

var maxProfit = function (prices) {
  if(prices.length < 2) return 0;

  let cash = 0;
  let hold = -prices[0];
  let preCash = cash;
  let preHold = hold;

  for(let i=1; i<prices.length; i++) {
    cash = Math.max(preCash, preHold + prices[i])
    hold = Math.max(preHold, preCash - prices[i])

    preCash = cash;
    preHold = hold;
  }

  return cash;
}

// 解法3： 递归
var maxProfit = function(prices) {
  if(!prices || prices.length < 2) return 0;

  return dfs(prices, 0, false)

  function dfs(prices, index, status) {
    if(index === prices.length) return 0;

    // 分别用a,b,c表示不动，买入，卖出
    let a=0; 
    let b=0;
    let c=0;
    a = dfs(prices, index+1, status);
    if(status) {
      // 上一次是买入，本次可卖出
      b = dfs(prices, index+1, false) + prices[index]
    } else {
      c = dfs(prices, index+1, true) - prices[index]
    }

    return Math.max(a, b, c)
  }
}

// 解法4， 递归+剪枝, 有问题，可以将index+status作为key
var maxProfit = function (prices) {  
  if(!prices || prices.length < 2) return 0;
  const map = new Map()

  return dfs(prices, 0, false, map);

  function dfs(prices, index, status, map) {
    if(map.has(index+status+'')) {
      return map.get(index+status+'')
    }

    if(index === prices.length) {
      map.set(index+status+'', 0);
      return 0;
    };

    // 分别用a,b,c表示不动，买入，卖出
    let a=0; 
    let b=0;
    let c=0;
    a = dfs(prices, index+1, status, map);
    if(status) {
      // 上一次是买入，本次可卖出
      b = dfs(prices, index+1, false, map) + prices[index]
    } else {
      c = dfs(prices, index+1, true, map) - prices[index]
    }

    map.set(index+status+'', Math.max(a, b, c))

    console.log(index, status)

    return map.get(index+status+'')
  }

}
// @lc code=end

