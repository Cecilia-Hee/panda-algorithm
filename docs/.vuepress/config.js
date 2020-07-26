/*
 * @Author: Helijun
 * @Date: 2020-07-13 00:26:54
 * @LastEditors: Helijun
 * @LastEditTime: 2020-07-26 17:53:43
 * @Description: 
 */ 
const webpack = require('webpack')

module.exports = {
  title: 'panda刷算法',
  description: 'Just playing around',
  base: '/',
  cache: false,
  head:[
      ['link', {rel:'icon', href:'/images/favicon.ico'}]  // 增加一个自定义的 favicon(网页标签的图标)
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
          'dynamic-programming/最长回文子串/',
          'dynamic-programming/509.斐波那契数列/',
          'dynamic-programming/322.零钱兑换/',
          'dynamic-programming/最子序列/',
          'dynamic-programming/背包问题/',
          'dynamic-programming/最短编辑距离/',
          'dynamic-programming/高楼扔鸡蛋/',
          'dynamic-programming/爬楼梯/',
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