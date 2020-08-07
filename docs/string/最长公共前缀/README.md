# 最长公共前缀
> [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

## 横向比较

做法：
1. 先将最长公共子串res默认为第0个；
2. 从第1个开始遍历，如果第一个字符串中的字母有一个一旦与res的不一样，就直接跳出内部循环，截取到已经比较过的相同的字符串；
3. 要注意内部循环的边界条件，除了要小于当前字符串的总长度，还要小于res的长度
4. 如果遍历的过程中，发现res的长度为空，则直接返回，不需要再进行遍历了。

- 时间复杂度：O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。
- 空间复杂度：O(1)。使用的额外空间复杂度为常数。

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

以第一个字符串的长度为最长设置为最大的列数，字符串数组的长度为最大的行数，纵向比较同一列的几个字母是否相同，如果碰到不同的，则直接返回这一列之前的。

如下所示，当比较到第二列时，发现前两行都是o, 而第三行是i; 则直接返回前两列的。

|  0 |  1  |2|3|4|5|
|--|--|--|--|--|--|
| f |  l  | o | w | e | r
| f | l | o | w |
| f | l | i | g | h | t 

```js
var longestCommonPrefix2 = function(strs) {
  if(!strs.length) return '';
  let row = strs.length;
  let col = strs[0].length;
  let res = strs[0];

  for(let i=0; i<col; i++) {
    for(let j=1; j<row; j++) {
      if(strs[j][i] !== strs[j-1][i]) {
        res = strs[j].substr(0, i);
        return res;
      }
    }
  }
  return res;
}
```
时间复杂度和空间复杂度都与横向比较相同

## 分治思想
利用分治思想，将字符串数组分成单个的字符串，然后两两比较，最终得到最长公共前缀

[分治思想](https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode-solution/)

需要注意的是：
- 若分裂后的两个数组长度不为 1，则继续分裂
- 直到分裂后的数组长度都为 1，
- 然后比较获取最长公共前缀

- 时间复杂度：O(mn), 其中m是字符串数组中字符串的平均长度，n是字符串的个数， 时间复杂度的递推式是 `T(n)=2*T(n/2)+O(m)`，通过计算可得 T(n)=O(mn)T(n)=O(mn)

- 空间复杂度：O(m*logn)，n是数组的长度，m为字符串数组中最长字符的长度

```js
var longestCommonPrefix3 = function(strs) {
  if(!strs.length) return '';
  return binarySearch(strs);

  function binarySearch(arr) {
    let n = arr.length;
    if(n === 1) return arr[0]
    let mid = Math.floor(n/2) ;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    return compare(binarySearch(left), binarySearch(right))
  }

  function compare(str1, str2) {
    let i = 0;
    for(;i<str1.length && i<str2.length; i++) {
      if(str1[i] !== str2[i]) {
        break;
      }
    }
    return str1.slice(0, i)
  }
}
```

## 仅需最大，最小长度字符串的公共前缀

做法：
1. 先求出字符串数组中，长度最长和最短的两个字符串，公共前缀必然是这俩的前缀
2. 再得出最长和最短的公共前缀即可

- 时间复杂度：O(n+m), 其中n是字符串数组的长度，m是最短字符串的长度
- 空间复杂度：O(1)

```js
var longestCommonPrefix4 = function(strs) {
  if(!strs.length) return '';
  let max = 0;
  let min = 0;
  for(let i=1; i<strs.length; i++) {
    if(strs[i] > strs[max]) {
      max = i;
    }
    if(strs[i] < strs[min]) {
      min = i
    }
  }

  let i=0;
  for(; i<strs[min].length; i++) {
    if(strs[min][i] !== strs[max][i]) {
      break;
    }
  }

  return strs[min].slice(0, i)
}

```