/*
 * @Author: Helijun
 * @Date: 2020-07-13 00:26:54
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-12 23:04:43
 * @Description: 
 */ 
const webpack = require('webpack')

module.exports = {
  title: 'panda刷算法',
  description: 'Just playing around',
  base: '/',
  cache: false,
  head:[
      ['link', {rel:'icon', href:'/icons/favicon.ico'}]  // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    editLinks: false,
    docDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '回溯',
        collapsable: true,
        children: [
          'backtrace/',
          'backtrace/全排列/',
          'backtrace/组合总数/',
          'backtrace/二维平面回溯/',
          // 'CSS/reflow_repaint'
        ]
      },
      {
        title: '动态规划',
        collapsable: true,
        children: [
          'dynamic-programming/',
          // 一种状态决定
          'dynamic-programming/509.斐波那契数列/',
          'dynamic-programming/打家劫舍/',
          'dynamic-programming/爬楼梯/',
          'dynamic-programming/最小路径和/',
          'dynamic-programming/不同路径/',
          'dynamic-programming/按摩师/', 
          'dynamic-programming/乘积最大的子序列/', 
          
          // 两种状态决定
          'dynamic-programming/最长回文子串/',                      
          'dynamic-programming/322.零钱兑换/',
          'dynamic-programming/最子序列/',
          'dynamic-programming/背包问题/',
          'dynamic-programming/最短编辑距离/',
          'dynamic-programming/高楼扔鸡蛋/',
          
          
          
        ]
      },
      {
        title: '链表',
        collapsable: true,
        children: [
          'listnode/',
          'listnode/双指针/'
        ]
      },
      {
        title: '字符串',
        collapseable: true,
        children: [
          'string/',
          'string/字符串相加/',
          'string/无重复字符的最长子串/',
          'string/有效的括号/',
          'string/最长公共前缀/',
          'string/罗马数字与整数互转/',
          'string/字符串转整数/',
          'string/实现strStr/',
          'string/外观数列/',
          'string/括号生成/',
          'string/Z字形变换/',
          'string/二进制求和/',
          'string/反转字符串中的单词/',
        ]
      }
    ]
  },
  plugins: ['@vuepress/back-to-top'],
  configureWebpack: (config, isServer) => {
    if(!isServer) {
      console.log(config)
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    }
  }
}