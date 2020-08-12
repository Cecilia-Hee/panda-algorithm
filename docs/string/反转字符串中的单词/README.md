# 反转字符串中的单词

> [151. 反转字符串中的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

## reduce解法

```js
var reverseWords = function(s) {
  s = s.trim();
  if(!s) return ''
  let arr = s.split(" ");
  let res = arr.reduce((prev, cur, index) => {
    if(cur) {
      prev.unshift(cur)       
    }
    return prev;
  }, [])
  return res.join(" ")
}
```

## 正则解法
```js
var reverseWords = function(s) {
  s = s.trim();
  if(!s) return ''
  return s.split(/\s+/).reverse().join(" ")
}
console.log(reverseWords("a good   example"))
```

## 双端队列解法

```js
var reverseWords = function(s) {
  // step1, 先去掉字符串两边的空格
  s = s.trim();
  let left = 0;
  let right = s.length - 1;
  let word = ''
  let res = []
  while(left <= right) {
    let char = s.charAt(left);
    if(char === ' ' && word){
      res.unshift(word);
      word = ''
    } else if(char !== ' ') {
      word += char
    }
    left++
  }
  res.unshift(word)
  return res.join(" ");
};
```
