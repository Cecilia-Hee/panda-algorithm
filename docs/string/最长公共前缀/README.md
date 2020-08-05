# 最长公共前缀
> [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

## 横向比较

做法：
1. 先将最长公共子串res默认为第0个；
2. 从第1个开始遍历，如果第一个字符串中的字母有一个一旦与res的不一样，就直接跳出内部循环，截取到已经比较过的相同的字符串；
3. 要注意内部循环的边界条件，除了要小于当前字符串的总长度，还要小于res的长度
4. 如果遍历的过程中，发现res的长度为空，则直接返回，不需要再进行遍历了。

时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

空间复杂度：O(1)O(1)。使用的额外空间复杂度为常数。

```js
var longestCommonPrefix = function(strs) {
  if(!strs.length) return '';

  let res = strs[0];  // 初始化为第一个

  for(let i=1; i<strs.length; i++) {
    let j = 0;
    for(; j<strs[i].length && res.length; j++) {
      if(strs[i][j] !== res[j]) {
        break;
      }
    }

    res = strs[i].substr(0, j);
    if(res === '') {  // 如果中间的某个环节没有公共前缀，就直接返回了吧
      return ''
    }

  }
  return res;
}
```

## 纵向比较

## 分治思想