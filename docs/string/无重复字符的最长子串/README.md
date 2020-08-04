# 无重复字符的最长子串
> [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)


## 借助数组的解法

这里需要注意的是 `arr.splice(0,index+1)`， 因为结果是要连续的子串，所以需要将从开始到当前重复字符都删除掉。

比如下面的例子中，当把`pw`放进到arr中，接着放w时，需要将前面的pw都清除掉，再放第二个w.

```js
const lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;
  let arr = [];
  let max = 0;
  for(let i=0; i<s.length; i++) {
    let index = arr.indexOf(s[i])
    if(index > -1) {
      arr.splice(0, index+1);
    } 
    arr.push(s[i]);
    max = Math.max(max, arr.length)
  }
  return max;
}

console.log(lengthOfLongestSubstring("pwwkew"))
```

## 滑动窗口

```js
const lengthOfLongestSubstring2 = function(s) {
  if(!s.length) return 0;
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const map = new Map();
  for(right=0; right<s.length; right++) {
    let isHas = map.has(s[right]);
    if(isHas) {
      // 把left移动到出现位置的下一个
      left = Math.max(left, map.get(s[right])+1)
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right-left+1);
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring2("pwwkew"))
```