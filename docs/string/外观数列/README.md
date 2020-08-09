# 外观数列

>[38.外观数列](https://leetcode-cn.com/problems/count-and-say/)

## 递归解法

重点在于正则匹配，这里的`/(\d)\1*/g`表示： \d 匹配数字 \1指第一个匹配括号内的元素 *代表匹配0次以上 连起来就是 匹配连续0次以上的数字

```js
var countAndSay = function(n) {
  if(!n) return ''
  if(n==1) return n.toString();

  var tmpArr = countAndSay(n-1).match(/(\d)\1*/g);

  let res = ''

  tmpArr.forEach((item) => {
    let count = item.length;
    let num = item.substring(0,1)
    res+=count+num+''
  })

  return res;
};
```

## 正则replace解法

重点是：正则，还有replace的第二个参数，可以是function

```js
var countAndSay = function(n) {
  if(!n) return ''
  if(n==1) return n.toString();
  let prev = '1';
  for(let i=1; i<n; i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => ''+item.length+item[0])
  }
  return prev;
};
```