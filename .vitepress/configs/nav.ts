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
    text: '演练场',
    link: 'https://www.typescriptlang.org/play'
  }
  // {
  //   text: 'JavaScript API',
  //   link: '/api'
  // },
];

export default navbar;