/*
 * @Author: Helijun
 * @Date: 2020-07-13 00:26:54
 * @LastEditors: Helijun
 * @LastEditTime: 2020-07-14 00:16:45
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
          'backtrace/46.全排列/',
          'backtrace/39.组合总数/',
          // 'CSS/reflow_repaint'
        ]
      },
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