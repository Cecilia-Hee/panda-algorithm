# 全排列的题目啊

## 普通全排列
> 题目：[46.全排列](https://leetcode-cn.com/problems/permutations/submissions/)

回溯决策树：

<img style="width:70%; display:block; margin: 0 auto" :src="$withBase('/backtrace/1.jpg')" alt="http-2-https">


### 全排列解法
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums.length) return [];
    const res = [];
    const path = []
    backTrace(nums, path, res);
    return res;
};

function backTrace(nums, path, res) {
    if(path.length == nums.length) {
        res.push(path.slice());
        return;
    }

    for(let i=0; i<nums.length; i++) {
        if(path.includes(nums[i])) {
            continue;
        }
        path.push(nums[i]);
        backTrace(nums, path, res);
        path.pop() 
    }
}
```

### 队列解法

## 全排列 + 剪枝
> [47. 全排列2](https://leetcode-cn.com/problems/permutations-ii/)

重点：排序+hash

解法：
1. 先排序，排序的奥秘，是后面再对比是否有重复元素时，就可以直接跳过了
2. 其余解法和普通的全排列是一样的，
3. 要注意的是，最后`push`到res的`path`必须要取`path.slice()`，因为path是个引用类型的数据
4. *剪枝*：用hash存储index，制止相同的index被放进去

```js
var permuteUnique = function(nums) {
    if (!nums.length) return []
      nums.sort((a,b) => a-b)
      const res = [];
      const path = [];
      const hash = {};

      const backtrace = (path) => {
        if(path.length === nums.length) {
          res.push(path.slice());
          return;
        }

        for(let i=0; i<nums.length; i++) {
          if(hash[i] || (i > 0 && !hash[i-1] && nums[i] === nums[i-1])) continue;
          hash[i] = true;
          path.push(nums[i]);
          backtrace(path);
          hash[i] = false;
          path.pop();        
        }
      }

      backtrace(path);
      return res
};
```
