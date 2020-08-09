# 实现strStr()

> [28. 实现strStr()](https://leetcode-cn.com/problems/implement-strstr/)

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 求解indexOf
  if(needle === '') return 0;
  if(!haystack.length) return -1;
  let n = needle.length;
  for(let i=0; i<haystack.length; i++) {
    let tmp = haystack.substr(i, n);
    // console.log(tmp)
    if(tmp === needle) {
      return i;
    }
  }
  return -1;
};
```