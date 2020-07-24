# 背包问题

## 分割等和子集
> [416.分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)

这个问题，可以理解为背包问题的一个变形
```js
var canPartition = function(nums) {
  // 
  if(!nums.length) return false;

  // 第一步，先计算出所有子集的和
  let sum = nums.reduce((prev, curr) => {
    return prev+curr;
  }, 0)

  // 如果sum是奇数，则不能分割为两个等和
  if(sum % 2 !== 0) return false;
  sum = sum / 2;  // 其实我们只要找到和为sum/2的子集

  // 第二步， 定义dp table
  const dp = new Array(sum + 1).fill(false);

  // base case ，当sum=0，表示背包装满
  dp[0] = true;

  for(let i=1; i<=nums.length; i++) {
    for(let j=sum; j>= nums[i]; j--) {
      if(dp[sum]) return true;
      dp[j] = dp[j] || dp[j-nums[i]]
    }
  }
  return dp[sum]
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([1,2,5]))
```
