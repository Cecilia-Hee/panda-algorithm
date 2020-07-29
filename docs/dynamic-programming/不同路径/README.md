# 不同路径

## 简单版本
> [62.不同路径](https://leetcode-cn.com/problems/unique-paths/submissions/)

### 动态规划

主要思想和[最小路径和](dynamic-programming/最小路径和/)类似，状态方程为：
1. 当i>0,j>0时的状态方程是：`dp[i][j] = dp[i-1][j] + dp[i][j-1]`;
2. 当i=0,j>0时：`dp[0][j] = 1`
3. 当i>0,j=0时：`dp[i][0] = 1`
4. 当i=0,j=0时，`dp[0][0] = 1`

后面这三种情况都是1，因为都是在同一条路径上；第一种情况是，当前的路径等于左边的路径+上面的路径

```js
var uniquePaths = function(m, n) {
  if (!m || !n) return 0;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;
  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(i*j) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      } else if(j === 0 && i > 0) {
        dp[i][0] = 1
      } else if(i === 0 && j > 0) {
        dp[0][j] = 1
      }
    }
  }
  console.log(dp)
  return dp[m-1][n-1]
};
console.log(uniquePaths(3,2))
```

### 降低空间复杂度
当前状态只与前两种状态有关
```js
// 降低法-1
var uniquePaths2 = function(m, n) {
  if (!m || !n) return 0;
  let prev = new Array(n).fill(1)
  let curr = new Array(n).fill(1);
  
  for(let i=1; i<m; i++) {
    for(let j=1; j<n; j++) {
      curr[j] = curr[j-1] + prev[j]
    }
    prev = curr.slice()
  }
  return prev[n-1]
};
// console.log(uniquePaths2(3,2))

// 降低空间复杂度 -2 
var uniquePaths3 = function(m,n) {
  if(!m || !n) return 0;
  let curr = new Array(m).fill(1);

  for(let i=1; i<n; i++) {
    for(let j=1; j<m; j++) {
      curr[j] = curr[j-1] + curr[j]
    }
  }
  return curr[m-1]
}
```

### 排列组合法
> 这个方法没有太看懂：[666的解法](https://leetcode-cn.com/problems/unique-paths/solution/62-bu-tong-lu-jing-by-alexer-660/)
```js
var uniquePaths4 = function(m,n) {
  let step = m+n-2;
  let k = m-1;
  let result = 1;
  for(let i=1; i<=k; i++) {
    result = result * (step - k + i) / i
  }
  return result
}
console.log(uniquePaths4(3,2))
```


## 难度上升-添加障碍物
> [63. 不同路径](https://leetcode-cn.com/problems/unique-paths-ii/)
和62题类似，只不过是多了一个障碍物的条件。

正常情况下，f(i,j)的路径个数等于f(i-1, j) + f(i, j-1); 如果f(i,j)=1时，则通过这个节点达到目的地的路径就为0；因此，可以得到状态方程为：
> f(i,j)=f(i-1, j) + f(i, j-1)  grid(i,j)!=1 <br/>
> f(i,j)=0                      grid(i,j)==1

### 降维做法
直接采用降低空间维度的处理方法，其实这里叫【数组滚动思想】

```js

if(!obstacleGrid.length || !obstacleGrid[0].length) return 0;
let m = obstacleGrid.length;
let n = obstacleGrid[0].length;
const dp = new Array(n).fill(0);
dp[0] = obstacleGrid[0][0] == 0 ? 1 : 0
for(let i=0; i<m; i++) {
  for (let j=0; j<n; j++) {
    if(obstacleGrid[i][j] == 1) {
      dp[j] = 0;
      continue;
    } 
    if(j-1 >=0 && obstacleGrid[i][j-1] == 0) {
      dp[j] = dp[j-1] + dp[j]
    }
  }
}
return dp[n-1]
```

### 常规做法
> 这个可能是我目前能理解的方式，😢
```js
var uniquePathsWithObstacles2 = function(obstacleGrid) {
  if(!obstacleGrid.length || !obstacleGrid[0].length) return 0;
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  if(obstacleGrid[0][0] === 1) return 0;
  
  for(let i=0; i<m && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1
  }

  for(let j=0; j<n && obstacleGrid[0][j] == 0; j++) {
    dp[0][j] = 1
  }

  for(let i=1; i<m; i++) {
    for (let j=1; j<n; j++) {
      if(obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
      
    }
  }
//   console.log(dp);
  return dp[m-1][n-1]
}
```