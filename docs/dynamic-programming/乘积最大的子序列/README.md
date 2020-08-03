# 乘积最大的子序列

1. 遍历数组时计算当前最大值，不断更新
2. 令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
**3. 由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])，当负数出现时则imax与imin进行交换再进行下一步计算**
4. 时间复杂度：O(n)

```js
var maxProduct = function(nums) {
  if(!nums.length) return 0;
  if(nums.length < 2) return nums[0];
  let res = Number.MIN_SAFE_INTEGER;
  let max = 1;
  let min = 1;
  for(let i=0; i<nums.length; i++) {
    if(nums[i] < 0) {
      [max, min] = [min, max]
    }
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    res = Math.max(res, max)
  }
  return res;
};
```

> 举例：输入[2,3,-2,4,-2]， 最终结果是96，计算过程如下：

|  值 |  2  | 3 | -2 | 4 | -2
|--|--|--|--|--|--|
| max | 2 | 6 | -2 | -8 | 96
| min | 2 | 3 | -12 | -48 | 16
| res | 2 | 6 | 6 | 6 | 96

> 这道题里最重要的，就是负数会让之前的值变小，但是再来一个负数，值就会变大，且负数是越小越好，而整数是越大越好

:::tip
考虑当前位置如果是一个负数的话，那么我们希望以它前一个位置结尾的某个段的积也是个负数，这样就可以负负得正，并且我们希望这个积尽可能「负得更多」，即尽可能小。如果当前位置是一个正数的话，我们更希望以它前一个位置结尾的某个段的积也是个正数，并且希望它尽可能地大
:::