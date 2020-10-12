/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */ 
// 解法1：
// 1. 分别定义left和right指针，如果right-left+1<k, 则说明不存在该字符串，则返回0；
// 2. 遍历整个字符串s, 得到每个字符出现的频率
// 3. 从left指针开始，如果left出现的次数小于K，则left++；
// 4. 同时，从right指针开始，如果right出现的次数小于K，则right--；
// 5. 遍历之后，得到right-left+1的值
var longestSubstring = function(s, k) {
  if(k==0 || !s || s.length < k) {
    return 0;
  }

  const count = (left, right) => {
    const map = new Map()
    for(let i=left; i<=right; i++) {
      const isHas = map.has(str[i]);
      if(!isHas) {
        map.set(str[i], 1);
      } else {
        const times = map.get(str[i])
        map.set(str[i], times + 1)
      }
    }

    // 此时就得到了map
    while(str[left] && right-left+1 >= k && map.get(str[left]) < k) {
      ++left;
    } 
    while(str[right] && right-left+1 >= k && map.get(str[right]) < k) {
      --right;
    }

    // 排除子串中包含符合要求的字符，但是这个长度不会出现对应的频率
    if (right - left + 1 < k) return 0

    // console.log(right,left)

    // 对子串进行处理，对于子串中不满足的，进行递归处理？？？
    for(let i=left; i<=right; i++) {
      if(map.get(str[i]) < k) {
        // console.log(i)
        return Math.max(count(left, i-1), count(i+1, right))
      }
    }

    return right - left + 1;
  }
  const str = s.split("")
  return count(0, str.length-1)
  
  
};


// 解法2：分治思想
var longestSubstring = function(s, k) {
  if(s.length < k) return 0;

  // 1. 用map存储每个字符出现的个数
  const map = new Map()
  for(let i=0; i<s.length; i++) {
    const isHas = map.has(s[i]);
    if(!isHas) {
      map.set(s[i], 1);
    } else {
      const times = map.get(s[i])
      map.set(s[i], times + 1)
    }
  }

  // 2. 遍历map， 如果某个字符的个数小于K，则用这个字符分割字符串
  // 然后将分割后的字符串进行遍历，得到每个字符串的个数，
  // 最后拿到最大的个数即可
  // console.log(map)
  for(let ent of map) {
    if(map.get(ent[0]) < k) {
      const sarr = s.split(ent[0]);
      const ans = []
      for(let ss of sarr) {
        ans.push(longestSubstring(ss, k))
      }
      // console.log(...ans)
      return Math.max(...ans)
    }
  }

  return s.length;

}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestSubstring;
// @after-stub-for-debug-end