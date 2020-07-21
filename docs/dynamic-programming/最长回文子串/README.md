# 最长回文子串
> [5.最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
## 中心扩散法
```js
const longestPalindrome = function(s) {
      if(!s || s.length < 2) return s;
      let start = 0;
      let end = 0;

      // 中心扩散法
      const expandCenter = function(s,left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
          left--;
          right++;
        }
        return right-left-1;
      }

      for(let i=0; i<s.length; i++) {
        let len1 = expandCenter(s, i,i);
        let len2 = expandCenter(s,i,i+1);
        let len = Math.max(len1, len2);
        if(len > end - start) {
          start = i - Math.floor((len - 1)/2)
          end = i + Math.floor((len)/2)
        }

      }

      return s.slice(start, end+1)
    }

    console.log(longestPalindrome('babad'))


```
## 动态规划法

重点是转换方程和边界条件

如果p[i]~p[j]是回文串，那么p[i+1]~p[j-1]也是回文子串，且p[i]===p[j]，所以我们的变换方程就是`p(i,j)=p(i+1,j-1) && p[i]===p[j]`；再考虑边界条件，如果字符串长度小于2时，必然是回文子串；

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