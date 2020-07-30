# 最小路径和

## 方形的最小路径和

> [64.最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)

### 动态规划解法

输入数据：
|  1 | 3  | 1 |
|--|--|--|
| 1 |  5  | 1 | 
| 4 | 1 | 1 | 

题目要求是，从左上角到右下角，找一条路径和最小的路径；可以采用逆向思维，从右下角开始看，如果想要右下角的值最小，那么必然要得到右下角的左边(i,j-1)和右下角的上边(i-1,j)两者之间的最小值，则可以得到状态方程如下:<br/>
1. 当i>0,j>0时的状态方程是：`dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]`;
2. 当i=0,j>0时：`dp[0][j] = dp[0][j-1] + grid[0][j]`
3. 当i>0,j=0时：`dp[i][0] = dp[i-1][0] + grid[i][0]`
4. 当i=0,j=0时，`dp[0][0] = grid[0][0]`

新建一个和grid一样大的dp-table，根据以上方程计算得到dp-table的值为：
|  1 | 4  | 5 |
|--|--|--|
| 2 |  7  | 6 | 
| 6 | 8 | 7 | 

最后，按照以上状态方程，写出代码如下，这里的状态只有一种，就是grid中每步路径的值，选择有：左和上两种：

```js
var minPathSum = function(grid) {
  if(!grid.length)  return 0;
  if(!grid[0].length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = grid[0][0]
  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(i*j) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
      } else if(j === 0 && i > 0) {
        dp[i][0] = dp[i-1][0] + grid[i][0]
      } else if(i === 0 && j > 0) {
        dp[0][j] = dp[0][j-1] + grid[0][j]
      }
    }
  }
  console.log(dp)
  return dp[m-1][n-1]
};

// console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
```

## 三角形的最小路径和
> [120. 三角形的最小路径和](https://leetcode-cn.com/problems/triangle/)

### 动态规划常规解法
自己再整理一下

```js
var minimumTotal2 = function(triangle) {
  if(!triangle.length) return 0;
  const n = triangle.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = triangle[0][0]
  for(let i=1; i<n; i++) {
    dp[i][0] = dp[i-1][0] + triangle[i][0]
    for (let j=1; j<i; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j]
    }

    // i===j时
    dp[i][i] = dp[i-1][i-1] + triangle[i][i]
  }

  const resArr = dp[n-1].slice();
  return Math.min.apply(null, resArr)

  console.log(dp)
}

console.log(minimumTotal2([[2],[3,4],[6,5,7],[4,1,8,3]]))
```

### 动态规划压缩状态解法
```js
// 120. 三角形的最小路径和
var minimumTotal = function(triangle) {
    if(!triangle.length) return 0;
    const n = triangle.length
    const dp = new Array(triangle[n-1].length).fill(0);
    
    for(let i=0; i<dp.length; i++) {
      dp[i] = triangle[n-1][i]
    }

    // 从倒数第二列开始遍历
    for(let i = dp.length - 2; i>=0; i--) {
      for(let j=0; j<n; j++) {
        dp[j] = Math.min(dp[j], dp[j+1]) + triangle[i][j]
      }
    }
    return dp[0]
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))    
```