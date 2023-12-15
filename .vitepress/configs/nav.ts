import { DefaultTheme } from "vitepress";

const navbar: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: '/',
  },
  {
    text: '指南',
    link: '/guide',
  },
  {
    text: '参考',
    link: '/reference',
  },
  {
    text: '演练场',
    link: 'https://www.typescriptlang.org/play'
  },
  {
    text: '贡献',
    items: [
      {
        text: '参与文档',
        link: '/contribution'
      },
      {
        text: '贡献者名单',
        link: '/contributors'
      }
    ]
  }
];

export default navbar;