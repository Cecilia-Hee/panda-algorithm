/*
 * @Author: Helijun
 * @Date: 2020-07-13 00:26:54
 * @LastEditors: Helijun
 * @LastEditTime: 2020-07-30 08:14:14
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