/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 解法1： 归并做法 ， 时间复杂度是m+n
// var findMedianSortedArrays = function(nums1, nums2) {
//   const m = nums1.length;
//   const n = nums2.length;
//   let res = []
//   const mid = Math.floor((m+n)/2);
//   // console.log(mid);
//   let i = 0;
//   let j = 0;
//   let result = 0;
//   while(i<m && j < n) {
//     if(nums1[i] < nums2[j]) {
//       res.push(nums1[i]);
//       i++;
//     } else {
//       res.push(nums2[j]);
//       j++
//     }  
//   }

//   if(i<m) {
//     res = res.concat(nums1.splice(i))
//   }
//   if(j<n) {
//     res = res.concat(nums2.splice(j))
//   }

//   // if(res.length === mid + 1) break;
//   // console.log(res);
//   if((m+n) % 2 !== 0) {
//     return res[mid]
//   } else {
//     return (res[mid] + res[mid-1]) / 2
//   }

// };

// 解法2： 二分查找法
var findMedianSortedArrays = function(nums1, nums2) {
  // 1. 先查看两个数组的长度，用短的来做分隔
  if(nums1.length > nums2.length) {
    const tmp1 = nums1;
    nums1 = nums2;
    nums2 = tmp1;
  }

  const m = nums1.length;
  const n = nums2.length;
  // 分割线左边元素需要满足的个数
  const totalLeft = Math.floor((m+n+1) / 2);

  // 在nums1的[0,m)区间内查找恰当的分割线
  // 是的nums1[i-1]<=nums2[j] && nums2[j-1]<=nums1[i]
  let left = 0;
  let right = m;
  while(left < right) {
    let i = left + Math.floor((right - left + 1)/2);
    let j = totalLeft - i;  // nums2的分割线，其实也就是 （n+1）/2
    if(nums1[i-1] > nums2[j]) {   // 如果nums1[i-1] > nums[j]，说明在nums1中分割线太靠右了，需要往左移动，即搜索区间就变成[0,i-1)
      // 查找 [left, i-1)
      right = i-1;  
    } else {
      // 查找范围 [i, right)
      left  = i;
    }
  }

  let i = left;
  let j = totalLeft - i;
  const nums1LeftMax = i==0 ? Number.MIN_SAFE_INTEGER : nums1[i-1];
  const nums1RightMin = i==m ? Number.MAX_SAFE_INTEGER : nums1[i];
  const nums2LeftMax = j==0 ? Number.MIN_SAFE_INTEGER : nums2[j-1];
  const nums2RightMin = j==n ? Number.MAX_SAFE_INTEGER : nums2[j];

  if((m+n) % 2 !== 0) {
    return Math.max(nums2LeftMax, nums1LeftMax);
  } else {
    return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin))/2
  }
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end