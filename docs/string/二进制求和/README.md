# 二进制求和

## 字符串相加

```js
var addBinary = function(a, b) {
  let res = [];
  let sub = 0
  for(i=a.length - 1, j=b.length-1; i>=0 || j>=0; i--,j--) {
    let itema = a[i] ? parseInt(a[i]) : 0;
    let itemb = b[j] ? parseInt(b[j]) : 0
    let sum = itema + itemb + sub;
    res.unshift(sum % 2)
    sub = Math.floor(sum / 2)
  }

  if(sub > 0) {
    res.unshift(sub)
  }

  return res.join("");
}
```

## bigInt

```js
var addBinary = function (a, b) {
  return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2)
}
```

## 位运算

运算超时，原因 JS parseInt 在将很大的二进制转十进制时，溢出。

```js
var addBinary = function(a, b) {
  a = parseInt(a, 2)
  b = parseInt(b, 2)
  while(b != 0) {
    let carry = a & b;
    a = a ^b;
    b = carry << 1
  }
  return a.toString(2)
  
}
```

## 逐位位运算
```js
var addBinary4 = function (a, b) {
  let res = []
  let sub = 0;
  for(i=a.length - 1, j=b.length-1; i>=0 || j>=0; i--,j--) {
    let itema = a[i] ? parseInt(a[i], 2) : 0;
    let itemb = b[j] ? parseInt(b[j], 2) : 0;
    let val = itema ^ itemb;
    let curSub = itema & itemb;
    if(sub) {
      // 有来自上一位的进位
      if(val == 0) {
        val = 1;
      } else {
        val = 0;
        curSub = 1;
      }
    }
    sub = curSub
    res.unshift(val)
  }
  if(sub == 1) {
    res.unshift(sub)
  }
  return res.join("")
}

```
