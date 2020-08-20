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
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let res = []
  const mid = Math.floor((m+n)/2);
  // console.log(mid);
  let i = 0;
  let j = 0;
  let result = 0;
  while(i<m && j < n) {
    if(nums1[i] < nums2[j]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++
    }  
  }

  if(i<m) {
    res = res.concat(nums1.splice(i))
  }
  if(j<n) {
    res = res.concat(nums2.splice(j))
  }

  // if(res.length === mid + 1) break;
  // console.log(res);
  if((m+n) % 2 !== 0) {
    return res[mid]
  } else {
    return (res[mid] + res[mid-1]) / 2
  }

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end