# 回溯原理
解决一个回溯算法，实际上就是解决决策树的遍历过程，只需要考虑以下三个问题：
1. 维护路径：已经做出的选择
2. 选择列表：当前可以做出的选择
3. 结束条件：达到决策树的底层，无法再继续做出选择

伪代码，**核心是在for循环里面，在递归之前做出选择，在递归之后撤销选择**：

```js
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

必须说明的是，符合回溯框架的，不管怎么优化，时间复杂度都不可能低于 `O(N!)`，因为穷举整棵决策树是无法避免的。这也是回溯算法的一个特点，不像动态规划存在重叠子问题可以优化，回溯算法就是纯暴力穷举，复杂度一般都很高.