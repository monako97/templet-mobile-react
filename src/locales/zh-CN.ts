import type { LocaleConfig } from 'app:locales';

const zhCN: LocaleConfig = {
  language: 'zh_CN',
  title: '简体中文',
  translation: {
    home: '主页',
    'dynamic/:id': '动态路由-ID',
    'dynamic/:id/:name': '动态路由-ID-Name',
    'home/dynamic/:id': '主页-动态路由-ID',
    'home/dynamic/:id/:name': '主页-动态路由-ID-Name',
    'home/dynamic': '主页-子页面',
    'sub-page-view': '子路由页面',
    jump: '跳转',
  },
};

export default zhCN;
