import { defineConfig } from 'vitepress';
import nav from './configs/nav';
import sidebar from './configs/sidebar';
import search from './configs/search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TypeScript 编程笔记",
  description: "Leo的TS学习实录",
  lang: 'zh-CN',
  lastUpdated: true,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    }
  },
  transformHead: ({ assets }) => {
    return [
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap' }]
    ]
  },
  head: [
    ['link', { rel: 'icon', href: 'https://pic1.zhimg.com/v2-cf2eeeb829610bc029776cdab2b1f3de_1440w.jpg?source=172ae18b' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://pic1.zhimg.com/v2-cf2eeeb829610bc029776cdab2b1f3de_1440w.jpg?source=172ae18b',
    nav,
    sidebar,
    search,
    lastUpdated: {
      text: '上次更新'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      copyright: `Copyright © ${ new Date().getFullYear() } Leo & UkiyoLee`,

    }
  }
})
