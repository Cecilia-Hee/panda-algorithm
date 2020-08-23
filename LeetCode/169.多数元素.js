/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法1：借助set和map，时间复杂度是 n, 空间复杂度是 n 
var majorityElement = function(nums) {
  const map = new Map();
  const n = nums.length;
  const max = Math.floor(n / 2);
  let res = new Set()
  for(let i=0; i<n; i++) {
    if(!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      let count = map.get(nums[i])
      map.set(nums[i], count+1)
    }
    if(map.get(nums[i]) > max) {
      res.add(nums[i])
    }
  }
  // console.log(map, max, res)
  return [...res]
};

// 解法2：排序，如果是个数大于 n/2的，则排序后取n/2为下标的就可以了
// 时间复杂度是 nlogn, 空间复杂度是 logn, 因为sort的系统函数
var majorityElement = function (nums) { 
  nums.sort((a, b) => a-b)
  const index = Math.floor(nums.length / 2)
  return nums[index]
}

// 解法3： Boyer-Moore 算法
// 时间复杂度是n, 空间复杂度是 1；
// 思路： 我们将候选众数 candidate 保持不变的连续的遍历称为「一段」。
// 在同一段中，count 的值是根据 candidate == x 的判断进行加减的。
// 那么如果 candidate 恰好为 maj，那么在这一段中，count 和 value 的变化是同步的；
// 如果 candidate 不为 maj，那么在这一段中 count 和 value 的变化是相反的。因此就有了这样一个奇妙的性质

var majorityElement = function (nums) {  
  let count = 0;
  let res = null;

  for(let i=0; i<nums.length; i++) {
    if(count == 0) {
      res = nums[i]
    }

    if(res === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return res;
}
// @lc code=end

