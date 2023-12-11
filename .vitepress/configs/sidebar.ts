import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '简介',
      link: '/guide/',
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