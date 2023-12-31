import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '简介',
      items: [
        {
          text: '什么是 TypeScript',
          link: '/guide/introduction'
        },
        {
          text: '安装 TypeScript',
          link: '/guide/installation'
        },
        {
          text: 'Hello TypeScript',
          link: '/guide/hello-typescript'
        }
      ]
    },
    {
      text: '基础',
      items: [
        {
          text: '基础类型',
          link: '/guide/basic/basic-types'
        }
      ]
    },
    {
      text: '进阶',
      items: []
    }
  ],
  // '/api': [
  //   {
  //     text: 'Array',
  //     link: '/array',
  //     items: [
  //       {
  //         text: 'Array.new()',
  //       }
  //     ]
  //   }
  // ]
}

export default sidebar;