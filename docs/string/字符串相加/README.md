# 字符串相加

> [415.字符串相加](https://leetcode-cn.com/problems/add-strings/)

```js
var addStrings = function(num1, num2) {
  let i=num1.length-1;
  let j=num2.length-1;
  let add = 0;
  const res = []

  // add!=0，是用在，例如输入了1和9这样的字符串时使用的
  while(i>=0 || j>=0 || add!=0) {
    let x = i >=0 ? num1[i] : 0;
    let y = j >=0 ? num2[j] : 0;
    let result = parseInt(x) + parseInt(y) + add;
    res.unshift(result % 10);
    add = Math.floor(result / 10);
    i--;
    j--;
  }
  return res.join('')
};
```