# 有效的括号
> [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

## 解法1

1. 先用map对象将字符串括号对存起来
2. 遍历整个数组，如果碰到了左括号，就把对应的右括号压入栈内；
3. 如果碰到的也是右括号，就出栈，比较栈顶元素与当前元素是否相等，如果不相等，就return false;

```js
var isValid = function(s) {
  if(!s.length) return true;
  const map = {
    '(':')',
    '[':']',
    '{':'}'
  }

  const stack = [];
  let top = '';
  for(let i=0; i<s.length; i++) {
    let value = map[s[i]];
    if(value) {
      stack.push(value)
    } else {
      top = stack.pop();
      if(top !== s[i]) {
        return false;
      }
    }
  }
  return !stack.length;
}
```

## 解法2

1. 直接遍历，遇见左括号就直接压栈，遇见右括号，就出栈，看栈顶元素是否和当前元素相等，如果不等，则return false;
2. 有两个边界条件，如果s的长度为0，则直接return true；如果s的长度不是偶数，则直接return false

```js
var isValid = function(s) {
  let n = s.length
  if(!n) return true;
  if(n%2 !== 0) return false;
  const stack = []
  for(let i=0; i<n; i++) {
    let item = s[i];
    switch (item) {
      case '(':
        stack.push(item)
        break;
      case '[':
        stack.push(item)
        break;
      case '{':
        stack.push(item)
        break;
      case ')':
        var top = stack.pop()
        if(top !== '(') return false;
        break;
      case ']':
        var top = stack.pop()
        if(top !== '[') return false;
        break;
      case '}':
        var top = stack.pop()
        if(top !== '{') return false;
        break;
      default:
        break;
    }
  }
  return !stack.length
};
```
