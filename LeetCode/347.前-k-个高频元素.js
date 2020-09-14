/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

const { head } = require("../docs/.vuepress/config");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 解法1： hash表 
// 时间复杂度：O(nlogn)，而题目要求是小于 nlogn
// 空间复杂度：O(n)
var topKFrequent = function(nums, k) {
  if(!nums.length) return [];
  if(!k) return nums;

  const map = new Map();
  const set = [...new Set(nums)];

  for(let i=0; i<nums.length; i++) {
    const isHas = map.has(nums[i]);
    if(!isHas) {
      map.set(nums[i], 1);
    } else {
      const cur = map.get(nums[i]);
      map.set(nums[i], cur + 1);
    }
  }

  const res = set.sort((a, b) => map.get(b) - map.get(a));

  // console.log(res.slice(0, k))
  return res.slice(0, k)
};

// 解法2： map + 小顶堆
// var topKFrequent = function (nums, k) {  
//   // step1, 遍历nums,将数值和出现的频率，放在map中
//   const map = new Map();
//   nums.forEach(element => {
//     const isHas = map.has(element);
//     if(!isHas) {
//       map.set(element, 1)
//     } else {
//       const cur = map.get(element);
//       map.set(element, cur + 1);
//     }
//   });

//   // 如果元素的个数，小于等于K，则返回map的所有key
//   if(map.size <= k) {
//     return [...map.keys()]
//   }

//   // step2, 遍历map，将前K的值构建小顶堆
//   let i=0;
//   const heap = []
//   map.forEach((value, key) => {
//     if(i < k) {
//       // 取前K个插入堆
//       heap.push(value);
//       // 如果已经达到K个，则原地建堆
//       if(i == k-1) {
//         buildHeap(heap, map, k)
//       }
//     } else if(map.get(heap[1] < value)) {
//       // 替换并堆化
//       heap[1] = key
//       // 自上而下式堆化第一个元素
//       heapify(heap, map, k, 1)
//     }
//     i++
//   })

//   // 删除heap中第一个元素
//   heap.shift()
//   return heap

  


// }

// const buildHeap = (heap, map, k) => {
//   if(k === 1) return
//   // 从最后一个非叶子节点开始，自上而下式堆化
//   for(let i = Math.floor(k/2); i>=1 ; i--) {
//       heapify(heap, map, k, i)
//   }
// }

// const heapify = (heap, map, k, i) => {
//   // 自上而下式堆化
//   while(true) {
//     let minIndex = i
//     if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
//         minIndex = 2*i
//     }
//     if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
//         minIndex = 2*i+1
//     }
//     if(minIndex !== i) {
//         swap(heap, i, minIndex)
//         i = minIndex
//     } else {
//         break
//     }
// }
// }

// // 交换
// let swap = (arr, i , j) => {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }


// 解法3 桶排序, 时间复杂度O(n)， 空间复杂度O(n)
var topKFrequent = function(nums, k) {
  const map = new Map();
  nums.forEach(element => {
    const isHas = map.has(element);
    if(!isHas) {
      map.set(element, 1)
    } else {
      const cur = map.get(element);
      map.set(element, cur + 1);
    }
  });

  // 如果元素的个数，小于等于K，则返回map的所有key
  if(map.size <= k) {
    return [...map.keys()]
  }

  // 如果大于，则返回桶排序的结果
  return bucketSort(map, k);

  function bucketSort(map, k) {
    const arr = [];
    const res = [];

    // 将出现的频率作为下标，将出现的不同频率的，放入不同的桶内
    map.forEach((value, key) => {
      if(!arr[value]) {
        arr[value] = [key]
      } else {
        arr[value].push(key)
      }
    })
    console.log(arr)
    // 再倒序遍历arr

    for(let i=arr.length-1; i>=0 && res.length <k; i--) {
      if(arr[i]) {
        res.push(...arr[i])
      }
    }
    return res;
  }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end