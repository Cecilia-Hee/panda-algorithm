# 高楼扔鸡蛋

> [887. 鸡蛋掉落](https://leetcode-cn.com/problems/super-egg-drop/)

难哭了
```js
var superEggDrop = function(K, N) {
      if(K === 0) return 0;
      if(N === 0) return 0;
      if(K === 1) return N;

      const dp = new Array(K+1).fill(0);
      let res = 0;

      while(dp[K] < N) {
        for(i=K; i>0; i--) {
          dp[i] = dp[i-1] + dp[i] + 1;
        }
        res ++;
      }
      console.log(dp)
      return res;
    };
```