/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 解法1 暴力求解
// 时间复杂度：O(NKlogK)，其中 N 是 strs 的长度，而 K 是 strs 中字符串的最大长度。当我们遍历每个字符串时，外部循环具有的复杂度为 O(N)。然后，我们在 O(KlogK) 的时间内对每个字符串排序

// var groupAnagrams = function(strs) {
//   if(!strs || !strs.length) return [];
//   const map = {};
//   for(let i=0; i<strs.length; i++) {
//     const sortItem = strs[i].split("").sort().join("");
//     if(!map[sortItem]) {
//       map[sortItem] = [];
//     }
//     map[sortItem].push(strs[i])
//   }
//   const res = Object.values(map)
//   return res
// };

// 解法2 计数求解
var groupAnagrams = function(strs) {
  if(!strs || !strs.length) return [];
  const map = new Map()

  for(let i=0; i<strs.length; i++) {
    const arr = new Array(26).fill(0);
    const str = strs[i]
    for(let j=0; j<str.length; j++) {
      let index = str[j].charCodeAt() - 97;
      arr[index]++;
    }
    const key = arr.join(",");
    if(!map.has(key)) {
      map.set(key, [str])
    } else {
      let temp = map.get(key)
      temp.push(str);
      map.set(key, temp)
    }
  }

  // console.log(...map.values())

  return [...map.values()];
}
// @lc code=end

