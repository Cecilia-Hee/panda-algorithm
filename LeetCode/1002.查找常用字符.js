/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */

// 数组方法
var commonChars = function(A) {
  let res = A[0].split("");
  for(let i=1; i<A.length; i++) {
    const item = A[i].split("");
    res = res.filter((letter) => {
      const index = item.indexOf(letter);
      if(index > -1) {
        item.splice(index, 1)
      }
      return index > -1
    })
  }
  return res;
};

// hash表解法
var commonChars = function(A) {
  const map = new Map();
  const arr = A[0].split("")
  arr.forEach((letter) => {
    map.has(letter) ? map.set(letter, map.get(letter)+1) : map.set(letter, 1);
  })

  const map2 = new Map()
  for(let i=1; i<A.length; i++) {
    const letter = A[i]
    map2.has(letter) ? map2.set(letter, map2.get(letter)+1) : map2.set(letter, 1);

    map.set(letter, Math.min(map.get(letter) || 0, map2(letter) || 0))
  }

  // 对比
  console.log(map)

}
// @lc code=end

