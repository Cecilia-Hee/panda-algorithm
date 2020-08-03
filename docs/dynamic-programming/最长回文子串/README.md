# 最长回文子串
> [5.最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

## 中心扩散法
<div style="background-color: RGBA(62,175,124,0.10); font-size: 14px; font-family:'PingFangSC-Regular'; color: #3eaf7c; font-weight: 600; padding: 10px; border-radius: 8px; margin-bottom: 20px;">
做法：<br/>

1. 枚举所有回文子串的中心位置;

2. 中心位置可能是一个字符，也可能是两个字符，和字符串的长度为奇数或者偶数有关系

3. 记录最长位置的相关变量，开头and长度

<br/>

</div>



```js
const longestPalindrome = function(s) {
  if(!s || s.length < 2) return s;
  let start = 0;
  let max = 1;

  // 中心扩散法
  const expandCenter = function(s,left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right-left-1;
  }

  for(let i=0; i<s.length-1; i++) {
    let odd = expandCenter(s, i,i);   // 奇数子串的长度
    let even = expandCenter(s,i,i+1); // 偶数子串的长度
    let len = Math.max(odd, even);
    if(len > max) {
      max = len;
      start = i - Math.floor((len - 1)/2)   
      // 起始位置为啥是这样呢, 因为现在的i在起始点和终点的中间，需要左移长度的一半
    }

  }

  return s.slice(start, start+max)
}

console.log(longestPalindrome('babad'))


```
## 动态规划法

状态：字符串中相隔距离大于等于2的两个字母，有选择与不选择两种；

重点是转换方程和边界条件

> 1. 如果p[i]~p[j]是回文串，那么给这个字符串两边加上同一个字母也是回文子串，即p[i+1]~p[j-1]必然是回文子串，且p[i]===p[j]；所以我们的变换方程就是`p(i,j)=p(i+1,j-1) && p[i]===p[j]`；再考虑边界条件，如果字符串长度小于2时，必然是回文子串；<br/>
> 2. 边界条件，如果字符串的长度只有1，那么必然是回文子串<br/>
> 3. 边界条件2，如果字符串的长度是2，且两个字母相同，那么也是回文子串<br/>

时间复杂度是：n^2

``` js
const longestPalindrome2 = function(s) {
      let n = s.length;
      let res = '';
      const dp = Array.from(new Array(n), () => new Array(n).fill(0))
      for(let i = n-1; i>=0; i--) {   // 从字符串的末尾开始
        for(let j=i; j<n; j++) {
          dp[i][j] = s[i]==s[j] && (j-i<2 || dp[i+1][j-1]);
          if(dp[i][j] && (j-i+1 > res.length)) {
            res = s.substring(i, j+1)
          }  
        }
      }
      return res;
}
```

## 动态规划解法2

思路：

> 如果一个子串为回文子串，那么给这个子串的两端各添加一个相同的字母，则结果也一定是回文子串。<br/>
> 如果用`dp[i][j]`表示子串s中从i到j闭区间内的子串是否为回文子串，那么此时的状态方程是：`dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1]`。<br/>
> 再考虑到边界情况，1. 如果一个子串的长度是1，那么它一定是回文子串<br/>
> 另一个边界条件是：`j-1-(i+1)+1<2即 j-i<3`，这个条件的原因是 如果s[i]==s[j],且s[i,j]的长度小于3时，不用检查子串是否为回文子串，因为一定是。

<div style="background-color: RGBA(62,175,124,0.10); font-size: 14px; font-family:'PingFangSC-Regular'; color: #3eaf7c; font-weight: 600; padding: 10px; border-radius: 8px; margin-bottom: 20px;">
做法：<br/>
1. 先设置一个二维的dp[i][j]，i和j的最大值都是n，即分别用i和j来表示下标的位置 <br/>
2. 然后将对角线上的元素的值都设置为true，因为对角线上的元素是同一个元素，只有一个元素时，必然是回文子串<br/>
3. 从第一列开始遍历和填充，即`j=1开始，i=0开始，i小于j结束`, <br/>
4. 如果s[i]!=s[j]，则直接设置为false，否则看j-i是否小于3，如果小于3， 则设置为true，如果不小于3，则看中间的子串是否为回文<br/>
5. 每次遍历结束之后，如果有为回文子串的，则和已有的最大长度做比较，如果大于已有的最大长度，则赋值。<br/>
6. tip: 只需要记录字符串的开始位置和最长长度，在最后输出的位置做截取就可以了。<br/>
</div>

```js
// 动态规划4
var longestPalindrome4 = function(s) {
  if(!s || s.length < 2) {
    return s;
  }

  let n = s.length;
  let maxlength = 1;
  let begin = 0;
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  for(let i=0; i<n; i++) {
    dp[i][i] = true;
  }

  for(let j = 1; j<n; j++) {
    for(let i=0; i<j; i++) {
      if(s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if(j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i+1][j-1]
        }
      }

      if(dp[i][j] && j-i+1 > maxlength) {
        begin = i;
        maxlength = j-i+1;
      }
    }
  }
  return s.slice(begin, begin+maxlength);
}

console.log(longestPalindrome4('ac'))
```