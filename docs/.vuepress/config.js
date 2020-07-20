/*
 * @Author: Helijun
 * @Date: 2020-07-13 00:26:54
 * @LastEditors: Helijun
 * @LastEditTime: 2020-07-20 08:02:25
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