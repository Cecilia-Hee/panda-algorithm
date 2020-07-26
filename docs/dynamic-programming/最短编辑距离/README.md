# 最短编辑距离
> [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)

这里需要注意的是：
1. 初始值的两个遍历，`dp[i][0]=i`：表示word2如果没有，需要从word1变成word2，则需要删除所有旧的字符；同理，`dp[0][j]=j`，表示
需要从word1变成word2，则需要复制所有新的字符；
2. 关于初始化一个空的二维数组的问题，这里需要看一下；
3. 下面这种，依然可以用字典存储的方式进行优化，因为有重复子数组的问题；
```js
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    // const dp = new Array(m+1).fill(new Array(n+1).fill(0));
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    // 初始值
    for(let i=0; i<=m; i++) {
      dp[i][0] = i;
    }
    for(let j=0; j<=n; j++) {
      dp[0][j] = j;
    }

    for(let i=1; i<=m; i++) {
      for(let j=1; j<=n; j++) {
        if(word1[i-1] === word2[j-1]) {
          dp[i][j] = dp[i-1][j-1]
        } else {
          dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1;
        }
      }
    }
    // console.log(dp)
    return dp[m][n]
}
```

```js
// 第二种解法，合并初始化
  var minDistance2 = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))

    for(let i=0; i<=m; i++) {
      for(let j=0; j<=n; j++) {
        if(i*j) {
          if(word1[i-1] === word2[j-1]) {
            dp[i][j] = dp[i-1][j-1]
          } else {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
          }
        } else {
          dp[i][j] = i + j;
        }
      }
    }
    return dp[m][n]
  }
```