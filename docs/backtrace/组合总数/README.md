# 组合
 

## 39.组合总和

> [39.组合总和](https://leetcode-cn.com/problems/combination-sum/)

思路：输入: candidates = [2,3,6,7]，target = 7。

- 候选数组里有 2 ，如果找到了 7 - 2 = 5 的所有组合，再在之前加上 2 ，就是 7 的所有组合；
- 同理考虑 3，如果找到了 7 - 3 = 4 的所有组合，再在之前加上 3 ，就是 7 的所有组合，依次这样找下去；
- 优秀题解：https://leetcode-cn.com/problems/combination-sum/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-m-2/


重点：
1. 每次递归的i从start开始，避免重复；如果i从0开始，可能会有[2,3,3],[3,2,3]这样的重复组合
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
      if (!candidates.length) return [];
      const res = [];
      const path = [];
      let start = 0;
      backtrace(path, target, start);
      return res;


      function backtrace(path, target, start) {
        if (target < 0) return;
        if (target === 0) {
          res.push(path.slice());
          return;
        }

        for (let i = start; i < candidates.length; i++) {
          let temp = candidates[i];
          let newTarget = target - temp;
          path.push(temp)
          backtrace(path, newTarget, i);
          path.pop()
        }
      }
    };
```

## 40.组合总和2

> [40. 组合总和2](https://leetcode-cn.com/problems/combination-sum-ii/)

这道题与39题的区别在于：

- 第 39 题：candidates 中的数字可以无限制重复被选取。
- 第 40 题：candidates 中的每个数字在每个组合中只能使用一次。

编码的不同在于下一层递归的起始索引不一样：

- 第 39 题：还从候选数组的当前索引值开始。
- 第 40 题：从候选数组的当前索引值的下一位开始。（因为不能重复使用当前数字）
相同之处：解集不能包含重复的组合。

做法：
1. 和第47题类似，依然先进行排序，因为排序以后很容易去掉重复元素：`if(i > start && candidates[i-1] === candidates[i]) continue;`
2. 在下一轮递归时，start从i+1开始，如果还是从i开始，会出现这样的结果：`[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,2],[1,1,1,1,2,2],[1,1,1,5],[1,1,2,2,2],[1,1,6],[1,2,5],[1,7],[2,2,2,2],[2,6]]
`


```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(!candidates.length) return [];
    const res = [];
    const path = [];
    let start = 0;

    // 排序
    candidates.sort((a, b) => a - b)

    backtrace(path, target, start);
    return res;

    function backtrace(path,target, start) {
        if(target < 0) return;
        if(target == 0) {
            res.push(path.slice());
            return;
        }

        for(let i=start; i<candidates.length; i++) {
            if(i > start && candidates[i-1] === candidates[i]) continue;         
            let newTarget = target - candidates[i];
            path.push(candidates[i]);
            backtrace(path, newTarget, i+1);
            path.pop();
        }
    }
};
```

## 77.K个数的组合
> [77.K个数的组合](https://leetcode-cn.com/problems/combinations/)
每次从i+1开始，取前k个数，

> 输入4，2
> 输出[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

```js
var combine = function (n, k) {
    if (k === 0 || n === 0) return [];
    const res = [];
    const path = [];
    backtrace(n, path, 1);

    function backtrace(n, path, start) {
      if (path.length === k) {
        res.push(path.slice());
        return;
      }
      for (let i = start; i <= n; i++) {
        path.push(i);
        backtrace(n, path, i + 1);
        path.pop();
      }
    }

    return res;
};
```

## 78. 求子集
> [78. 求子集](https://leetcode-cn.com/problems/subsets/submissions/)

像77题的升级版，每次确定K个(0-nums.length-1)去求组合。


> 输入 [1,2,3]
> 输出 [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

### 回溯解法1

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(!nums.length) return [];
    const res = [];
    const path = [];
    let start = 0;
    for(let k=0; k<=nums.length; k++) {
        backtrace(path, start, k);
    }
    
    function backtrace(path, start, k) {
        if(path.length === k) {
            res.push(path.slice());
            return;
        }
        for(let i=start; i<nums.length; i++) {
            path.push(nums[i]);
            backtrace(path, i+1, k);
            path.pop();
        }
    }

    return res;
};
```

### 回溯解法2
```js
var subsets = function(nums) {
    let n = nums.length;
    let tmpPath = [];
    let res = [];
    let backtrack = (tmpPath,start) => {
        res.push(tmpPath);
       for(let i = start;i < n;i++){
           tmpPath.push(nums[i]);
           backtrack(tmpPath.slice(),i+1);
           tmpPath.pop();
       } 
    }
    backtrack(tmpPath,0);
    return res;
};
```
### 递归解法
### 迭代解法
### 字典解法