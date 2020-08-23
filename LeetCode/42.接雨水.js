/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// ***********************************************
// 解法1：暴力法 
// 思路：从当前元素开始，向左扫描，找到左边的最大值
// 向右扫描，找到右边的最大值，
// 然后得到这两个值的较小值，减去当前的值，
// 所得到的的结果，就是当前这个低洼处可以积到多少雨水，随后把得到的值都加起来，就是所有的雨水
// 开头和结尾的两个值去掉不遍历
// 总结来说，就是求当前值与左右两侧的较小值的差
// 时间复杂度是n*n

var trap = function(height) {
  let res = 0;
  const size = height.length;
  for(let i=1;i<size-1; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    for(let j=i; j>=0; j--) {
      maxLeft = Math.max(maxLeft, height[j])
    }
    for(let j=i;j<size; j++) {
      maxRight = Math.max(maxRight, height[j])
    }
    // console.log(maxLeft, maxRight)
    res += Math.min(maxLeft, maxRight) - height[i]
  }
  return res;
};

// *************************************************
// 解法2，动态规划法
// 思路：先从左往右，得出当前值左边的最大高度
// 再从右往右，得到当前值右边的最大高度
// 再遍历，当前值的左边值和右边值得较小值，与当前值作比较
// 时间复杂度降低到3*n; 空间复杂度是2*n

var trap = function(height) {
  let res = 0;
  const n = height.length;
  if(n <= 2) return 0;
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  rightMax[n-1] = height[n-1]
  for(let i=1; i<n; i++) {
    leftMax[i] = Math.max(leftMax[i-1], height[i]);
  }
  for(let i=n-2; i>=0; i--) {
    rightMax[i] = Math.max(rightMax[i+1], height[i])
  }
  for(let i=1; i<n-1; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return res;
}

// ***************************************
// 解法3：双指针
// 思路，分别设置left，right为头尾指针，谁小就从哪头开始遍历
// 遍历的同时，记录走过的最大值，如果遇到当前值是小于最大值的
// 说明这里形成了低洼处，就把它加在结果中；
// 用双指针，有个假设，如果从左边开始遍历，就假设右边一定有一个很高的柱子
// 从右边开始遍历也是同样的道理；积水量依赖于当前方向上柱子高度
// 时间复杂度是n，空间复杂度是1
var trap = function(height) {
  let res = 0;
  let n = height.length;
  let left = 0;
  let right = n-1;
  let leftMax = 0;
  let rightMax = 0;
  while(left < right) {
    if(height[left] < height[right]) {
      if(leftMax < height[left]) {
        leftMax = height[left]
      } else {
        // 说明左边有比当前更大的值
        res += leftMax - height[left]
      }
      left ++;
    } else {
      if(rightMax < height[right]) {
        rightMax = height[right]
      } else {
        res+= rightMax - height[right]
      }
      right--;
    }
  }
  return res;

}

// *****************************************
// 解法4： 利用递减栈
// 思路，积水只能在低洼处形成，当后面的柱子的高度低于前面时，是无法接雨水的，
// 因此可以利用单调递减栈，来存储可能会积雨水的柱子的index，当找到一个比前面高的柱子时，就算接到了雨水
// 时间复杂度：n, 空间复杂度：n
var trap = function (height) {
  const stack = [];
  let i=0;
  let res = 0;
  while(i < height.length) {
    // 当栈内有元素，并且当前的值大于栈顶元素时，进入这个循环
    while(stack.length && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop();    // 低洼处的index
      if(!stack.length) break;    // 出栈后，栈为空，则直接退出循环
      const leftBound = stack[stack.length - 1]
      let width = i - leftBound - 1;        // 积水宽度，是现在与新的栈顶元素的距离，当前是top的右边界，而新的栈顶元素是top的左边界
      let h = Math.min(height[leftBound], height[i]) - height[top]  // 高度是两个边界的最小值，减去低洼处
      let area = width * h;
      res += area;
    }
    stack.push(i)
    i++;
  }
  return res;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end