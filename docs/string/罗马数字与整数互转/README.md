# 罗马数字与整数互转

## 罗马数字转整数
> [13. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)

### 解法1

```js
var romanToInt = function(s) {
    if(!s.length) return 0;
    const map = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000
    }
    let res = 0;
    for(let i=0; i<s.length;) {
      // 先计算有两个字母的
      if(i+1 < s.length && map[s.substring(i, i+2)]) {
        res += map[s.substring(i, i+2)]
        i+=2;
      } else if(map[s.substring(i, i+1)]){
        res += map[s.substring(i, i+1)]
        i+=1;
      }
    }
    return res;
};

console.log(romanToInt("III"))
```

#### substr和substring的区别

js中substr和substring都是截取字符串中子串，非常相近，可以有一个或两个参数。

语法：<br/>
`substr(start [，length]) 第一个字符的索引是0，start必选 length可选`

`substring(start [, end]) 第一个字符的索引是0，start必选 end可选`

- 相同点：当有一个参数时，两者的功能是一样的，返回从start指定的位置直到字符串结束的子串
```js
var str = "hello Tony";

str.substr(6);  //Tony

str.substring(6); //Tony
```
 
- 不同点：有两个参数时

（1）substr(start,length) 返回从start位置开始length长度的子串

“goodboy”.substr(1,6);   //oodboy

【注】当length为0或者负数，返回空字符串

（2）substring(start,end) 返回从start位置开始到end位置的子串（不包含end）

“goodboy”.substring(1,6);  //oodbo

- 【注】:

（1）substring 方法使用 start 和 end 两者中的较小值作为子字符串的起始点

（2）start 或 end 为 NaN 或者负数，那么将其替换为0

## 整数转换为罗马数字
> [12.整数转换为罗马数字](https://leetcode-cn.com/problems/integer-to-roman/)

```js
var intToRoman = function(num) {
    // 直接硬编码
    const chars = [
      ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
      ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
      ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
      ['','M', 'MM', 'MMM']
    ]

    let res = '';
    res += chars[3][Math.floor(num/1000)] + chars[2][Math.floor(num%1000/100)] + chars[1][Math.floor(num%100/10)] + chars[0][num%10];
    return res;
  }
  console.log(intToRoman(3))
```
