# Z字形变换

## 读字符串的过程【按行访问】

要点：有个flag，用来判断是上行还是下行

```js
// 读字符串的过程
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    const row = new Array(numRows).fill("");
    let goDown = false;
    let curRow = 0;

    for(let i=0; i<s.length; i++) {
      row[curRow] += '' + s[i]
      if(curRow === 0 || curRow === numRows - 1) {
        goDown = !goDown;
      }
      curRow += goDown ? 1 : -1;
    }

    // console.log(row)
    return row.join("")
};
```