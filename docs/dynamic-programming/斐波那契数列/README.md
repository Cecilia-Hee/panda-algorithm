# 斐波那契数列
> [509.斐波那契数列](https://leetcode-cn.com/problems/fibonacci-number/)

## 暴力递归解法
时间复杂度是：O(2^N)
```js
// 普通解法
var fib = function(N) {
    if(N==0) return 0;
    if(N==1) return 1;
    return fib(N-1)+fib(N-2)
};
```
> 然而，这种解法有很多重复计算的地方，如果N比较大，比如是N=20；在结算的过程中；<br/>
> F(20) = F(19)+F(18)<br/>
> F(19) = F(18)+F(17)<br/>
> F(18) = F(17)+F(16)<br/>
> ...<br/>
> 会发现每次F(18),F(17)都被重复计算了两遍，这就很浪费时间了<br/>

:::tip
递归的时间复杂度如何结算呢？<br/>
就是用子问题的个数 * 解决一个子问题所需要的时间

> 对于上面这个问题来说，子问题的个数，即递归树中节点的个数总和，**显然二叉树节点总数为指数级别，所以子问题个数为 O(2^n)**。
> 而解决一个问题所需要的时间，仅仅是`fib(N-1)+fib(N-2)`这一个加法操作，因而是1
:::

:::warning
PS：但凡遇到需要递归的问题，最好都画出递归树，这对你分析算法的复杂度，寻找算法低效的原因都有巨大帮助
:::

## 带备忘录的递归解法
目的是：为了解决暴力递归的**重复子问题**的问题

时间复杂度是：O(N)
```js
var fib2 = function(N) {
    if(N<1) return 0;
    const map = {};
    function helper(map, N) {
      if(N==1 || N==2) return 1;
      if(map[N]) return map[N];
      map[N] = helper(map, N-1) + helper(map, N-2);
      return map[N]
    }
    return helper(map, N);
}
```
1. 备忘录可以用数组或者hash表来表示，存储之前已经计算过的值，下次遇到时就可以直接使用，是一种牺牲空间，换取时间的做法<br/>
2. 在这种做法中，不会有重复的子问题，因为子问题的个数是N，同样处理一个问题的时间时1，故而时间复杂度是O(N)<br/>
3. 另外，备忘录的做法，可以想象成是树的一种剪枝: [图在这里](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/dong-tai-gui-hua-xiang-jie-jin-jie)

## dp数组的迭代解法-动态规划
有了上一步「备忘录」的启发，我们可以把这个「备忘录」独立出来成为一张表，就叫做 DP table 吧，在这张表上完成「自底向上」的推算。【备忘录的做法，可以理解成是`自顶向下`】

时间复杂度依然是O(N)
```js
var fib3 = function(N) {
    const dp = new Array(N+1).fill(0);
    dp[1] = dp[2] = 1;
    for(let i=3; i<=N; i++) {
      dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[N]
}
```
且从上面可以很明显看出动态规划的状态方程是：`dp[i]=dp[i-1]+dp[i-2] && dp[2] = dp[1]=1; dp[0]=0`

## 状态压缩
即空间复杂度降低为O(1),因为第三个值只与前两个状态有关
```js
var fib = function(N) {
    if(N==0) return 0;
    if(N==1 || N==2) return 1;
    let prev = 1; 
    let curr = 1;
    for(let i=3; i<=N; i++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
};
```